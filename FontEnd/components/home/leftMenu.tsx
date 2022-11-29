import * as React from 'react';

export interface ILeftMenuProps {}

export default function LeftMenu(props: ILeftMenuProps) {
    return (
        <div id="col-right" className="col-xs-12 col-md-3">
            {/* <!-- Start down-app --> */}
            <div className="down-app">
                <div className="header-title">
                    <h4>ứng dụng dò kqsx</h4>
                </div>
                <div className="app-content">
                    <div className="pull-left">
                        <a href="">
                            <img
                                className="pull-left"
                                src="images/apple.png"
                                height="35"
                                width="35"
                                alt="iOS"
                            />
                            <span className="pull-right">
                                Tải Về <br />
                                iOS
                            </span>
                        </a>
                    </div>
                    <div className="pull-left">
                        <a href="">
                            <img
                                className="pull-left"
                                src="images/android.png"
                                height="30"
                                width="30"
                                alt="android"
                            />
                            <span className="pull-right">
                                Tải về <br />
                                Android
                            </span>
                        </a>
                    </div>
                    <div className="pull-left">
                        <a href="">
                            <img
                                className="pull-left"
                                src="images/winphone.png"
                                height="30"
                                width="30"
                                alt="windowphone"
                            />
                            <span className="pull-right">
                                Tải Về <br />
                                Winphone
                            </span>
                        </a>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            {/* <!-- End down-app -->
						<!-- Start statistics--> */}
            <div className="statistics">
                <div className="header-title-aside">
                    <h4>thống kê</h4>
                </div>
                <div className="statis-content">
                    <ul>
                        <li>
                            <p>Thống kê cầu:</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">Cầu xổ số các tỉnh</a>
                                </li>
                                <li>
                                    <a href="">Thống kê bạch thủ (MB)</a>
                                </li>
                                <li>
                                    <a href="">Thống kê lật liên tục (MB)</a>
                                </li>
                                <li>
                                    <a href="">Thống kê về cả cặp (MB)</a>
                                </li>
                                <li>
                                    <a href="">Thống kê nhiều nháy (MB)</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Thống kê lô:</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">Thống kê lần xuất hiện</a>
                                </li>
                                <li>
                                    <a href="">Thống kê 00 - 99</a>
                                </li>
                                <li>
                                    <a href="">Thống kê gan cực đại</a>
                                </li>
                                <li>
                                    <a href="">Thống kê lô xiên</a>
                                </li>
                                <li>
                                    <a href="">Thống kê chu kỳ</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Thống kê đầu - đuôi:</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">Thống kê 2 số đầu</a>
                                </li>
                                <li>
                                    <a href="">Thống kê 2 số cuối giải ĐB</a>
                                </li>
                                <li>
                                    <a href="">Thống kê 3 số cuối giải ĐB</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- End statistics -->
						<!-- Start direct--> */}
            <div className="direct">
                <div className="header-title-aside">
                    <h4>trực tiếp KQXS</h4>
                </div>
                <div className="direct-content">
                    <ul>
                        <li>
                            <p>Miền Nam - 16h20</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">
                                        <span className="loading"></span>Long An
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="loading"></span>Bến Tre
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="loading"></span>Hồ Chí Minh
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Miền Trung - 17h15</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">
                                        <span className="new"></span>Đà Lạt
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="new"></span>Nha Trang
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Miền Bắc - 18h15</p>
                            <ul className="sub-menu-side">
                                <li>
                                    <a href="">
                                        <span className="waiting"></span>Quảng Ninh
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className="icon-status">
                                <img
                                    src="images/loading.png"
                                    height="15"
                                    width="20"
                                    alt="loading"
                                />
                                Đang xổ&nbsp;&nbsp;
                                <img src="images/new.png" height="15" width="20" alt="new" />
                                Mới&nbsp;&nbsp;
                                <img
                                    src="images/waiting.png"
                                    height="15"
                                    width="20"
                                    alt="waiting"
                                />
                                Chờ
                            </p>
                        </li>
                    </ul>
                    <div className="embed-link">
                        <a href="">
                            <img src="images/banner.jpg" height="40" width="40" alt="" />
                            Chèn KQXS vào Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
