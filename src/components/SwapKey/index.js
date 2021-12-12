import React, { useEffect } from 'react'
import TableXY from './TableXY'

export default function SwapKey() {
  const [p, setP] = React.useState()
  const [g, setG] = React.useState()
  const [x, setX] = React.useState()
  const [y, setY] = React.useState()
  const [r1, setR1] = React.useState(0)
  const [r2, setR2] = React.useState(0)
  const [k1, setK1] = React.useState(0)
  const [k2, setK2] = React.useState(0)

  useEffect(() => {
    if(p && g && x && y) {
      setR1(powFun(g, x, p))
      setR2(powFun(g, y, p))
      setK1(powFun(r2, x, p))
      setK2(powFun(r1, y, p))
    }
  }, [p, g, x, y, r1, r2, k1, k2])

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Trao đổi khóa giữa alice và bob</h2>
      <div class="form">
        <table>
          <tr>
            <td>
              <label>P</label>
              <input type="number" onChange={(e) => setP(e.target.value)} value={p} placeholder="Nhập p" />
              <label style={{fontSize: '12px'}}>X (ngẫu nhiên và bí mật)</label>
              <input type="number" onChange={(e) => setX(e.target.value)} value={x} placeholder="Nhập p" />
            </td>
            <td>
              <label>G</label>
              <input type="number" onChange={(e) => setG(e.target.value)} value={g} placeholder="Nhập q" />
              <label style={{fontSize: '12px'}}>Y (ngẫu nhiên và bí mật)</label>
              <input type="number" onChange={(e) => setY(e.target.value)} value={y} placeholder="Nhập q" />
            </td>
          </tr>
        </table>
      </div>
      {p && g && x && y ? (
      <div class="swapkey">
        <ol>
          <li>Alice cho x = {x} nên tính R1 = g^x mod p = {r1}</li>
          <li>Bob cho y = {y} nên tính R2 = g^y mod p = {r2}</li>
          <li>Alice gửi R1 = {r1} cho Bob</li>
          <li>Bob nhận R1 = {r1} từ Alice</li>
          <li>Bob tiến hành tính K = R1^y mod p = {k1}</li>
          <li>Bob gửi R2 = {r2} cho Alice</li>
          <li>Alice nhận R2 = {r2} từ Bob</li>
          <li>Alice tiến hành tính K = R2^x mod p = {k2}</li>
          <li>Alice và Bob có K = {k1} và {k2}</li>
          <li>
            {k1 === k2 ?
             `Alice và Bob có thể gửi và nhận tin nhắn đến nhau
             và K = g^xy mod p = ${powFun(g, x*y, p)} là mật khẩu của hai người` :
             "Giá trị K của Alice và Bob không trùng nhau"
            }
          </li>
        </ol>
      </div>) : null}
      
  </div>     
  )
}

function powFun(base, ex, mo) {
  var r;

  if(ex === 0) 
      return 1;
  else if(ex % 2 === 0) {
      r = powFun(base, ex/2, mo) % mo ;
      return (r * r) % mo;
  } else 
      return (base * powFun(base, ex - 1, mo)) % mo;
}
