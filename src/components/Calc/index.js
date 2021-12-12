import React, { useState } from 'react'
import ChuKy from './ChuKy';
import D from './D';

export default function Calc({p, q}) {
    const [ex, setEx] = useState(0);
    const [m, setM] = useState(0);
    const n = p * q;
    const on = (p-1)*(q-1);
    const gcd = ex !== '' ? GCD(on, ex) : 0;
    let d = 0;
    if(gcd === 1) {
      d = modInverse(ex, on);
    }
    const s = powFun(m, d, n);
    const mx = powFun(s, ex, n);
    return (
        <div className="calc">
            <h1>Các bước làm</h1>
            <h4>Ta có p = {p} và q = {q}</h4>
            <h4>Nên: </h4>
            <p><b>n </b>= p * q = {p} * {q} = {n}</p>
            <p><b>Ø(n) </b>= (p - 1)(q - 1) = ({p} - 1) * ({q} - 1) = {on}</p>
            <p>Chọn e sao cho GCD(Ø(n), e) = 1</p>
            <b>Vậy e = </b>
            <input className='e' type="number" value={ex} onChange={(e) => setEx(e.target.value)}/>
            <p>Thì GCD(Ø(n), e) = GCD({on}, {ex}) = { gcd }</p>
            {
              gcd !== 1 ? <h3>GCD chưa bằng 1. vui lòng chọn lại e</h3> : (
                <div>
                  <p className='indam'>Tính d biết:</p>
                  <ul>
                      <li>d = e^-1 mod Ø(n)</li>
                      <li>d &lt; Ø(n)</li>
                  </ul>
                  {
                    GCD(on, ex) === 1 ? <D r1={ex} r2={on}/> : <p>GCD(Ø(n), e) != 1</p>
                  }
                  <p>Vậy d = {ex}^-1 mod {on} = {d}</p>
                  <p>Vậy: </p>
                  <ul>
                      <li>Khóa công khai:</li>
                      <li>PU = (e, n) = ({ex}, {n})</li>
                      <li>Khóa bí mật:</li>
                      <li>PR = (d, n) = ({d}, {n})</li>
                  </ul>
                  <span>Với m = </span>
                  <input className='m' type="number" value={m} onChange={ (e) => setM(e.target.value) }/> 
                  <ChuKy m={m} n={n} d={d} e={ex} s={s}/>
                  <p>Vậy: </p>
                  <ul>
                      <li>S = m^d mod n = {m}^{d} mod {n} = { s }</li>
                      <li>m = S^e mod n = {s}^{ex} mod {n} = { mx }</li>

                  </ul>
                  <p>Vậy: </p>
                  <ul>
                      <li>Chữ ký của thông diệp m = { m } là: { s }</li>
                      <li>Thẩm tra chữ ký đã được ký trên thông điệp: { mx }</li>
                      {
                        kiemtra(m, mx)
                      }
                  </ul>
                </div>
              )
            }
            

        </div>
    )
}

function GCD(p, q) {
  if(q === 0) {
    return p;
  }
  return GCD(q, p % q);
}

function kiemtra(m, mx){
  if(m === mx) {
     return <li>Do m ban đầu và m sau khi được thẩm tra bằng nhau nên Chữ ký đúng</li>
  } else {
    return <li>Do m ban đầu và m sau khi được thẩm tra khác nhau nên Chữ ký sai</li>
  }
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

function modInverse(a, m) {
    // validate inputs
    [a, m] = [Number(a), Number(m)]
    if (Number.isNaN(a) || Number.isNaN(m)) {
      return NaN // invalid input
    }
    a = (a % m + m) % m
    if (!a || m < 2) {
      return NaN // invalid input
    }
    // find the gcd
    const s = []
    let b = m
    while(b) {
      [a, b] = [b, a % b]
      s.push({a, b})
    }
    if (a !== 1) {
      return NaN // inverse does not exists
    }
    // find the inverse
    let x = 1
    let y = 0
    for(let i = s.length - 2; i >= 0; --i) {
      [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m
  }


