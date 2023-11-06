import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log("Request received:", request.url);
    const response = NextResponse.next()
    return response;
}