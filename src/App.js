import { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Signature from './components/Signature';
import SwapKey from "./components/SwapKey";
import TableXY from "./components/TableXY";

function App() {
  const [select, setSelect] = useState({
    type : 'signature',
    selected : true,
  })

  return (
    <div class="App">
      <ul className="menu">
        <li>
          <button onClick={() => setSelect({ type:'signature',selected: true })}>Chữ ký số</button>
        </li>
        <li>
          <button onClick={() => setSelect({ type:'swap',selected: true })}>Trao đổi khóa</button>
        </li>
        <li>
          <button onClick={() => setSelect({ type:'table',selected: true })}>Bảng tính số mũ lớn</button>
        </li>
      </ul>

      {select.type === 'signature' && <Signature />}
      {select.type === 'swap' && <SwapKey />}
      {select.type === 'table' && <TableXY />}
      <Footer />
    </div>
  );
}

export default App;
