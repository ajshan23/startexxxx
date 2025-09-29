'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import SmoothScrollWrapper from './SmoothScrollWrapper'

export default function LayoutShell ({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')
  const isLoginPage = pathname === '/login'
  const hideHeaderFooter = isAdminRoute || isLoginPage
  return (
    <SmoothScrollWrapper>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </SmoothScrollWrapper>
  )
}
