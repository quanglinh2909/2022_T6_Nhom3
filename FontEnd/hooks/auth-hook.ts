import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

const HOURSE_TO_MILISECOND = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
    const {
        data: profile,
        error,
        mutate,
    } = useSWR('/profile', {
        dedupingInterval: HOURSE_TO_MILISECOND,
        revalidateOnFocus: false,
        ...options,
    });

    const firstLoading = profile === undefined && error === undefined;

    return {
        profile,
        error,
        firstLoading,
    };
}
