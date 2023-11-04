import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './page/Home.js'
import QSE from './page/QSE.js'
import SID from './page/SID.js'
import SID_L3 from './page/SID_L3.js'
import SID_M1 from './page/SID_M1.js'
import SID_M2 from './page/SID_M2.js'
import VDAF from './page/VDAF.js'
import VDAF_M2 from './page/VDAF_M2.js'
import PREINSCRIPTION from './page/PREINSCRIPTION.js'
import FICHEPREINSCRIPTION from './page/FICHEPREINSCRIPTION.js'
import QSE_L3 from './page/QSE_L3.js'
import QSE_M1 from './page/QSE_M1.js'
import QSE_M2 from './page/QSE_M2.js'
import DASHBOARD from './page/DASHBOARD.js'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='*' element={<Navigate to='/' />} />
        <Route path="" element={<Home/>}/>
        <Route path="/QSE" element={<QSE/>}/>
        <Route path="/QSE/l3" element={<QSE_L3/>}/>
        <Route path="/QSE/m1" element={<QSE_M1/>}/>
        <Route path="/QSE/m2" element={<QSE_M2/>}/>
        <Route path="/SID" element={<SID/>}/>
        <Route path="/SID/l3" element={<SID_L3/>}/>
        <Route path="/SID/m1" element={<SID_M1/>}/>
        <Route path="/SID/m2" element={<SID_M2/>}/>
        <Route path="/VDAF" element={<VDAF/>}/>
        <Route path="/VDAF/m2" element={<VDAF_M2/>}/>
        <Route path="/preinscription" element={<PREINSCRIPTION/>}/>
        <Route path="/fiche" element={<FICHEPREINSCRIPTION/>}/>
        <Route path="/Dashboard" element={<DASHBOARD/>}/>
      </Routes>
    </div>
  );
}

export default App;
