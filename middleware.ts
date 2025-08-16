import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Simple passthrough - let i18n config handle cookie reading
  return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    // Match all request paths except static files and APIs
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}