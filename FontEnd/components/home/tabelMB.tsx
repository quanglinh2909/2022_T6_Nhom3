import * as React from 'react';

export interface ITableMBProps {
    data: any;
}

export default function TableMB({ data }: ITableMBProps) {
    const [dataFace, setData] = React.useState<any>({});
    const [date, setDate] = React.useState<any>('');
    const [dayOfWeek, setDayOfWeek] = React.useState<any>([]);
    React.useEffect(() => {
        if (data && data.length > 0) {
        const temp: any = {};
        data.forEach((item: any) => {
            if (temp[item.provinceDim.id]) {
                temp[item.provinceDim.id].push(item);
            } else {
                temp[item.provinceDim.id] = [item];
            }
        });
        setData(temp);
        const srtDate = new Date(data[0].dateDim.date);

        //Thứ 2 , Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7, Chủ nhật
        let dayOfWeek = '';
        switch (srtDate.getDay()) {
            case 1:
                dayOfWeek = 'Thứ 2';
                break;
            case 2:
                dayOfWeek = 'Thứ 3';
                break;
            case 3:
                dayOfWeek = 'Thứ 4';
                break;
            case 4:
                dayOfWeek = 'Thứ 5';
                break;
            case 5:
                dayOfWeek = 'Thứ 6';
                break;
            case 6:
                dayOfWeek = 'Thứ 7';
                break;
            case 0:
                dayOfWeek = 'Chủ nhật';
                break;
            default:
                break;
        }
        const str =
            srtDate.getDate() + '/' + (srtDate.getMonth() + 1) + '/' + srtDate.getFullYear();
        setDate(str);
        setDayOfWeek(dayOfWeek);
    }
    }, [data]);
    if (!data || data.length === 0) {
        return <></>
    } 
    return (
        <div className="kqsx-second">
            <div className="box-kqxs">
                <div className="header-title">
                    <h4>
                        kết quả xổ số {data[0].areaDim.name} {date}
                    </h4>
                </div>
                <div className="box-kqxs-content">
                    <table className="col-md-12 col-sm-12 col-xs-12 mm-result-left">
                        <tbody>
                            <tr>
                                <td className="arrange" valign="top">
                                    <table className="col-md-12 col-sm-12 col-xs-12 leftcl">
                                        <tbody>
                                            <tr>
                                                <td className="dayofweek">{dayOfWeek}</td>
                                            </tr>
                                            <tr>
                                                <td className="award-special-second">Giải ĐB</td>
                                            </tr>
                                            <tr>
                                                <td className="award-1-second">Giải 1</td>
                                            </tr>
                                            <tr>
                                                <td className="award-2-second">Giải 2</td>
                                            </tr>
                                            <tr>
                                                <td className="award-3-second">Giải 3</td>
                                            </tr>
                                            <tr>
                                                <td className="award-4-second">Giải 4</td>
                                            </tr>
                                            <tr>
                                                <td className="award-5-second">Giải 5</td>
                                            </tr>
                                            <tr>
                                                <td className="award-6-second">Giải 6</td>
                                            </tr>
                                            <tr>
                                                <td className="award-7-second">Giải 7</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td valign="top">
                                    <table className="col-md-12 col-sm-12 col-xs-12">
                                        <tbody>
                                            <tr>
                                                <td
                                                    valign="top"
                                                    className="col-md-4 col-sm-4 col-xs-4"
                                                >
                                                    <table className="col-md-12 col-sm-12 col-xs-12 rightcl">
                                                        <tbody>
                                                            <tr>
                                                                <td className="province-second">
                                                                    Hà Nội
                                                                </td>
                                                            </tr>
                                                            {Object.keys(dataFace).map((key) => {
                                                                const item = dataFace[key];
                                                                const temp: any = {};
                                                                item.forEach((item: any) => {
                                                                    if (temp[item.prizeDim.stt]) {
                                                                        temp[
                                                                            item.prizeDim.stt
                                                                        ].push(item);
                                                                    } else {
                                                                        temp[item.prizeDim.stt] = [
                                                                            item,
                                                                        ];
                                                                    }
                                                                });
                                                                //getlength of temp
                                                                const length =
                                                                    Object.keys(temp).length;
                                                                //create arr length 15
                                                                const arr = Array.from(
                                                                    Array(length).keys()
                                                                );
                                                                Object.keys(temp).forEach(
                                                                    (key: any) => {
                                                                        const item = temp[key];
                                                                        arr[key] = item;
                                                                    }
                                                                );
                                                                return arr.map(
                                                                    (item: any, i: number) => {
                                                                        let className = '';
                                                                        switch (i) {
                                                                            case 0:
                                                                                className =
                                                                                    'award-special-second';
                                                                                break;
                                                                            case 1:
                                                                                className =
                                                                                    'award-1-second';
                                                                                break;
                                                                            case 2:
                                                                                className =
                                                                                    'award-2-second';
                                                                                break;
                                                                            case 3:
                                                                                className =
                                                                                    'award-3-second';
                                                                                break;
                                                                            case 4:
                                                                                className =
                                                                                    'award-4-second';
                                                                                break;
                                                                            case 5:
                                                                                className =
                                                                                    'award-5-second';
                                                                                break;
                                                                            case 6:
                                                                                className =
                                                                                    'award-6-second';
                                                                                break;
                                                                            case 7:
                                                                                className =
                                                                                    'award-7-second';
                                                                                break;
                                                                            default:
                                                                                break;
                                                                        }
                                                                        return (
                                                                            <tr>
                                                                                <td
                                                                                    className={
                                                                                        className
                                                                                    }
                                                                                >
                                                                                    {item.map(
                                                                                        (
                                                                                            item: any
                                                                                        ) => {
                                                                                            return (
                                                                                                <div>
                                                                                                    {
                                                                                                        item.result
                                                                                                    }
                                                                                                </div>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                                </td>
                                                                            </tr>
                                                                        );
                                                                    }
                                                                );
                                                            })}
                                                            {/* <tr>
																				<td className="award-special-second">34970</td>
																			</tr>
																			<tr>
																				<td className="award-1-second">79961</td>
																			</tr>
																			<tr>
																				<td className="award-2-second">
																					<div>85583</div>
																					<div>75718</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="award-3-second">
																					<div>00871</div><div>85416</div><div>66838</div>
																					<div>00871</div><div>85416</div><div>66838</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="award-4-second"><div>6890</div><div>6560</div>
																				<div>6890</div><div>6560</div></td>
																			</tr>
																			<tr>
																				<td className="award-5-second">
																					<div>9340</div><div>9104</div><div>0879</div>
																					<div>9340</div><div>9104</div><div>0879</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="award-6-second"><div>741</div><div>336</div><div>962</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="award-7-second">
																					<div>70</div><div>04</div><div>16</div><div>96</div>
																				</td>
																			</tr> */}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix">
                <div className="pagination" style={{ float: 'right' }}>
                  
                </div>
                <div className="social-button">
                    <ul>
                        <li>
                            <div>
                                <div
                                    className="fb-like"
                                    data-send="false"
                                    data-layout="button_count"
                                    data-width="150"
                                    data-show-faces="true"
                                ></div>
                            </div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}
