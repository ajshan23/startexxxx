import Image from "next/image";
import HomePage from "./home/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>Business Setup Consultants in Dubai | Startex Hub</title>
        <meta
          name="description"
          content="Start your company in Dubai with expert consultants. Startex Hub helps with business setup, licenses, and company formation for a smooth start"
        />
      </Head>
    <HomePage />
    </>
  );
}
