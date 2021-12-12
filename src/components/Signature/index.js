import React, { useState } from "react";
import Calc from '../Calc'

export default function Signature() {
    const [p, setP] = useState();
    const [q, setQ] = useState();
    return (
        <div>
            <h1 class="title">Tạo chữ ký số RSA phục vụ bài thi</h1>
            <div class="form">
                <table>
                <tr>
                    <td>
                    <label>P</label>
                    <input type="number" onChange={(e) => setP(e.target.value)} value={p} placeholder="Nhập p" />
                    </td>
                    <td>
                    <label>Q</label>
                    <input type="number" onChange={(e) => setQ(e.target.value)} value={q} placeholder="Nhập q" />
                    </td>
                </tr>
                </table>
            </div>
            {
                p && q ? <Calc p={p} q={q} /> : null
            }
        </div>
    )
}
