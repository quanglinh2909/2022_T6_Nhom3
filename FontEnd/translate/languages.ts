type languageOptions = {
    [locate: string]: {
        [term: string]: string;
    };
};

export const languageDirectory: languageOptions = {
    vi: {
        male: 'Nam',
        female: 'Nữ',
    },
    en: {
        male: 'Male',
        female: 'Female',
    },
};
