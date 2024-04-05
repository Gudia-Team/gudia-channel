
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(405).end();
    }
    try {
        await getKindeServerSession(req);
        const movieCount = await prisma.movie.count();
        const randomindex = Math.floor(Math.random() * movieCount);
        const randomMovie = await prisma.movie.findMany({
            take: 1,
            skip: randomindex
        });
        return res.status(200).json(randomMovie[0]);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}