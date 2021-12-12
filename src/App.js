import { useState } from "react";
import Calc from "./components/Calc";
import './App.css';
import Footer from "./components/Footer";

function App() {
  const [p, setP] = useState();
  const [q, setQ] = useState();

  return (
    <div class="App">
      <h1>Tạo chữ ký số RSA phục vụ bài thi</h1>
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

      <Footer />
    </div>
  );
}

export default App;
