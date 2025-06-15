import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { StartTopPage } from "./components/startTopPage/StartTopPage";
import { Home } from "./components/pages/home/Home";
import { AboutUs } from "./components/pages/AboutUs/AboutUs";
import { CarInsurance } from './components/pages/CarInsurance/CarInsurance';
import { MortgageIns } from './components/pages/MortgageIns/MortgageIns'
import { TouristIns } from './components/pages/TouristIns/TouristIns';
import { HealthIns } from './components/pages/HealthIns/HealthIns';
import { LifeIns } from './components/pages/LifeIns/LifeIns';
import { BusinessIns } from './components/pages/BusinessIns/BusinessIns';
import { TravelIns } from './components/pages/TravelIns/TravelIns';
import { AccidentIns } from './components/pages/AccidentIns/AccidentIns';
import { PropertyIns } from './components/pages/PropertyIns/PropertyIns';
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
        <Route path='/LifeIns' element={<LifeIns />}/>
        <Route path='/BusinessIns' element={<BusinessIns />}/>
        <Route path='/TravelIns' element={<TravelIns />}/>
        <Route path='/AccidentIns' element={<AccidentIns />}/>
        <Route path='/PropertyIns' element={<PropertyIns />}/>
        <Route path='/FinancialPlanning' element={<FinancialPlanning />}/>
      </Routes>
    </Router>
  );
}

export default App;
