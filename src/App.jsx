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
import { PensionManagement } from './components/pages/PensionManagement/PensionManagement';
import { InvestmentFunds } from './components/pages/InvestmentFunds/InvestmentFunds';
import { CustomerSupport } from './components/pages/CustomerSupport/CustomerSupport';
import { RealizationOfRights } from './components/pages/RealizationOfRights/RealizationOfRights';
import { ContactsPage } from './components/pages/ContactsPage/ContactsPage';
import { MillerAnatoliy } from './components/pages/PageAgent/MillerAnatoliy/MillerAnatoliy';
import { MillerKristina } from './components/pages/PageAgent/MillerKristina/MillerKristina';
import { Permyakov } from './components/pages/PageAgent/Permyakov/Permyakov';
import { Plugin } from './components/pages/PageAgent/Plugin/Plugin';
import { Povolotsky } from './components/pages/PageAgent/Povolotsky/Povolotsky';
import { AllIns } from './components/pages/AllIns/AllIns';
import { Blog } from './components/pages/Blog/Blog';
import { PensionInsurance } from './components/pages/Blog/articles/PensionInsurance/PensionInsurance';

import './App.scss';

function App() {
  return (
    <Router basename='/'>
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
        <Route path='/PensionManagement' element={<PensionManagement />}/>
        <Route path='/InvestmentFunds' element={<InvestmentFunds />}/>
        <Route path='/CustomerSupport' element={<CustomerSupport />}/>
        <Route path='/RealizationOfRights' element={<RealizationOfRights />}/>
        <Route path='/ContactsPage' element={<ContactsPage />}/>
        <Route path='/AllIns' element={<AllIns />}/>
        <Route path='/MillerAnatoliy' element={<MillerAnatoliy />}/>
        <Route path='/MillerKristina' element={<MillerKristina />}/>
        <Route path='/Permyakov' element={<Permyakov />}/>
        <Route path='/Plugin' element={<Plugin />}/>
        <Route path='/Permyakov' element={<Permyakov />}/>
        <Route path='/Povolotsky' element={<Povolotsky />}/>
        <Route path='/Blog' element={<Blog />}/>
        <Route path='/PensionInsurance' element={<PensionInsurance />}/>
      </Routes>
    </Router>
  );
}

export default App;
