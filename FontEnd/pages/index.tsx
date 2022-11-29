import { MainLayout } from '@/components/common';
import TableHome from '@/components/home/tableHome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { NextPageWithLayout } from '../models';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
    //hello
    //demo
    return (
        <>
            <TableHome />
            <TableHome />
        </>
    );
};
Home.Layout = MainLayout;

export default Home;
