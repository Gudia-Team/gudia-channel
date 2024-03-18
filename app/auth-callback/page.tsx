import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'
import { useEffect } from 'react'

const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    const query = trpc.authCallback.useQuery(undefined);

    useEffect(() => {
        if (query.isSuccess && query.data?.success) {
            //user is synced to the database
            router.push(origin ? `/${origin}` : "/dashboard")
        }
    }, [query.isSuccess, query.data, router, origin]);
}
    export default Page