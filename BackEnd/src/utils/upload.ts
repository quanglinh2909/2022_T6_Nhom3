/* eslint-disable prettier/prettier */
import * as fs from 'fs';
export const getDirPath = (dirPath: any) => {
    try {
        if (!fs.existsSync(dirPath)) fs.promises.mkdir(dirPath, { recursive: true });
        return dirPath;
    } catch (error) {
        console.log(error.message);
    }
};

export const getDirPathUpload = () => {
    const dirPath = 'uploads/' + getDatePath();
    try {
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
        return dirPath;
    } catch (error) {
        console.log(error.message);
    }
};
export const getDirPathUploadPost = () => {
    const dirPath = 'uploads-posts/' + getDatePath();
    try {
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
        return dirPath;
    } catch (error) {
        console.log(error.message);
    }
};
export const getDirPathSearch = () => {
    const dirPath = 'searches/';
    try {
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
        return dirPath;
    } catch (error) {
        console.log(error.message);
    }
};

export const getDatePath = () => {
    const toDate = new Date();
    return toDate.getFullYear() + '' + (toDate.getMonth() + 1) + '' + toDate.getDate();
};
