import * as React from 'react';
import Head from 'next/head';
import DefaultPrivew from '@/images/seo/homepage.png';

export interface SeoPageProps {
    title: string;
    description?: string;
    imagePreview?: string;
    ogTitle?: string;
}

export function SeoPage (props: SeoPageProps) {
    const description = props?.description || 'Đấu giá, mua bán vật phẩm, tài khoản game thông qua mô hình trung gian đảm bảo.'
    const image = props?.imagePreview || 'homepage.jpg';
    const url = 'https://daugiadigital.online/';
    const ogTitle = props?.ogTitle || props?.title;
  return (
    <Head>
        <title>{props.title || 'Pages'} - DauGiaDigital</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:url" content={url} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:title" content={ogTitle} />
      </Head>
  );
}
