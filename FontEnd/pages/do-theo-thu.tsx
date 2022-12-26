import { homeApi } from '@/api/dataFac';
import { MainLayout } from '@/components/common';
import TableMB from '@/components/home/tabelMB';
import TableHome from '@/components/home/tableHome';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IDoTheoThuProps {}

const DoTheoThu = (props: IDoTheoThuProps) => {
    const router = useRouter();
    const [data, setData] = React.useState<any>([]);
    const [area, setArea] = React.useState<any>('');
    const [areaArray, setAreaArray] = React.useState<any>([]);
    const redirectPage = (t: number, id: any, key: any) => {
        router.push(`/do-theo-thu?t=${t}&id=${id}&key=${key}`);
    };
    
    React.useEffect(() => {
        (async () => {
            //get params from url
            const dateOfweekParam: any = router.query.t;
            const id = router.query.id;
            setArea(router.query.key);

            const resarea = await homeApi.getArea();
            setAreaArray(resarea.data);
            //get date now
            const date = new Date();
            const dateOfweek: any = date.getDay();
            let dateGetAPI = '';
            if (dateOfweekParam - 1 != dateOfweek) {
                //tru 7 ngay
                date.setDate(date.getDate() - 7);
                date.setDate(date.getDate() + (dateOfweekParam - 2));
                dateGetAPI =
                    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            } else {
                dateGetAPI =
                    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            }
            if (!id) {
              const temp = [];
              for (let i = 0; i < resarea.data.length; i++) {
                const item = resarea.data[i];
                const res = await homeApi.getDoTheoThu(dateGetAPI, item.id);
                temp.push(res.data);
              }

                setData(temp);
            }else{
              const res = await homeApi.getDoTheoThu(dateGetAPI, id);
              const temp: any = [];
              temp.push(res.data);
              setData(temp);
            }

           
            //  console.log(res.data);
        })();
    }, [router.query.t, router.query.id, router.query.key]);
    const clickArea = (item: any) => {
        router.push(`/do-theo-thu?t=${router.query.t}&id=${item.id}&key=${item.key}`);

      
    };
    const redirectPages = (t: any) => {
        if (router.query.id && router.query.key) {
        router.push(`/do-theo-thu?t=${t}&id=${router.query.id}&key=${router.query.key}`);
        } else {
        router.push(`/do-theo-thu?t=${t}`);
        }
    };
    const day = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];

    return (
        <>
            <div className="header-title black-bg">
                <ul className="dotheothu">
                    {day.map((item, index:any) => {
                        return (
                            <li key={index} >
                                <a
                                className={index+2 == router.query.t ? 'active' : ''}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => redirectPages(index + 2)}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="col-md-8 col-md-offset-2">
                <form action="#" method="post" className="form-inline">
                    {areaArray.map((item: any) => {
                        return (
                            <div className="form-group col-sm-3" key={item.id}>
                                <div className="radio">
                                    <label>
                                        {area == item.key ? (
                                            <input
                                                type="radio"
                                                name="chonmien"
                                                id="input"
                                                value=""
                                                checked
                                                onClick={() => clickArea(item)}
                                            />
                                        ) : (
                                            <input
                                                type="radio"
                                                name="chonmien"
                                                id="input"
                                                value=""
                                                onClick={() => clickArea(item)}
                                            />
                                        )}
                                        {item.name}
                                    </label>
                                </div>
                            </div>
                        );
                    })}

                    <div className="form-group col-sm-3">
                        <div className="radio">
                            <label>
                                {!router.query.id ? ( 
                                <input type="radio" checked name="chonmien" id="input" value="" onChange={()=>{
                                    router.push(`/do-theo-thu?t=${router.query.t}`);
                                    

                                }} />
                                ) : (
                                    <input type="radio" name="chonmien" id="input" value="" onChange={()=>{
                                        router.push(`/do-theo-thu?t=${router.query.t}`);
                                    }} />
                                )}
                                Tất cả
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="clearfix"></div>

            {data.map((item: any, index: any) => {
                return (
                    (item && item[0]?.areaDim?.key !== 'MB') ? <TableHome data={item} /> : <TableMB data={item} />
                );
            })
            }
        </>
    );
};
DoTheoThu.Layout = MainLayout;

export default DoTheoThu;
