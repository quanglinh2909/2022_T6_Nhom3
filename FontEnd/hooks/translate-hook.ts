import { languageDirectory } from '@/translate/languages';
import { useRouter } from 'next/router';

export const useTranslation = () => {
    const { locales = [], defaultLocale, ...nextRouter } = useRouter();
    const locale = locales.includes(nextRouter.locale || '') ? nextRouter.locale : defaultLocale;
    const localeDetect = locale == undefined ? 'vi' : locale;
    return {
        translate: (term: string) => {
            const translation = languageDirectory[localeDetect][term];
            return Boolean(translation) ? translation : term;
        },
    };
};
