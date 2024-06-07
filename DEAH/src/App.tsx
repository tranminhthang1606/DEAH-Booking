import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Destination from './components/Destination';
import DestinationDetail from './components/DestinationDetail';
import Faq from './components/Faq';
import Forgot from './components/Forgot';
import Login from './components/Login';
import NewPassword from './components/NewPassword';
import NewsDetails from './components/NewsDetails';
import New from './components/New';
import Payment from './components/Payment';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import TermsCondition from './components/TermsCondition';
import TourDetails from './components/TourDetails';
import TourList from './components/TourList';
import Verification from './components/Verification';
import Indextwo from './components/Indextwo';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



function App() {


  return (
    <>
      <Routes>
        <Route path='/' Component={Indextwo}/>
        {/* <Route path='/index.html' Component={HomePage}/> */}
        <Route path='/index-two' Component={Indextwo}/>
        <Route path='/about' Component={About}/>
        <Route path='/destination' Component={Destination}/>
        <Route path='/tour-list' Component={TourList}/>
        <Route path='/tour-details' Component={TourDetails}/>
        <Route path='/news-details' Component={NewsDetails}/>
        <Route path='/destination-details' Component={DestinationDetail}/>
        <Route path='/payment' Component={Payment}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/forgot-pass' Component={Forgot}/>
        <Route path='/verification' Component={Verification}/>
        <Route path='/new-password' Component={NewPassword}/>
        <Route path='/faq' Component={Faq}/>
        <Route path='/privacy-policy' Component={PrivacyPolicy}/>
        <Route path='/terms-condition' Component={TermsCondition}/>
        <Route path='/news' Component={New}/>
        <Route path='/contact' Component={Contact}/>
       
      </Routes>
    </>
  );
}

export default App;
