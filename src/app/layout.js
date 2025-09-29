// import SmoothScrollWrapper from './components/SmoothScrollWrapper';
// import './globals.css';
// import { Poppins } from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // ✅ All weights
//   variable: '--font-poppins',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'Startex Hub | Businessman Services',
//   description: 'Startex Hub offers expert business consultancy and entrepreneur support services tailored to help startups',
// };




// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="antialiased">
//              <SmoothScrollWrapper>
//         {children}
//         </SmoothScrollWrapper>
//       </body>
//     </html>
//   );
// }


// layout.js (server component — no dynamic import)




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
  description:
    'Startex Hub offers expert business consultancy and entrepreneur support services tailored to help startups',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      {/* Google Tag Manager script (head) */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M98FD5QH');`}
      </Script>

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