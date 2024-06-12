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

import Test from './components/Test';
import LayoutAdmin from './components/layout/LayoutAdmin';
import DashBoard from './components/pages/admin/dashboard/DashBoard';
import AddTour from './components/pages/admin/Tour/AddTour';
import ListProductAdmin from './components/pages/admin/Tour/ListTour';
import EditTour from './components/pages/admin/Tour/EditTour';


// import { initializeStickyAndScrollUp, initializeSwipers, initializeSelect2, initializeFancybox, initializeHoverIcons, initializePriceRangeSlider, initializeCustomDropdown } from './components/initializeScripts';
=======
import LayoutAdmin from './components/Admin/LayoutAdmin';
import DashBoard from './components/Admin/DashBoard';
import AddTour from './components/Admin/AddProduct';
import ListTour from './components/Admin/ListTour';
import EditTour from './components/Admin/EditTour';
import "./App.css";


function App() {
  return (
    <>
      <Routes>

        <Route path='/' Component={Indextwo}/>
        {/* <Route path='/index.html' Component={HomePage}/> */}
        <Route path='/index-two.html' Component={Indextwo}/>
        <Route path='/test' Component={Test }/>
        <Route path='/about.html' Component={About}/>
        <Route path='/destination.html' Component={Destination}/>
        <Route path='/tour-list.html' Component={TourList}/>
        <Route path='/tour-details.html' Component={TourDetails}/>
        <Route path='/news-details.html' Component={NewsDetails}/>
        <Route path='/destination-details.html' Component={DestinationDetail}/>
        <Route path='/payment.html' Component={Payment}/>
        <Route path='/login.html' Component={Login}/>
        <Route path='/register.html' Component={Register}/>
        <Route path='/forgot-pass.html' Component={Forgot}/>
        <Route path='/verification.html' Component={Verification}/>
        <Route path='/new-password.html' Component={NewPassword}/>
        <Route path='/faq.html' Component={Faq}/>
        <Route path='/privacy-policy.html' Component={PrivacyPolicy}/>
        <Route path='/terms-condition.html' Component={TermsCondition}/>
        <Route path='/news.html' Component={New}/>
        <Route path='/contact.html' Component={Contact}/>

        <Route
            path='/dashboard'
            element={
                <LayoutAdmin />
            }>
            <Route path='' Component={DashBoard} />
            <Route path='add_tour' Component={AddTour} />
            <Route path='list_tour' Component={ListProductAdmin} />
            <Route path='edit_tour' Component={EditTour} />
          </Route>

        <Route path='/' element={<Indextwo />} />
        <Route path='/index-two' element={<Indextwo />} />
        <Route path='/about' element={<About />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/tour-list' element={<TourList />} />
        <Route path='/tour-details' element={<TourDetails />} />
        <Route path='/news-details' element={<NewsDetails />} />
        <Route path='/destination-details' element={<DestinationDetail />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-pass' element={<Forgot />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-condition' element={<TermsCondition />} />
        <Route path='/news' element={<New />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='admin' element={<LayoutAdmin />}>
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='add-product' element={<AddTour />} />
          <Route path='list-product' element={<ListTour />} />
          <Route path='edit-product/:id' element={<EditTour />} />
        </Route>

      </Routes>
   
    </>
  );
}

export default App;
