import { MainLayout } from '@/components/common';
import * as React from 'react';

export interface ITHongKeProps {
}

const THongKe = (props: ITHongKeProps)=> {
  return (
    <>
    {/* <!-- Start kqsx-first --> */}
    <div className="kqsx-first">
        {/* <!-- Start-box-kqxs --> */}
        <div className="box-kqxs">
            <div className="header-title">
                <h4>thống kê lô xiên</h4>
            </div>
            <div className="box-kqxs-content mm-result">
                {/* <!-- Start box-kqxs-content left--> */}
                <div className="col-md-6 col-sm-6 col-xs-12 col-xs-12-pad">
                    <form action="" method="POST" role="form" className="form-horizontal">
                        <div className="form-inline text-center">
                            <div className="form-group">
                                <select name="" id="input" className="form-control" required={true}>
                                    <option value="2">Thứ 2</option>
                                    <option value="3">Thứ 3</option>
                                    <option value="4">Thứ 4</option>
                                    <option value="5">Thứ 5</option>
                                    <option value="6">Thứ 6</option>
                                    <option value="7">Thứ 7</option>
                                    <option value="8">Chủ Nhật</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name="" id="input" className="form-control" required={true}>
                                    <option value="2">Bạc Liêu</option>
                                    <option value="3">Bến Tre</option>
                                    <option value="4">Vung Tàu</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name="" id="input" className="form-control" required={true}>
                                    <option value="2">Biên Độ</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- End box-kqxs-content-left -->
                <!-- Start box-kqxs-content-right --> */}
                <div className="col-md-6 col-sm-6 col-xs-12 col-xs-12-pad">
                    <form action="" method="POST" role="form" className="form-horizontal">
                        <div className="form-inline text-center">
                            <div className="form-group">
                                <input type="radio" name="sex" value="xien" checked/>Xiên 2
                                <input type="radio" name="sex" value="xien"/>Xiên 3
                                <input type="radio" name="sex" value="xien"/>Xiên 4
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-sm btn-default">Kết quả</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- End box-kqxs-content-right --> */}
                <div className="clearfix"></div>
            </div>
        </div>
        {/* <!-- End-box-kqxs -->				 */}
    </div>
    {/* <!-- End kqsx-first --> */}
    <div className="tklx-second">
        <div className="box-tklx">
            <div className="header-title black-bg">
                <h4>thống kê lô xiên 2 của đài bến tre hay về trong 10 ngày</h4>
            </div>
            <div className="box-tklx">
                <div className="col-md-6 col-sm-6" style={{border:'1px solid #6D716E'}}>
                    <p style={{fontWeight:'bold', fontSize:'17px'}}>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                    </p>
                </div>
                <div className="col-md-6 col-sm-6" style={{border:'1px solid #6D716E'}}>
                    <p style={{fontWeight:'bold', fontSize:'17px'}}>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                        Cặp số <span className="color-red">26-81</span> - Có 5 ngày<br/>
                        (27/08/2015, 20/08/2015, 13/08/2015, 02/07/2015, 28/05/2015)<br/>
                    </p>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>	
</>
  );
}
THongKe.Layout = MainLayout;

export default THongKe;