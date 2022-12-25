import { homeApi } from '@/api/dataFac';
import { MainLayout } from '@/components/common/layout';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IDoTrungProps {
}

const DoTrung = (props: IDoTrungProps) =>{
    const router = useRouter();
    const [str1,setStr1] = React.useState('')
    const [src,setSrc] = React.useState(true)
    const [value,setValue] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            //get params from url
            const d: any = router.query.d;
            const p: any = router.query.p;
            const n: any = router.query.n;

            const data = {
                "number": n,
                "date": d,
                "province": p
              }

            const res = await homeApi.getPrize(data);
            console.log(res.data.winPrize[0]);
            let result = res.data.winPrize[0]
            if (result){
                setSrc(true)
                setStr1(result.prizeDim.name)
                setValue(result.value)
            }else{
                setSrc(false)
            }

           
        })();
    }, [router.query.n, router.query.p, router.query.d]);
  return (
    <div>
        {src ?
      	<div className="col-md-6 col-md-offset-4 paddingtb10 div-trungso">
								<img className="img-responsive" src="images/do-so-trung.png" alt=""/>
								<div id="tbtrungso">
									<h4>Chúc mừng bạn!...</h4>
									<p>
										Vé số của bạn đã trúng {str1}<br/>
										Tổng giá trị giải thưởng là {value} đ
									</p>
								</div>
							</div>
                            :<div className="col-md-6 col-md-offset-4 paddingtb10">
                            <img className="img-responsive" src="images/do-so-trat.jpg" alt=""/>
                        </div>
                            }

    </div>
  );
}
DoTrung.Layout = MainLayout;

export default DoTrung;
