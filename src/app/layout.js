

import './globals.css'
import { Poppins } from 'next/font/google'
import LayoutShell from './components/LayoutShell'
import { ToastContainer } from 'react-toastify'
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Startex Hub | Businessman Services',
  description: 'Startex Hub offers expert business consultancy and entrepreneur support services tailored to help startups',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#070707',
  metadataBase: new URL('https://startexhub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Startex Hub | Businessman Services',
    description: 'Startex Hub offers expert business consultancy and entrepreneur support services tailored to help startups',
    type: 'website',
    siteName: 'Startex Hub',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload Critical Assets */}
        <link rel="preload" href="/assets/images/home/main-logo.webp" as="image" type="image/webp" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Startex Hub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Google Tag Manager script (head) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M98FD5QH');`}
        </Script>
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M98FD5QH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <LayoutShell>{children}</LayoutShell>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  )
}