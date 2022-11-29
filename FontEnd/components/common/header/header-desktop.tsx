import React from 'react';

export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
    return (
        <div id="header">
            <div id="header-top">
                <div className="container">
                    <div className="row">
                        <div id="header-logo" className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <h1 id="logo">
                                <a href="#">
                                    <img src="images/xxquanglinh.png" alt="Xổ Số Đại Phát" />
                                </a>
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
                                        <li>
                                            <a href="#" title="Miền Nam">
                                                Miền Nam
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Miền Trung">
                                                Miền Trung
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="Miền Bắc">
                                                Miền Bắc
                                            </a>
                                        </li>
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
                                                    value=""
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
                                                >
                                                    <option value="0">Chọn Tỉnh</option>
                                                    <option value="1">Lâm Đồng</option>
                                                    <option value="2">Tây Ninh</option>
                                                    <option value="3">Tiền Giang</option>
                                                    <option value="4">Kiên Giang</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-8 mgb10">
                                                <input
                                                    type="text"
                                                    name="nhapso"
                                                    id="inputDate"
                                                    className="form-control"
                                                    value=""
                                                    required={true}
                                                    placeholder="Nhập số của bạn"
                                                />
                                            </div>
                                            <div className="col-sm-4">
                                                <button type="button" className="btn btn-default">
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
                                            <a href="#">Trang chủ</a>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">Kết quả xổ số</a>
                                            <div className="wrap_submenu">
                                                <ul className="level0">
                                                    <li className="level1 has-child">
                                                        <a href="#">Miền Nam</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a href="#">Thứ 2</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 4</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 5</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 6</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 7</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Chủ Nhật</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="level1 has-child">
                                                        <a href="#">Miền Trung</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a href="#">Thứ 2</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 4</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 5</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 6</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 7</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Chủ Nhật</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="level1 has-child">
                                                        <a href="#">Miền Bắc</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a href="#">Thứ 2</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 4</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 5</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 6</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thứ 7</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Chủ Nhật</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
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
                                                    <li className="level1 has-child">
                                                        <a href="#">Điện Toán</a>
                                                        <div className="wrap_submenu">
                                                            <ul className="level1">
                                                                <li className="level2">
                                                                    <a href="#">1*2*3</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">6x36</a>
                                                                </li>
                                                                <li className="level2">
                                                                    <a href="#">Thần Tài 4</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">Thống kê</a>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">In giấy dò</a>
                                        </li>
                                        <li className="level0 item">
                                            <a href="#">Tin tức</a>
                                        </li>
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
                                <ul className="mainnav fontsmall">
                                    <li className="level0 item">
                                        <a href="#">Đăng Nhập</a>
                                    </li>
                                    <li className="level0 item">
                                        <a href="#">Đăng Ký</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
