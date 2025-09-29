import HomePage from "./home/HomePage";

export const metadata = {
  title: 'Business Setup Consultants in Dubai | Startex Hub',
  description: 'Start your company in Dubai with expert consultants. Startex Hub helps with business setup, licenses, and company formation for a smooth start',
  openGraph: {
    title: 'Business Setup Consultants in Dubai | Startex Hub',
    description: 'Start your company in Dubai with expert consultants. Startex Hub helps with business setup, licenses, and company formation for a smooth start',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Setup Consultants in Dubai | Startex Hub',
    description: 'Start your company in Dubai with expert consultants. Startex Hub helps with business setup, licenses, and company formation for a smooth start',
  },
};

export default function Home() {
  return <HomePage />;
}
