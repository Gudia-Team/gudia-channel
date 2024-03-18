"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/client';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

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

    return (
        <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
                <h3 className='font-semibold text-xl'>
                    Richten Sie Ihr Konto ein...
                </h3>
                <p>Sie werden automatisch weitergeleitet.</p>
            </div>
        </div>
    )
};

export default Page;
