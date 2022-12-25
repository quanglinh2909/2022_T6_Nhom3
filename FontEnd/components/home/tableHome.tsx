import * as React from 'react';

export interface ITableHomeProps {
    data: any;
}

export default function TableHome ({data}: ITableHomeProps) {
    const [dataFace, setData] = React.useState<any>({});
    const [date, setDate] = React.useState<any>([]);
    const [dayOfWeek, setDayOfWeek] = React.useState<any>([]);
   
    React.useEffect(() => {
    if (data && data.length > 0) {
        const temp:any = {}
        data.forEach((item:any) => {
            if (temp[item.provinceDim.id ]) {
                temp[item.provinceDim.id ].push(item)
            }else{
                temp[item.provinceDim.id ] = [item]
            }
        });
        setData(temp)
        const srtDate = new Date(data[0].dateDim.date);
        
        //Thứ 2 , Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7, Chủ nhật
        let dayOfWeek = ''
        switch (srtDate.getDay()) {
            case 1:
                dayOfWeek = 'Thứ 2'
                break;
            case 2:
                dayOfWeek = 'Thứ 3'
                break;
            case 3:
                dayOfWeek = 'Thứ 4'
                break;
            case 4:
                dayOfWeek = 'Thứ 5'
                break;
            case 5:
                dayOfWeek = 'Thứ 6'
                break;
            case 6:
                dayOfWeek = 'Thứ 7'
                break;
            case 0:
                dayOfWeek = 'Chủ nhật'
                break;
            default:
                break;
        }
        const str = srtDate.getDate()+"/"+(srtDate.getMonth()+1)+"/"+srtDate.getFullYear()
        setDate(str)
        setDayOfWeek(dayOfWeek)
    }
   
    }, [data]);
    if (!data || data.length === 0) {
        return <></>
    }
  return (
    <div className="kqsx-first">

    <div className="box-kqxs">
    <div className="header-title">
        <h4>kết quả xổ số {data[0].areaDim.name} {date}</h4>
    </div>
    <div className="box-kqxs-content">
        {/* <!-- Start box-kqxs-content left--> */}
        <table  className="col-md-12 col-sm-12 col-xs-12 mm-result-left">
            <tbody>
                <tr>
                    <td className="arrange" valign="top">
                        <table    className="col-md-12 col-sm-12 col-xs-12 leftcl">
                            <tbody>
                                <tr>
                                    <td className="dayofweek">{dayOfWeek}</td>
                                </tr>
                                <tr>
                                    <td className="fullday">{date}</td>
                                </tr>
                                <tr>
                                    <td className="award-8">Giải 8</td>
                                </tr>
                                <tr>
                                    <td className="award-7">Giải 7</td>
                                </tr>
                                <tr>
                                    <td className="award-6">Giải 6</td>
                                </tr>
                                <tr>
                                    <td className="award-5">Giải 5</td>
                                </tr>
                                <tr>
                                    <td className="award-4">Giải 4</td>
                                </tr>
                                <tr>
                                    <td className="award-3">Giải 3</td>
                                </tr>
                                <tr>
                                    <td className="award-2">Giải 2</td>
                                </tr>
                                <tr>
                                    <td className="award-1">Giải 1</td>
                                </tr>
                                <tr>
                                    <td className="award-special">Giải ĐB</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td valign="top">
                        <table className="col-md-12 col-sm-12 col-xs-12"   >
                            <tbody>
                                <tr>
                                    {Object.keys(dataFace).map((key,index) => {
                                        const item = dataFace[key];
                                        const temp:any = {}
                                        item.forEach((item:any) => {
                                            if (temp[item.prizeDim.stt]){
                                                temp[item.prizeDim.stt].push(item)
                                            }else{
                                                temp[item.prizeDim.stt] = [item]
                                            }                                                
                                        })
                                        //getlength of temp
                                        const length = Object.keys(temp).length;
                                        //create arr length 15
                                        const arr = Array.from(Array(length).keys());
                                        Object.keys(temp).forEach((key:any) => {
                                            const item = temp[key];
                                            arr[key] = item;
                                        })
                                        //reverse arr
                                        const arrReverse = arr.reverse();
                                        return <td valign="top" className="col-md-4 col-sm-4 col-xs-4" key={index}>
                                        <table className="col-md-12 col-sm-12 col-xs-12 rightcl"  >
                                            <tbody>
                                                <tr>
                                                    <td className="province">{dataFace[key][0].provinceDim.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="province-code">{dataFace[key][0].provinceDim.id}</td>
                                                </tr>
                                                {
                                                arrReverse.map((item:any,i:number) => {
                                                    let classN = '';
                                                    switch (i) {
                                                        case 0:
                                                            classN = 'award-8';
                                                            break;
                                                        case 1:
                                                            classN = 'award-7';
                                                            break;
                                                        case 2:
                                                            classN = 'award-6';
                                                            break;
                                                        case 3:
                                                            classN = 'award-5';
                                                            break;
                                                        case 4:
                                                            classN = 'award-4';
                                                            break;
                                                        case 5:
                                                            classN = 'award-3';
                                                            break;
                                                        case 6:
                                                            classN = 'award-2';
                                                            break;
                                                        case 7:
                                                            classN = 'award-1';
                                                            break;
                                                        case 8:
                                                            classN = 'award-special';
                                                            break;
                                                        default:
                                                            break;
                                                    }
 
                                                    
                                                    return <tr>
                                                    <td className={classN}>
                                                        {item.map((item:any) => {
                                                            return <div>{item.result}</div>
                                                        }
                                                        )}
                                                    </td>
                                                </tr>
                                                   
                                                } )}
                                                
                                                {/* <tr>
                                                    <td className="award-8">20</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-7">831</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-6">
                                                        <div>6437</div><div>4879</div><div>8533</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="award-5">5270</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-4">
                                                        <div>98943</div><div>00687</div><div>05878</div><div>17225</div><div>69230</div><div>88570</div><div>48163</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="award-3">12841</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-2">
                                                        <div>68049</div><div>07312</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="award-1">25147</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-special">649070</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </td>

                                    })}
                                    
                                   
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        {/* <!-- End box-kqxs-content-left -->
        <!-- Start box-kqxs-content-right --> */}
        {/* <table    className="col-md-4 col-sm-4 col-xs-4 mm-result-right">
            <tbody>
                <tr>
                    <td className="arrange" valign="top">
                        <table    className="col-md-12 col-sm-12 col-xs-12 leftcl">
                            <tbody>
                                <tr>
                                    <td className="name">Đầu</td>
                                </tr>
                                <tr>
                                    <td className="award-0">0</td>
                                </tr>
                                <tr>
                                    <td className="award-1">1</td>
                                </tr>
                                <tr>
                                    <td className="award-2">2</td>
                                </tr>
                                <tr>
                                    <td className="award-3">3</td>
                                </tr>
                                <tr>
                                    <td className="award-4">4</td>
                                </tr>
                                <tr>
                                    <td className="award-5">5</td>
                                </tr>
                                <tr>
                                    <td className="award-6">6</td>
                                </tr>
                                <tr>
                                    <td className="award-7">7</td>
                                </tr>
                                <tr>
                                    <td className="award-8">8</td>
                                </tr>
                                <tr>
                                    <td className="award-9">9</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td valign="top">
                        <table className="col-md-12 col-sm-12 col-xs-12"   >
                            <tbody>
                                <tr>
                                    <td valign="top" className="col-md-6 col-sm-6 col-xs-6">
                                        <table className="col-md-12 col-sm-12 col-xs-12 rightcl"  >
                                            <tbody>
                                                <tr>
                                                    <td className="name">Bến Tre</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-0">1,2,5,4</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-1"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-2">1,5</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-3">3,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-4">4,8,6</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-5"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-6"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-7">7,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-8">8,9</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-9">1,5,6</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td valign="top" className="col-md-6 col-sm-6 col-xs-6">
                                        <table className="col-md-12 col-sm-12 col-xs-12 rightcl"  >
                                            <tbody>
                                                <tr>
                                                    <td className="name">Bạc Liêu</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-0">1,2,5,4</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-1"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-2">1,5</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-3">3,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-4">4,8,6</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-5"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-6"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-7">7,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-8">8,9</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-9">1,5,6</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style={{borderTop:'1px solid #010000;'}}>
                    <td className="arrange" valign="top" >
                        <table    className="col-md-12 col-sm-12 col-xs-12 leftcl">
                            <tbody>
                                <tr>
                                    <td className="name">Đầu</td>
                                </tr>
                                <tr>
                                    <td className="award-0">0</td>
                                </tr>
                                <tr>
                                    <td className="award-1">1</td>
                                </tr>
                                <tr>
                                    <td className="award-2">2</td>
                                </tr>
                                <tr>
                                    <td className="award-3">3</td>
                                </tr>
                                <tr>
                                    <td className="award-4">4</td>
                                </tr>
                                <tr>
                                    <td className="award-5">5</td>
                                </tr>
                                <tr>
                                    <td className="award-6">6</td>
                                </tr>
                                <tr>
                                    <td className="award-7">7</td>
                                </tr>
                                <tr>
                                    <td className="award-8">8</td>
                                </tr>
                                <tr>
                                    <td className="award-9">9</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td valign="top">
                        <table className="col-md-12 col-sm-12 col-xs-12"   >
                            <tbody>
                                <tr>
                                    <td valign="top" className="col-md-6 col-sm-6 col-xs-6">
                                        <table    className="col-md-12 col-sm-12 col-xs-12 rightcl">
                                            <tbody>
                                                <tr>
                                                    <td className="name">Vũng Tàu</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-0">1,2,5,4</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-1"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-2">1,5</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-3">3,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-4">4,8,6</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-5"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-6"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-7">7,8</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-8">8,9</td>
                                                </tr>
                                                <tr>
                                                    <td className="award-9">1,5,6</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td valign="top" className="col-md-6 col-sm-6 col-xs-6">
                                        <table    className="col-md-12 col-sm-12 col-xs-12 rightcl">
                                            <tbody>
                                                <tr>
                                                    <td className="name"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-0"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-1"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-2"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-3"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-4"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-5"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-6"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-7"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-8"></td>
                                                </tr>
                                                <tr>
                                                    <td className="award-9"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table> */}
        {/* <!-- End box-kqxs-content-right --> */}
        <div className="clearfix"></div>
    </div>
</div>
{/* <!-- End-box-kqxs --> */}
							<div className="clearfix">
								<div className="pagination" style={{float:'right'}}>
								    <ul>
								    	
								    </ul>	
								</div>
								<div className="social-button">
								    <ul>
								    	<li>
								    		<div>
									    		{/* <!--FB LIKE--> */}
												<div className="fb-like" data-send="false" data-layout="button_count" data-width="150" data-show-faces="true"></div>					
									    	</div>
								    	</li>
								    	<li>
								   			<div>
												{/* <!-- G+--> */}
												{/* <g:plusone size="medium" width="250px"></g:plusone>	 */}
									    	</div>
								    	</li>
								    	
								    </ul>
								    
								</div>
							</div>
</div>

  );
}
