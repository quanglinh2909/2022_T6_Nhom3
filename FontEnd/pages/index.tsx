import { homeApi } from '@/api/dataFac';
import { MainLayout } from '@/components/common';
import TableMB from '@/components/home/tabelMB';
import TableHome from '@/components/home/tableHome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../models';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        (async () => {
            const res = await homeApi.getDataHome();
            const temp:any ={}
            res.data.forEach((item:any) => {
                if (temp[item.areaDim.id ]) {
                    temp[item.areaDim.id ].push(item)
                } else {
                    temp[item.areaDim.id ] = [item]
                }
            });
           setData(temp)
        })();
    }, []);
    return (
        <>
            {Object.keys(data).map((key) => {    
                const item = data[key]
                if (item[0].areaDim.key !== 'MB') {
                    return <TableHome data={item} />
                } else {
                    return <TableMB data={item} />
                }
            })}
          
        </>
    );
};
Home.Layout = MainLayout;

export default Home;
