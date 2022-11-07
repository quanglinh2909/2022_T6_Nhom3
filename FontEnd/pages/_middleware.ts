import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str: string): string => {
    const stripped = str.replace('/vi-VN', '');
    return stripped;
};

export function middleware(request: NextRequest) {
    const shouldHandleLocale =
        !PUBLIC_FILE.test(request.nextUrl.pathname) &&
        !request.nextUrl.pathname.includes('/api/') &&
        request.nextUrl.locale === 'default';

    return shouldHandleLocale
        ? NextResponse.redirect(
              `/vi-VN${stripDefaultLocale(request.nextUrl.pathname)}${request.nextUrl.search}`
          )
        : undefined;
}
