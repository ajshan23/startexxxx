import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { verifyToken } from './utils'


const PASS_WORD = "password"

export async function middleware(request) {
  const { pathname } = request.nextUrl
  console.log("hello")

  const token = request.cookies.get('token')?.value // ✅ Safe access

  const isPublicPath = pathname === '/login' || pathname.startsWith('/api/login')

  const verify = token ? await verifyToken(token) : null // ✅ Only verify if token exists

  if ((!token || !verify || verify.password !== PASS_WORD) && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // '/((?!_next/|static/|favicon.ico).*)',
    '/admin/:path*',
    '/api/delete-blog',
    
  ],
}

