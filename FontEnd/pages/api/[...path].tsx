// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

// type Data = {
//   name: string
// }

export const config = {
    api: {
      bodyParser: false,
    },
  }

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    return new Promise((resolve) => {

        //conver cookies to authori
        const cookies = new Cookies(req, res);
        const token = cookies.get('token');
        if(token){
            req.headers.Authorization = `Bearer ${token}`;
        }

        //dont send cookie
        req.headers.cookie = '';

        proxy.web(req, res, {
            target: process.env.API_PATH,
            changeOrigin: true,
            selfHandleResponse: false
        })

        proxy.once('proxyRes', ()=> {
            resolve(true)
        })
    })
}
