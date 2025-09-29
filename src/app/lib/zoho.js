let accessToken = null;
let accessTokenExpiry = 0;

// 🔑 Helper: refresh access token
export async function refreshAccessToken() {

  try {
    const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.access_token) {
      console.error("Zoho token refresh failed:", data);
      throw new Error(`Failed to refresh Zoho access token: ${data.error || 'Unknown error'}`);
    }

    accessToken = data.access_token;
    accessTokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // Refresh 60s before expiry
    console.log("✅ Zoho access token refreshed successfully");

    return accessToken;
  } catch (error) {
    console.error("❌ Error refreshing Zoho token:", error);
    throw error;
  }
}

// 🔑 Helper: get access token (reuse until expiry)
export async function getAccessToken() {
  if (!accessToken || Date.now() >= accessTokenExpiry) {
    return await refreshAccessToken();
  }
  return accessToken;
}

// 🔑 Helper: create lead in Zoho CRM
export async function createZohoLead(leadData) {
  try {
    let token = await getAccessToken();

    const payload = {
      data: [leadData]
    };

    console.log("📤 Sending to Zoho CRM:", JSON.stringify(payload, null, 2));

    let res = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // If token expired, retry once with fresh token
    if (res.status === 401) {
      console.log("🔄 Token expired, refreshing...");
      token = await refreshAccessToken();

      res = await fetch("https://www.zohoapis.com/crm/v2/Leads", {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    const responseData = await res.json();

    if (!res.ok) {
      console.error("❌ Zoho API Error:", responseData);
      throw new Error(`Zoho API error: ${responseData.message || res.statusText}`);
    }

    // Check if lead creation was successful
    if (responseData.data && responseData.data[0] && responseData.data[0].code === "SUCCESS") {
      console.log("✅ Lead created successfully in Zoho CRM");
      return responseData;
    } else {
      console.error("❌ Lead creation failed:", responseData);
      throw new Error(`Lead creation failed: ${responseData.data?.[0]?.message || 'Unknown error'}`);
    }

  } catch (error) {
    console.error("❌ Error creating Zoho lead:", error);
    throw error;
  }
}