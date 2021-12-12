import React from 'react'

export default function TableXY() {
    const [a, setA] = React.useState();
    const [b, setB] = React.useState();
    const [c, setC] = React.useState();

    const result = a && b && c ? Tinh(a, c, b) : null;
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>bảng tính a^b mod c</h3>
            <div class="form">
                <table>
                <tr>
                    <td>
                    <label>A</label>
                    <input type="number" onChange={(e) => setA(e.target.value)} value={a} placeholder="Nhập a" />
                    </td>
                    <td>
                    <label>B</label>
                    <input type="number" onChange={(e) => setB(e.target.value)} value={b} placeholder="Nhập b" />
                    </td>
                    <td>
                    <label>C</label>
                    <input type="number" onChange={(e) => setC(e.target.value)} value={c} placeholder="Nhập c" />
                    </td>
                </tr>
                </table>
            </div>
            <div className='calc'>
            {
                result !== null ? (
                <table>
                    <tr>
                        <th>dec-&gt;bin = {Number(b).toString(2)}</th>
                        <th>p^2</th>
                        <th>p = p mod c</th>
                        <th>p = p * a</th>
                        <th>p = p mod c</th>
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
                </table> ) : null
            }
            </div>
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