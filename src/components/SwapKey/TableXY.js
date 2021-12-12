import React from 'react'

export default function TableXY({g, p, x}) {
    const result = Tinh(g, p, x);
    return (
        <div>
            <h3>Bảng tạo chữ ký cho thông điệp x &gt; 15</h3>
            <table>
                <tr>
                    <th>dec-&gt;bin {Number(x).toString(2)}</th>
                    <th>p^2</th>
                    <th>p = p mod n</th>
                    <th>p = p * m</th>
                    <th>p = p mod n</th>
                </tr>
                {result.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.binx}</td>
                            <td>{item.p}</td>
                            <td>{item.p2}</td>
                            <td>{item.p3}</td>
                            <td>{item.p4}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

function Tinh(m, n, d) {
    const result = [];
    let bin = Number(d).toString(2);
    let p = 1;
    let p2 = 1;
    let p3 = 1;
    let p4 = 1;
    for (let i = 0; i < bin.length; i++) {
        let binx = bin[i]
        if (bin[i] === '1') {
            p = p4*p4
            p2 = p % n;
            p3 = p2 * m;
            p4 = p3 % n;
        } else {
            p = p4*p4
            p2 = p % n;
            p3 = 'x';
            p4 = p2 % n;
        }
        result.push({binx, p, p2, p3, p4})
    }
    return result;
}