import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { StartTopPage } from "./components/startTopPage/StartTopPage";
import { Home } from "./components/pages/home/Home";
import { AboutUs } from "./components/pages/AboutUs/AboutUs";
import { CarInsurance } from './components/pages/CarInsurance/CarInsurance';
import { MortgageIns } from './components/pages/MortgageIns/MortgageIns'
import { TouristIns } from './components/pages/TouristIns/TouristIns';
import { HealthIns } from './components/pages/HealthIns/HealthIns';
import { BusinessIns } from './components/pages/BusinessIns/BussinesIns';
import { FinancialPlanning } from './components/pages/FinancialPlanning/FinancialPlanning';

import './App.scss';

function App() {
  return (
    <Router basename='/miller'>
      <StartTopPage />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/CarInsurance' element={<CarInsurance />}/>
        <Route path='/MortgageIns' element={<MortgageIns />}/>
        <Route path='/TouristIns' element={<TouristIns />}/>
        <Route path='/HealthIns' element={<HealthIns />}/>
        <Route path='/BusinessIns' element={<BusinessIns />}/>
        <Route path='/FinancialPlanning' element={<FinancialPlanning />}/>
      </Routes>
    </Router>
  );
}

export default App;
