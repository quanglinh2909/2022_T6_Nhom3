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
                                <img src="images/xxquanglinh.png" alt="Xổ Số" />
                                </span>
                               
                            </h1>
                        </div>
                        <div
                            id="header-top-right"
                            className="col-lg-5 col-md-6 col-sm-8 col-xs-12 pull-right"
                        >
                            <div id="wg-kqxs" className="widget-mini">
                                <h5 className="widget-mini-header">KQXS mới nhất</h5>
                                <div className="widget-content">
                                    <ul>
                                    {area.map((item: any, index: number) => {
                                                        return  <li key={index}>
                                                        <a style={{cursor:'pointer'}} onClick={()=> redirectPage(dayOfWeek,item.id,item.key)} title="Miền Nam">
                                                           {item.name}
                                                        </a>
                                                    </li>
                                    })}

                                        
                                    </ul>
                                </div>
                            </div>

                            <div id="wg-dvs" className="widget-mini">
                                <h5 className="widget-mini-header">Dò vé số</h5>
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
                                                    placeholder="Chọn ngày"
                                                   
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
                                                    <option value="0">Chọn Tỉnh</option>
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
                                                    placeholder="Nhập số của bạn"
                                                />
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-default" onClick={()=> clickButton()}>
                                                    Kết quả
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p>(Có thể nhập tối thiểu 2 số, tối đa 6 số)</p>
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
                                            <a  onClick={()=>{router.push('/')}}>Trang chủ</a>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">Kết quả xổ số</a>
                                            <div className="wrap_submenu">
                                                <ul className="level0">
                                                    {area.map((item: any, index: number) => {
                                                        return  <li className="level1 has-child" key={index}> 
                                                        <a href="#">{item.name}</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(2,item.id,item.key)}>Thứ 2</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(3,item.id,item.key)}>Thứ 3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(4,item.id,item.key)}>Thứ 4</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(5,item.id,item.key)}>Thứ 5</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(6,item.id,item.key)}>Thứ 6</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(7,item.id,item.key)}>Thứ 7</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a style={{cursor:'pointer'}} onClick={()=> redirectPage(8,item.id,item.key)}>Chủ Nhật</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    }
                                                    )}
                                                   
                                                   
                                                    <li className="level1 has-child li-special">
                                                        <a href="#">Theo Tỉnh</a>
                                                        <div className="wrap_submenu wrap-bigsubmenu">
                                                            <h5 className="big-submenu-title clearfix">
                                                                Miền Bắc
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Hải Phòng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Hà Nội</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bắc Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Thái Bình</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Quảng Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Nam Định</a>
                                                                </li>
                                                            </ul>
                                                            <h5 className="big-submenu-title clearfix">
                                                                Miền Trung
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bình Định</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Huế</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Quảng Bình</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Đà Nẵng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Khánh Hòa</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Quảng Nam</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Đắk Lắk</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Kon Tum</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Quảng Ngãi</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">ĐắK Nông</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Ninh Thuận</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Quảng Trị</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Gia Lai</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Phú Yên</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">&nbsp;</a>
                                                                </li>
                                                            </ul>
                                                            <h5 className="big-submenu-title clearfix">
                                                                Miền Nam
                                                            </h5>
                                                            <ul className="clearfix">
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">An Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Cần Thơ</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Sóc Trăng</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bạc Liêu</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Đà Lạt</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Tây Ninh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bến Tre</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Đồng Nai</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Tiền Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bình Dương</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Đồng Tháp</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">TP.HCM</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bình Phước</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Hậu Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Trà Vinh</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Bình Thuận</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Kiên Giang</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Vĩnh Long</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Cà Mau</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Long An</a>
                                                                </li>
                                                                <li className="big-submenu-item col-md-4">
                                                                    <a href="#">Vũng Tàu</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="level0 item">
                                        <a style={{cursor:'pointer'}} onClick={()=> router.push('/thong-ke')}>Thống kê</a>
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
