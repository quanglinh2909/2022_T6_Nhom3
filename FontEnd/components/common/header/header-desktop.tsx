import { homeApi } from '@/api/dataFac';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
    const router = useRouter();
    const [area, setArea] = React.useState<any>([]);
    const [provinceArray, setProvinceArray] = React.useState<any>([]);

    const [dayOfWeek, setDayOfWeek] = React.useState<any>(2);
    const redirectPage = (t: number,id:any,key:any) => {
        router.push(`/do-theo-thu?t=${t}&id=${id}&key=${key}`);
    }
    useEffect(() => {
        (async () => {
            const res = await homeApi.getArea();
            setArea(res.data);
        })();
        const date = new Date();
        const dateOfweek: any = date.getDay()+2;
        setDayOfWeek(dateOfweek);

    }, []);
    const changeDateDo = async (data:any)=>{
        const date :any = document.querySelector('#inputDate')
        const arr = date.value.split("/")
        let t = ''
        if (arr.length == 3){
            t = arr[2]+"/"+arr[1]+"/"+arr[0]

        }
        const res = await homeApi.getProvinceDove(t);
        setProvinceArray(res.data)
        
    }
    const clickButton = ()=>{
        const date :any = document.querySelector('#inputDate')
        const idProvince :any = document.querySelector('#input')
        const number :any = document.querySelector('#inputNumber')


        const arr = date.value.split("/")
        let t = ''
        if (arr.length == 3){
            t = arr[2]+"/"+arr[1]+"/"+arr[0]
        }

        if (t && idProvince.value && number.value && number.value.length > 0 && idProvince.value.length > 0 && t.length > 0){
            router.push(`do-so?d=${t}&p=${idProvince.value}&n=${number.value}`)
        }

    }
    return (
        <div id="header">
            
            <div id="header-top">
                <div className="container">
                    <div className="row">
                        <div id="header-logo" className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <h1 id="logo">
                                <span  onClick={()=>{router.push('/')}} style={{cursor:'pointer'}}>
                                <img src="images/xxquanglinh.png" alt="X??? S???" />
                                </span>
                               
                            </h1>
                        </div>
                        <div
                            id="header-top-right"
                            className="col-lg-5 col-md-6 col-sm-8 col-xs-12 pull-right"
                        >
                            <div id="wg-kqxs" className="widget-mini">
                                <h5 className="widget-mini-header">KQXS m???i nh???t</h5>
                                <div className="widget-content">
                                    <ul>
                                    {area.map((item: any, index: number) => {
                                                        return  <li key={index}>
                                                        <a style={{cursor:'pointer'}} onClick={()=> redirectPage(dayOfWeek,item.id,item.key)} title="Mi???n Nam">
                                                           {item.name}
                                                        </a>
                                                    </li>
                                    })}

                                        
                                    </ul>
                                </div>
                            </div>

                            <div id="wg-dvs" className="widget-mini">
                                <h5 className="widget-mini-header">D?? v?? s???</h5>
                                <div className="widget-content">
                                    <form
                                        action=""
                                        method="POST"
                                        className="form-horizontal"
                                        role="form"
                                    >
                                        <div className="form-group">
                                            <div className="col-sm-6 mgb10">
                                                <input
                                                    type="text"
                                                    name="date"
                                                    id="inputDate"
                                                    className="form-control"
                                                    required={true}
                                                    placeholder="Ch???n ng??y"
                                                   
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <select
                                                    name=""
                                                    id="input"
                                                    className="form-control"
                                                    required={true}
                                                    onClick={(e)=> changeDateDo(e)}
                                                >
                                                    <option value="0">Ch???n T???nh</option>
                                                    {provinceArray.map((item:any,index:number)=>{
                                                        return <option value={item.id} key={index}>{item.name}</option>

                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-8 mgb10">
                                                <input
                                                    type="text"
                                                    name="nhapso"
                                                    id="inputNumber"
                                                    className="form-control"
                                                    required={true}
                                                    placeholder="Nh???p s??? c???a b???n"
                                                />
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-default" onClick={()=> clickButton()}>
                                                    K???t qu???
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p>(C?? th??? nh???p t???i thi???u 2 s???, t???i ??a 6 s???)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="header-bot">
                <div className="container">
                    <div className="row">
                        <div className="container_in">
                            <div id="main-menu">
                                <div id="dmenu" className="hidden-xs hidden-sm">
                                    <ul className="mainnav">
                                        <li id="home" className="level0 item">
                                            <a  onClick={()=>{router.push('/')}}>Trang ch???</a>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">K???t qu??? x??? s???</a>
                                            <div className="wrap_submenu">
                                                <ul className="level0">
                                                    {area.map((item: any, index: number) => {
                                                        return  <li className="level1 has-child" key={index}> 
                                                        <a href="#">{item.name}</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(2,item.id,item.key)}>Th??? 2</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(3,item.id,item.key)}>Th??? 3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(4,item.id,item.key)}>Th??? 4</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(5,item.id,item.key)}>Th??? 5</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(6,item.id,item.key)}>Th??? 6</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(7,item.id,item.key)}>Th??? 7</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(8,item.id,item.key)}>Ch??? Nh???t</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    }
                                                    )}
                                                   
                                                   
                                                    <li className="level1 has-child li-special">
                                                        <a href="#">Theo T???nh</a>
                                                        <div className="wrap_submenu wrap-bigsubmenu">
                                                            <h5 className="big-submenu-title clearfix">
                                                                Mi???n B???c
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">H???i Ph??ng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">H?? N???i</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B???c Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Th??i B??nh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Qu???ng Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Nam ?????nh</a>
                                                                </li>
                                                            </ul>
                                                            <h5 className="big-submenu-title clearfix">
                                                                Mi???n Trung
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B??nh ?????nh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Hu???</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Qu???ng B??nh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">???? N???ng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Kh??nh H??a</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Qu???ng Nam</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">?????k L???k</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Kon Tum</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Qu???ng Ng??i</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">?????K N??ng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Ninh Thu???n</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Qu???ng Tr???</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Gia Lai</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Ph?? Y??n</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">&nbsp;</a>
                                                                </li>
                                                            </ul>
                                                            <h5 className="big-submenu-title clearfix">
                                                                Mi???n Nam
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">An Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">C???n Th??</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">S??c Tr??ng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B???c Li??u</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">???? L???t</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">T??y Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B???n Tre</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">?????ng Nai</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Ti???n Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B??nh D????ng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">?????ng Th??p</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">TP.HCM</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B??nh Ph?????c</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">H???u Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Tr?? Vinh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">B??nh Thu???n</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Ki??n Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">V??nh Long</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">C?? Mau</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Long An</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">V??ng T??u</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="level0 item">
                                        <a style={{cursor:'pointer'}} onClick={()=> router.push('/thong-ke')}>Th???ng k??</a>
                                        </li> */}
                                     
                                    </ul>
                                </div>
                                <div id="mmenu" className="menu-offcanvas hidden-md hidden-lg">
                                    <span className="btn2 btn-navbar offcanvas">
                                        <span className="overlay"></span>
                                    </span>
                                    <div id="menu_offcanvas" className="offcanvas"></div>
                                </div>
                            </div>
                            <div id="user-wrap">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
