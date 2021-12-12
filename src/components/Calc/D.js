import React from 'react'

let d = 0;
let text = '';

export default function D({r1, r2}) {
    const result = TinhD(r1, r2);
    return (
        <div>
            <h3>Bảng tính nghịch đảo nhân (d)</h3>
            <table>
                <tr>
                    <th>q</th>
                    <th>r1</th>
                    <th>r2</th>
                    <th>r</th>
                    <th>t1</th>
                    <th>t2</th>
                    <th>t</th>
                </tr>
                {result.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.q}</td>
                            <td>{item.r1}</td>
                            <td>{item.r2}</td>
                            <td>{item.r}</td>
                            <td>{item.t1}</td>
                            <td>{item.t2}</td>
                            <td>{item.t}</td>
                        </tr>
                    )
                })}
            </table>
            <p className='indam'>{text}</p>
        </div>

    )
}

function TinhD(r1, r2){
    let bandau = r2;
    if(r1 < r2){
        const result = [];
        let q = Math.floor(r1,r2)
        let t1 = 0;
        let t2 = 1;
        do {
            let temp = r1;
            r1 = r2;
            let r = temp % r2;
            r2 = r;
            q= Math.floor(r1 / r2)
            let t = t1 - q * t2;
            result.push({q, r1, r2, r, t1, t2, t})
            t1 = t2;
            t2 = t;

        } while(r1%r2 !== 0)
        let temp = r1;
        r1 = r2;
        let r = temp % r2;
        r2 = r;
        q = '';
        let t = t1 - q * t2;
        result.push({q, r1, r2, r, t1, t2, t})
        if(r2 === 0){
            if(t1 > 0 && t2 < 0){
                d = t1;
                text = `Nghịch đảo nhân cần tìm là: t1 = ${t1} \r\n
                        hoặc t1 + t2 = ${t1+t2}\r\n
                        chọn t1 = ${t1}`;
            } else if(t1 < 0 && t2 > 0){
                d = t2;
                text = `Nghịch đảo nhân cần tìm là: t2 = ${t2} \r\n
                        hoặc t1 + t2 = ${t1+t2}\r\n
                        chọn t2 = ${t2}`;
            } else if(t1 < 0 && t2 < 0){
                d = 0;

            } else{
                d = t1 + t2;
            }

            if(d === bandau){
                d = t1+t2;
                text = `Nghịch đảo nhân cần tìm là: t1 = ${t1}\r\n 
                        hoặc t1 + t2 = ${t1+t2}\r\n
                        chọn t1 + t2 = ${t1 + t2}`;
            }
        }
        return result;
    } else {
        return [];
    }
}