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
