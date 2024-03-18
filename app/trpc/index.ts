import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '../db';

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user?.email)
      throw new TRPCError({
        code: 'UNAUTHORIZED'
      })
    // chekk wenn die user im detabase ist
    const dbUser = await db.user
    return { success: true }
  }),
})
export type AppRouter = typeof appRouter;