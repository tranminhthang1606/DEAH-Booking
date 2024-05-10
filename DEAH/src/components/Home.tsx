import React from 'react'
import "../assets/js/main.js"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
   <div>
  <header>
    <div className="header-area">
      <div className="main-header">
        {/* Header Top */}
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top-menu-wrapper d-flex align-items-center justify-content-between">
                  {/* Top Left Side */}
                  <div className="top-header-left d-flex align-items-center">
                    {/* Logo*/}
                    <div className="logo">
                      <a href="index.html"><img src="/src/assets/images/logo/logo.png" alt="logo" className="changeLogo" /></a>
                    </div>
                    {/* search box */}
                    <div className="search-box search-bar d-none d-lg-block">
                      <div className="header-search">
                        <span className="pera">Destination, attraction</span>
                        <div className="search-icon">
                          <i className="ri-search-line" />
                        </div>
                        <kbd className="light-text">
                          <abbr title="Ctrl">Ctrl +</abbr> k
                        </kbd>
                      </div>
                    </div>
                    {/* Mobile Device Seach & Theme Mode */}
                    <div className="search-header-position d-block d-lg-none">
                      <div className="d-flex gap-15">
                        <div className="search-bar">
                          <a href="javascript:void(0)" className="rounded-btn">
                            <i className="ri-search-line" />
                          </a>
                        </div>
                        {/* Theme Mode */}
                        <button className="ToggleThemeButton change-theme-mode m-0 p-0 border-0">
                          <i className="ri-sun-line" />
                        </button>
                      </div>
                    </div>
                    {/* / Mobile Device Seach & Theme Mode*/}
                  </div>
                  {/*Top Right Side */}
                  <div className="top-header-right">
                    {/* contact us */}
                    <div className="contact-section">
                      <div className="circle-primary-sm">
                        <i className="ri-mail-line" />
                      </div>
                      <div className="info">
                        <p className="pera">Email Anytime</p>
                        <h4 className="title">
                          <a href="javascript:void(0)">example@gmail.com</a>
                        </h4>
                      </div>
                    </div>
                    <div className="contact-section">
                      <div className="circle-primary-sm">
                        <i className="ri-phone-line" />
                      </div>
                      <div className="info">
                        <p className="pera">Call Anytime</p>
                        <h4 className="title">
                          <a href="javascript:void(0)">00 (888) +123456</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Bottom */}
        <div className="header-bottom header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper">
                  {/* Main-menu for desktop */}
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <div className="d-flex justify-content-between align-items-center">
                        <ul className="listing" id="navigation">
                          <li className="single-list">
                            <a href="javascript:void(0)" className="single link-active">Home <i/></a>
                            
                          </li>
                          <li className="single-list">
                            <a href="about.html" className="single">About</a>
                          </li>
                          <li className="single-list">
                            <a href="destination.html" className="single">Destination</a>
                          </li>
                          <li className="single-list">
                            <a href="tour-list.html" className="single">Tour Package</a>
                          </li>
                          <li className="single-list">
                            <a href="javascript:void(0)" className="single">Pages <i className="ri-arrow-down-s-line" /></a>
                            <ul className="submenu">
                              <li className="single-list">
                                <a href="tour-details.html" className="single">Tour
                                  Details</a>
                              </li>
                              <li className="single-list">
                                <a href="news-details.html" className="single">News
                                  Details</a>
                              </li>
                              <li className="single-list">
                                <a href="destination-details.html" className="single">Destination Details</a>
                              </li>
                              <li className="single-list">
                                <a href="payment.html" className="single">payment</a>
                              </li>
                              <li className="single-list">
                                <a href="javascript:void(0)" className="single">Login<i className="ri-arrow-right-s-line" /></a>
                                <ul className="submenu">
                                  <li className="single-list">
                                    <a href="login.html" className="single">Login</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="register.html" className="single">Registration</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="forgot-pass.html" className="single">Forgot
                                      Password</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="verification.html" className="single">Verification</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="new-password.html" className="single">New
                                      Password</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="single-list">
                                <a href="faq.html" className="single">FAQs</a>
                              </li>
                              <li className="single-list">
                                <a href="privacy-policy.html" className="single">privacy
                                  policy</a>
                              </li>
                              <li className="single-list">
                                <a href="terms-condition.html" className="single">terms-condition</a>
                              </li>
                            </ul>
                          </li>
                          <li className="single-list">
                            <a href="news.html" className="single">News</a>
                          </li>
                          <li className="single-list">
                            <a href="contact.html" className="single">Contact</a>
                          </li>
                          <li className="d-block d-lg-none">
                            <div className="header-right pl-15">
                              <div className="d-flex align-items-center gap-12">
                                <div className="lang">
                                  <i className="ri-global-line" />
                                </div>
                                <div className="divider gradient-divider" />
                                <div className="money">
                                  <p className="pera">USD</p>
                                </div>
                              </div>
                              <div className="sign-btn">
                                <a href="login.html" className="btn-secondary-sm">Sign
                                  In</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="header-right">
                          <div className="d-flex align-items-center gap-12">
                            <div className="lang">
                              <i className="ri-global-line" />
                            </div>
                            <div className="divider gradient-divider" />
                            <div className="money">
                              <p className="pera">USD</p>
                            </div>
                          </div>
                          <div className="sign-btn">
                            <a href="login.html" className="btn-secondary-sm">Sign In</a>
                          </div>
                          {/* Theme Mode */}
                          <li className="single-list">
                            <button className="ToggleThemeButton change-theme-mode m-0 p-0 border-0">
                              <i className="ri-sun-line" />
                            </button>
                          </li>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="div">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search box */}
      <div className="search-container">
        <div className="top-section">
          <div className="search-icon">
            <i className="ri-search-line" />
          </div>
          <div className="modal-search-box">
            <input type="text" id="searchField" className="search-field" placeholder="Destination, Agency, Country" />
            <button id="closeSearch" className="close-search-btn">
              <kbd className="light-text"> ESC </kbd>
            </button>
          </div>
        </div>
        <div className="body-section">
          <div className="row">
            <div className="col-md-8">
              <ul className="listing">
                <li>
                  <h4 className="search-label">Recent</h4>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src/assets/images/gallery/search-img-1.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Dubai by Night City Tour with Fountain show
                        </h4>
                        <p className="pera line-clamp-2">
                          Wonderful evening escapade starting at Madinat
                          Jumeirah to the musical fountains to see another.
                          Wonderful evening escapade starting at Madinat
                          Jumeirah to the musical fountains to see another
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src//src/assets/images/gallery/search-img-2.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Dubai: Premium Red Dunes, Camels, Stargazing &amp; 5*
                          BBQ at Al Khayma Camp™️
                        </h4>
                        <p className="pera line-clamp-2">
                          Give a great end to your day in Dubai with our
                          premium evening Red Dune Desert Safari. Give a great
                          end to your day in Dubai with our premium evening
                          Red Dune Desert Safari.
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src/assets/images/gallery/search-img-3.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Admission to Global Village in Dubai
                        </h4>
                        <p className="pera line-clamp-2">
                          Admission to Dubai’s biggest, multicultural festival
                          park with replicas of iconic landmarks. Admission to
                          Dubai’s biggest, multicultural festival park with
                          replicas of iconic landmarks
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <h4 className="search-label">Recent</h4>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src/assets/images/gallery/search-img-1.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Dubai by Night City Tour with Fountain show
                        </h4>
                        <p className="pera line-clamp-2">
                          Wonderful evening escapade starting at Madinat
                          Jumeirah to the musical fountains to see another.
                          Wonderful evening escapade starting at Madinat
                          Jumeirah to the musical fountains to see another
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src/assets/images/gallery/search-img-2.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Dubai: Premium Red Dunes, Camels, Stargazing &amp; 5*
                          BBQ at Al Khayma Camp™️
                        </h4>
                        <p className="pera line-clamp-2">
                          Give a great end to your day in Dubai with our
                          premium evening Red Dune Desert Safari. Give a great
                          end to your day in Dubai with our premium evening
                          Red Dune Desert Safari.
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="single-list">
                  <a href="tour-details.html">
                    <div className="search-flex">
                      <div className="content-img">
                        <img src="/src/assets/images/gallery/search-img-3.jpeg" alt="travello" />
                      </div>
                      <div className="content">
                        <h4 className="title line-clamp-1">
                          Admission to Global Village in Dubai
                        </h4>
                        <p className="pera line-clamp-2">
                          Admission to Dubai’s biggest, multicultural festival
                          park with replicas of iconic landmarks. Admission to
                          Dubai’s biggest, multicultural festival park with
                          replicas of iconic landmarks
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="right-section" id="filterMenu">
                <h4 className="title">Filter Options</h4>
                {/* List of Filter */}
                <ul className="listing">
                  <li>
                    <h4 className="search-label">Post Type</h4>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Posts (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Posts (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Links (44)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Blogs (23)</p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* List of Filter */}
                <ul className="listing">
                  <li>
                    <h4 className="search-label">Categories</h4>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Articles (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Poll (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Article (44)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Blogs (23)</p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* List of Filter */}
                <ul className="listing">
                  <li>
                    <h4 className="search-label">Travel</h4>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Articles (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Poll (3)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Article (44)</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list">
                    <div className="d-flex align-items-center gap-8">
                      <label className="checkbox-label">
                        <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                        <span className="checkmark-style" />
                      </label>
                      <div className="content">
                        <p className="pera">Blogs (23)</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="div">
              <div className="filter_menu" />
            </div>
          </div>
        </div>
      </div>
      {/* / End-Search */}
    </div>
  </header>
  <main>
    {/* Hero area S t a r t*/}
    <section className="hero-area-bg hero-padding1">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8">
            <div className="hero-caption-one position-relative">
              <h4 className="title wow fadeInUp" data-wow-delay="0.0s">The World's Best Travel Spots</h4>
              <p className="pera wow fadeInUp" data-wow-delay="0.1s">
                Lorem ipsum dolor sit amet consectetur. Platea urna hendrerit
                dui eget velit sollicitudin orci. Non sit lorem dolor placerat
                faucibus. Ut tellus fewow fadeInUp" data-wow-delay="0.0s"ugiat facilisi neque sagittis cursus
                sagittis.
              </p>
            </div>
            <div className="hero-footer position-relative">
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".3s">
                <div className="video-player">
                  <i className="ri-play-fill" />
                </div>
              </a>
              <div className="all-user wow fadeInRight" data-wow-delay="0.5s">
                <div className="happy-user">
                  <img src="/src/assets/images/hero/user-1.jpeg" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/assets/images/hero/user-2.png" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/assets/images/hero/user-3.png" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/assets/images/hero/user-4.jpeg" alt="travello" />
                </div>
                <div className="happy-user-count">
                  <p className="user-count">5k+</p>
                </div>
                <p className="pera">Happy Customer</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-none d-lg-block">
            <div className="hero-banner wow fadeInRight" data-wow-delay="0.0s">
              {/* Slider */}
              <div className="swiper h1-Hero-active">
                <div className="swiper-wrapper">
                  {/* Single */}
                  <div className="swiper-slide">
                    <video className="hero-slider-video" loop autoPlay muted>
                      <source src="/src/assets/images/hero/hero-slider2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Single */}
                  <div className="swiper-slide">
                    <video className="hero-slider-video" loop autoPlay muted>
                      <source src="/src/assets/images/hero/hero-slider1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Single */}
                  <div className="swiper-slide">
                    <video className="hero-slider-video" loop autoPlay muted>
                      <source src="/src/assets/images/videos/travel11.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/*img*/}
                  <div className="swiper-slide">
                    <img src="/src/assets/images/hero/hero-banner-1.png" alt="travello" />
                  </div>
                </div>
              </div>
              {/* / End Slider */}
              {/* shape 01 */}
              <div className="shape">
                <img src="/src/assets/images/hero/shape-1.png" alt="travello" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Hero*/}
    {/* Plan area S t a r t */}
    <section className="plan-area">
      <div className="container">
        <div className="plan-section plan-shadow">
          <div className="select-dropdown-section">
            <div className="d-flex gap-10 align-items-center">
              <i className="ri-map-pin-line" />
              <h4 className="select2-title">Destination</h4>
            </div>
            <select className="destination-dropdown">
              <option value={1}>Sydney, Australia</option>
              <option value={2}>USA, Turkish </option>
              <option value={3}>Chittagong, Turkish </option>
            </select>
          </div>
          <div className="divider plan-divider d-none d-lg-block" />
          <div className="select-dropdown-section">
            <div className="d-flex gap-10 align-items-center">
              <i className="ri-flight-takeoff-fill" />
              <h4 className="select2-title">Tour Type</h4>
            </div>
            <select className="destination-dropdown">
              <option value="1">Booking Type</option>
              <option value="2">Advance Type</option>
              <option value="3">Pre-book Type</option>
            </select>
          </div>
          <div className="divider plan-divider d-none d-lg-block" />
          <div className="dropdown-section">
            <div className="d-flex gap-10 align-items-center">
              <i className="ri-time-line" />
              <div className="custom-dropdown custom-date">
                <h4 className="title">Date From</h4>
                <div className="arrow">
                  <i className="ri-arrow-down-s-line" />
                </div>
              </div>
            </div>
            <div className="date-result">01/12/2023</div>
          </div>
          <div className="divider plan-divider d-none d-lg-block" />
          <div className="dropdown-section position-relative user-picker-dropdown">
            <div className="d-flex gap-10 align-items-center">
              <i className="ri-user-line" />
              <div className="custom-dropdown">
                <h4 className="title">Guests</h4>
                <div className="arrow">
                  <i className="ri-arrow-down-s-line" />
                </div>
              </div>
            </div>
            <div className="user-result">02</div>
            <div className="user-picker dropdown-shadow">
              <div className="user-category">
                <div className="category-name">
                  <h4 className="title">Adults</h4>
                  <p className="pera">12years and above</p>
                </div>
                <div className="qty-container">
                  <button className="qty-btn-minus mr-1" type="button">
                    <i className="ri-subtract-fill" />
                  </button>
                  <input type="text" name="qty" defaultValue={0} className="input-qty input-rounded" />
                  <button className="qty-btn-plus ml-1">
                    <i className="ri-add-fill" />
                  </button>
                </div>
              </div>
              <div className="user-category">
                <div className="category-name">
                  <h4 className="title">Children</h4>
                  <p className="pera">2-11 years</p>
                </div>
                <div className="qty-container">
                  <button className="qty-btn-minus mr-1" type="button">
                    <i className="ri-subtract-fill" />
                  </button>
                  <input type="text" name="qty" defaultValue={0} className="input-qty input-rounded" />
                  <button className="qty-btn-plus ml-1">
                    <i className="ri-add-fill" />
                  </button>
                </div>
              </div>
              <div className="user-category">
                <div className="category-name">
                  <h4 className="title">infant</h4>
                  <p className="pera">belwo 2 years</p>
                </div>
                <div className="qty-container">
                  <button className="qty-btn-minus mr-1" type="button">
                    <i className="ri-subtract-fill" />
                  </button>
                  <input type="text" name="qty" defaultValue={0} className="input-qty input-rounded" />
                  <button className="qty-btn-plus ml-1" type="button">
                    <i className="ri-add-fill" />
                  </button>
                </div>
              </div>
              <div className="btn-section">
                <a href="javascript:void(0)" className="done-btn">Done</a>
              </div>
            </div>
          </div>
          <div className="sign-btn">
            <a href="tour-list.html" className="btn-secondary-lg">Search Plan</a>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Plan*/}
    {/* Special area S t a r t */}
    <section className="special-area top-padding position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights">special offers</span>
              <h4 className="title">
                Winter Our Big Offers to Inspire You
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offer-1.png" alt="travello" />
              <div className="offer-content">
                <p className="highlights-text">Save up to</p>
                <h4 className="title">50%</h4>
                <p className="pera">Let’s Explore The World</p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30"> Booking Now </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6">
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInRight" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offer-2.png" alt="travello" />
              <div className="offer-content-two">
                <h4 className="title">Nearby Hotel</h4>
                <p className="pera">
                  Up to <span className="highlights-text">50%</span> Off The Best
                  Hotels Near
                </p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30"> Booking Now </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="shape-bg">
        <img src="/src/assets/images/icon/bg-shape.png" alt="travello" />
      </div>
    </section>
    <section className="about-area bottom-padding1 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="section-title mx-605 mb-30">
              <span className="highlights">about us</span>
              <h4 className="title">Experience The World With Our Company</h4>
              <p className="pera">
                Lorem ipsum dolor sit amet consectetur. Platea urna hendrerit
                dui eget velit sollicitudin orci. Non sit lorem dolor placerat
                faucibus. Ut tellus feugiat facilisi neque sagittis cursus
                sagittis.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-one" role="tabpanel" aria-labelledby="v-pills-one-tab">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/gallery/about.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-two" role="tabpanel" aria-labelledby="v-pills-two-tab">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/gallery/about-banner-2.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-three" role="tabpanel" aria-labelledby="v-pills-three-tab">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/gallery/about-banner-3.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-four" role="tabpanel" aria-labelledby="v-pills-four-tab">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/gallery/about-banner-4.png" alt="travello" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="key-points position-relative z-12" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <div className="key-point active" id="v-pills-one-tab" data-bs-toggle="pill" data-bs-target="#v-pills-one" role="tab" aria-controls="v-pills-one" aria-selected="true">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">Best Price Guarantee</h4>
                  <p className="pera">
                    A "Best Price Guarantee" is a commitment offered by
                    businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
              <div className="key-point" id="v-pills-two-tab" data-bs-toggle="pill" data-bs-target="#v-pills-two" role="tab" aria-controls="v-pills-two" aria-selected="false">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">Easy &amp; Quick Booking</h4>
                  <p className="pera">
                    A "Best Price Guarantee" is a commitment offered by
                    businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
              <div className="key-point" id="v-pills-three-tab" data-bs-toggle="pill" data-bs-target="#v-pills-three" role="tab" aria-controls="v-pills-three" aria-selected="false">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">Tour Guide</h4>
                  <p className="pera">
                    A "Best Price Guarantee" is a commitment offered by
                    businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
              <div className="key-point" id="v-pills-four-tab" data-bs-toggle="pill" data-bs-target="#v-pills-four" role="tab" aria-controls="v-pills-four" aria-selected="false">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">World Class Travel</h4>
                  <p className="pera">
                    A "Best Price Guarantee" is a commitment offered by
                    businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-bg-about">
        <img src="/src/assets/images/icon/bg-shape-2.png" alt="travello" />
      </div>
    </section>
    <section className="destination-area destination-bg-before">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-430 mx-auto position-relative">
              <span className="highlights">Destination List</span>
              <h4 className="title">
                Explore The Beautiful Places Around World
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <a href="destination-details.html" className="destination-banner">
              <img src="/src/assets/images/destination/destination-1.png" alt="travello" />
              <div className="destination-content">
                <div className="ratting-badge">
                  <i className="ri-star-s-fill" />
                  <span>4.5</span>
                </div>
                <div className="destination-info">
                  <div className="destination-name">
                    <p className="pera">Spain</p>
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <p className="name">Malaga View</p>
                    </div>
                  </div>
                  <div className="button-section">
                    <div className="arrow-btn">
                      <i className="ri-arrow-right-line" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            <a href="destination-details.html" className="destination-banner">
              <img src="/src/assets/images/destination/destination-2.png" alt="travello" />
              <div className="destination-content">
                <div className="ratting-badge">
                  <i className="ri-star-s-fill" />
                  <span>4.5</span>
                </div>
                <div className="destination-info">
                  <div className="destination-name">
                    <p className="pera">New Zealand</p>
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <p className="name">Auckland View</p>
                    </div>
                  </div>
                  <div className="button-section">
                    <div className="arrow-btn">
                      <i className="ri-arrow-right-line" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="destination-gallery">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/assets/images/destination/destination-3.png" alt="travello" />
                  <div className="destination-content">
                    <div className="ratting-badge">
                      <i className="ri-star-s-fill" />
                      <span>4.5</span>
                    </div>
                    <div className="destination-info">
                      <div className="destination-name">
                        <p className="pera">Switzerland</p>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <p className="name">Zürich View</p>
                        </div>
                      </div>
                      <div className="button-section">
                        <div className="arrow-btn">
                          <i className="ri-arrow-right-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/assets/images/destination/destination-4.png" alt="travello" />
                  <div className="destination-content">
                    <div className="ratting-badge">
                      <i className="ri-star-s-fill" />
                      <span>4.5</span>
                    </div>
                    <div className="destination-info">
                      <div className="destination-name">
                        <p className="pera">Australia</p>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <p className="name">Melbourne View</p>
                        </div>
                      </div>
                      <div className="button-section">
                        <div className="arrow-btn">
                          <i className="ri-arrow-right-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/assets/images/destination/destination-5.png" alt="travello" />
                  <div className="destination-content">
                    <div className="ratting-badge">
                      <i className="ri-star-s-fill" />
                      <span>4.5</span>
                    </div>
                    <div className="destination-info">
                      <div className="destination-name">
                        <p className="pera">Canada</p>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <p className="name">Toronto View</p>
                        </div>
                      </div>
                      <div className="button-section">
                        <div className="arrow-btn">
                          <i className="ri-arrow-right-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src="/src/assets/images/icon/shape.png" alt="travello" />
      </div>
    </section>
    <section className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="border-section-title">
              <h4 className="title">We’ve been mentioned in Below Brands</h4>
            </div>
            <div className="swiper brandSwiper-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-1.jpeg" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-2.jpg" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-3.jpg" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-4.png" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-5.png" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-1.jpeg" alt="travello" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/brand/brand-2.jpg" alt="travello" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="package-area section-padding2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights">Popular Packages</span>
              <h4 className="title">
                Most Favorite Tour Place in The World
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-pills package-pills" id="pills-tab" role="tablist">
              <li className="nav-item package-item" role="presentation">
                <button className="nav-link package-nav active" id="pills-london-tab" data-bs-toggle="pill" data-bs-target="#pills-london" role="tab" aria-controls="pills-london" aria-selected="true">
                  London
                </button>
              </li>
              <li className="nav-item package-item" role="presentation">
                <button className="nav-link package-nav" id="pills-bangkok-tab" data-bs-toggle="pill" data-bs-target="#pills-bangkok" role="tab" aria-controls="pills-bangkok" aria-selected="false">
                  Bangkok
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link package-nav" id="pills-hongkong-tab" data-bs-toggle="pill" data-bs-target="#pills-hongkong" role="tab" aria-controls="pills-hongkong" aria-selected="false">
                  Hong Kong
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link package-nav" id="pills-manchester-tab" data-bs-toggle="pill" data-bs-target="#pills-manchester" role="tab" aria-controls="pills-manchester" aria-selected="false">
                  Manchester
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link package-nav" id="pills-dubai-tab" data-bs-toggle="pill" data-bs-target="#pills-dubai" role="tab" aria-controls="pills-dubai" aria-selected="false">
                  Dubai
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-london" role="tabpanel" aria-labelledby="pills-london-tab">
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-4.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-3.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-2.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-10.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-bangkok" role="tabpanel" aria-labelledby="pills-bangkok-tab">
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-5.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-6.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-7.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-8.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-hongkong" role="tabpanel" aria-labelledby="pills-hongkong-tab">
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-9.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-10.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-11.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-12.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-manchester" role="tabpanel" aria-labelledby="pills-manchester-tab">
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-13.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-14.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-15.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-16.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-dubai" role="tabpanel" aria-labelledby="pills-dubai-tab">
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-17.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-18.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-19.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="package-card h-calc">
                      <div className="package-img imgEffect4">
                        <a href="tour-details.html">
                          <img src="/src/assets/images/package/package-20.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Featured</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Days 2 Night</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Person</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-button d-inline-block">
              <a href="tour-list.html">
                <div className="btn-primary-icon-sm">
                  <p className="pera">View All Tour</p>
                  <i className="ri-arrow-right-up-line" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonial-area bottom-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights">Testimonial</span>
              <h4 className="title">
                What People Have Said About Our Service
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-24">
        <div className="swiper bulletLeftSwiper-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper bulletRightSwiper-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src="/src/assets/images/testimonial/testimonial-1.jpeg" alt="travello" />
                </div>
                <div className="user-info">
                  <p className="name">David Malan</p>
                  <p className="designation">Traveler</p>
                </div>
              </div>
              <div className="testimonial-body">
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Et amet nulla in
                  adipiscing. Donec tincidunt dui vel adipiscing sit turpis
                  neque at cursus. Dignissim scelerisque mattis ultricies
                  vitae.
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">Jan 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-button d-inline-block">
              <a href="javascript:void(0)">
                <div className="btn-primary-icon-sm">
                  <p className="pera">All Customers Say</p>
                  <i className="ri-arrow-right-up-line" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pricing-area bottom-padding section-bg-before-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-605 mx-auto position-relative">
              <span className="highlights-primary">Package Pricing Plan</span>
              <h4 className=" title">
                Simply Choose The Pricing Plan That Fits You Best
              </h4>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.0s">
                <div className="price-header">
                  <div className="d-flex gap-7 mb-2">
                    <h4 className="title">Basic</h4>
                    <div className="price-badge d-none">popular</div>
                  </div>
                  <p className="pera">Best for personal and basic needs</p>
                </div>
                <div className="price-tag-section">
                  <div className="price-tag">
                    <h4 className="title">$10</h4>
                    <p className="pera">One-time payment</p>
                  </div>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">20+ Partners</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Mass Messaging</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor sit amet</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Online booking engine</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Business Card Scanner</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Try Now</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Per month +2% per online Booking</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.1s">
                <div className="price-header">
                  <div className="d-flex gap-7 mb-2">
                    <h4 className="title">Pro</h4>
                    <div className="price-badge">popular</div>
                  </div>
                  <p className="pera">Best for personal and basic needs</p>
                </div>
                <div className="price-tag-section">
                  <div className="price-tag">
                    <h4 className="title">$77</h4>
                    <p className="pera">One-time payment</p>
                  </div>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">20+ Partners</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Mass Messaging</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor sit amet</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Online booking engine</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Business Card Scanner</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Try Now</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Per month +1.9% per online Booking</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.2s">
                <div className="price-header">
                  <div className="d-flex gap-7 mb-2">
                    <h4 className="title">Custom</h4>
                    <div className="price-badge d-none">popular</div>
                  </div>
                  <p className="pera">Best for personal and basic needs</p>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Mass Messaging</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor sit amet</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Unlimited Everything</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem ipsum dolor</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Online booking engine</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Business Card Scanner</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Contact</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Please contact anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="news-area bottom-padding position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-605 mx-auto position-relative mb-60">
              <span className="highlights">News &amp; Article</span>
              <h4 className="title">
                Latest News &amp; Articles From The Blog Posts
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-7 col-lg-7">
            <div className="tab-content" id="v-pills-tabContent-two">
              <div className="tab-pane fade show active" id="pills-news-one" role="tabpanel" aria-labelledby="pills-news-one">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/news/news-banner.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-news-two" role="tabpanel" aria-labelledby="pills-news-two">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/news/banner-1.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-news-three" role="tabpanel" aria-labelledby="pills-news-three">
                <div className="about-banner imgEffect4">
                  <img src="/src/assets/images/news/banner-2.png" alt="travello" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="all-contents" id="v-pills-tab-two" role="tablist" aria-orientation="vertical">
              <div className="news-content active" id="pills-news-one-tab" data-bs-toggle="pill" data-bs-target="#pills-news-one" role="tab" aria-controls="pills-news-one" aria-selected="true">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title">
                  <a href="javascript:void(0)">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="author-img">
                      <img src="/src/assets/images/news/news-1.jpeg" alt="travello" />
                    </div>
                    <p className="name">Crish Jorden</p>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
              <div className="news-content" id="pills-news-two-tab" data-bs-toggle="pill" data-bs-target="#pills-news-two" role="tab" aria-controls="pills-news-two" aria-selected="true">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title">
                  <a href="javascript:void(0)">A Good Traveler Has no Fixed Plans and is Not Intent on
                    Arriving.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="author-img">
                      <img src="/src/assets/images/news/news-2.jpeg" alt="travello" />
                    </div>
                    <p className="name">David Warner</p>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
              <div className="news-content" id="pills-news-three-tab" data-bs-toggle="pill" data-bs-target="#pills-news-three" role="tab" aria-controls="pills-news-three" aria-selected="true">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title">
                  <a href="javascript:void(0)">We Travel, Some of us Forever, to Seek Other States,
                    Other Lives, Other Souls.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="author-img">
                      <img src="/src/assets/images/news/news-3.jpeg" alt="travello" />
                    </div>
                    <p className="name">David Malan</p>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="section-button d-inline-block">
                <a href="news.html">
                  <div className="btn-primary-icon-sm">
                    <p className="pera">View All News</p>
                    <i className="ri-arrow-right-up-line" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-news">
        <img src="/src/assets/images/icon/bg-shape-3.png" alt="travello" />
      </div>
    </section>
    <section className="platform-area platform-area-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="app-section-padding">
              <div className="hero-caption-one position-relative">
                <span className="highlight">Our Platform</span>
                <h4 className="title">
                  Enjoy And Book This App All Over The World
                </h4>
                <p className="pera">
                  Lorem ipsum dolor sit amet consectetur. Curabitur volutpat
                  tellus id vulputate viverra. Sapien non mauris risus
                </p>
              </div>
              <div className="hero-footer position-relative">
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".2s">
                  <div className="video-player">
                    <i className="ri-play-fill" />
                  </div>
                </a>
                <a href="javascript:void(0)" className="pera position-relative">Download Our Apps</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero-banner d-none d-lg-block wow fadeInUp" data-wow-delay="0.2s">
              <img src="/src/assets/images/gallery/promotion.png" alt="travello" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>


   <footer>
  <div className="footer-wrapper footer-bg">
    <div className="container">
      <div className="footer-area">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="title">Company</h4>
                <ul className="listing">
                  <li className="single-lsit">
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="single-lsit">
                    <a href="news.html">News</a>
                  </li>
                  <li className="single-lsit"><a href="faq.html">Faq</a></li>
                  <li className="single-lsit">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="title">Explore</h4>
                <ul className="listing">
                  <li className="single-lsit"><a href="faq.html">Faq</a></li>
                  <li className="single-lsit">
                    <a href="tour-list.html">Tour Listings</a>
                  </li>
                  <li className="single-lsit">
                    <a href="destination.html">Destination</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="title">Quick Links</h4>
                <ul className="listing">
                  <li className="single-lsit"><a href="index.html">Home</a></li>
                  <li className="single-lsit">
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="single-lsit">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="single-footer-caption">
              <div className="footer-tittle">
                <h4 className="title">Contact</h4>
                <ul className="listing">
                  <li className="single-lsit">
                    <a href="#" className="mb-20 d-block">70/A Floor Divo Tower Melbourne,
                      Australia</a>
                  </li>
                  <li className="single-lsit">
                    <a href="#">
                      <div className="d-flex gap-12">
                        <i className="ri-phone-line" /> (00) +888 123456 789
                      </div>
                    </a>
                  </li>
                  <li className="single-lsit">
                    <a href="#">
                      <div className="d-flex gap-12">
                        <i className="ri-mail-line" /> example@gmail.com
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle-area">
        <div className="footer-body">
          <div className="footer-content">
            <div className="d-flex flex-column gap-20">
              <div className="logo">
                <img src="/src//src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
              </div>
              <p className="pera">
                Travel is a transformative and enriching experience that
                allows individuals to explore new destinations, cultures,
                and landscapes.
              </p>
            </div>
            <div className="footer-right">
              <h4 className="title">Subscribe Our Newsletter</h4>
              <div className="subscribe-wraper">
                <input className="footer-search" type="search" name="footer" placeholder="Enter Your Email" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="listing">
            <li className="single-list">
              <a href="terms-condition.html" className="single">Terms of usa</a>
            </li>
            <li className="single-list">
              <a href="privacy-policy.html" className="single">Privacy and Cookies Statement</a>
            </li>
            <li className="single-list">
              <a href="contact.html" className="single">How the site works</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between gap-14 flex-wrap">
              <p className="pera">
                © <span className="current-year">2023</span> initTheme. All rights
                reserved
              </p>
              <p className="pera">Powered by @Travello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div>
  <div className="progressParent" id="back-top">
    <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <div className="search-overlay" />
</div>


    </>
  )
}

export default HomePage