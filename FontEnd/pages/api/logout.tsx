import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

type Data = {
    message: string
}

export const config = {
    api: {
      bodyParser: false,
    },
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'Not Support!' });
    }

    const cookies = new Cookies(req, res);
    cookies.set('token');
    res.status(200).json({message: 'Logout successful!'})
}
