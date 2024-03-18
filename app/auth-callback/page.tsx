import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    const query = trpc.authCallback.useQuery(undefined, {
        retry: true,
        retryDelay: 500,
    });

    useEffect(() => {
        if (query.isSuccess && query.data?.success) {
            // Benutzer ist in der Datenbank synchronisiert
            router.push(origin ? `/${origin}` : '/dashboard');
        }
        if ((onerror as { data?: { code: string } })?.data?.code === 'UNAUTHORIZED') {
            router.push('/login');
        }
    }, [origin, query.data?.success, query.isSuccess, router]);

    return null; // oder JSX für Platzhalter- oder Ladezustand
};

export default Page;
