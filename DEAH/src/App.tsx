import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Destination from './components/DestinationDetail'
import DestinationDetail from './components/DestinationDetail'
import Faq from './components/Faq'
import Forgot from './components/Forgot'
import Indextwo from './components/Indextwo'
import Index from './components/Index'
import Login from './components/Login'
import NewPassword from './components/NewPassword'
import NewsDetails from './components/NewsDetails'
import New from './components/New'
import Payment from './components/Payment'
import PrivacyPolicy from './components/PrivacyPolicy'
import Register from './components/Register'
import TermsCondition from './components/TermsCondition'
import TourDetails from './components/TourDetails'
import TourList from './components/TourList'
import Verification from './components/Verification'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/destinationDetail' Component={DestinationDetail}/>
        <Route path='/destination' Component={Destination}/>
        <Route path='/faq' Component={Faq}/>
        <Route path='/fogot' Component={Forgot}/>
        <Route path='/indextwo' Component={Indextwo}/>
        <Route path='/index' Component={Index}/>
        <Route path='/login' Component={Login}/>
        <Route path='/newpassword' Component={NewPassword}/>
        <Route path='/newdetail' Component={NewsDetails}/>
        <Route path='/new' Component={New}/>
        <Route path='/payment' Component={Payment}/>
        <Route path='/privacypolicy' Component={PrivacyPolicy}/>
        <Route path='/register' Component={Register}/>
        <Route path='/termscondition' Component={TermsCondition}/>
        <Route path='/tourdetails' Component={TourDetails}/>
        <Route path='/tourlist' Component={TourList}/>
        <Route path='/verification' Component={Verification}/>
      </Routes>
    </>
  )
}

export default App
