import React, { useEffect } from 'react'
import "../assets/js/main.js"
const About = () => {
    useEffect(() => {
        const setTheme = (theme?: string) => {
            theme ??= localStorage.theme || "light";
            document.documentElement.dataset.theme = theme;
            localStorage.theme = theme;
        };
        setTheme();
    }, []);
  return (
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
                            <a href="javascript:void(0)" className="single">Home <i className="ri-arrow-down-s-line" /></a>
                            <ul className="submenu">
                              <li className="single-list">
                                <a href="index.html" className="single">Home 01</a>
                              </li>
                              <li className="single-list">
                                <a href="index-two.html" className="single">Home 02</a>
                              </li>
                              <li className="single-list">
                                <a href="index-three.html" className="single">Home 03</a>
                              </li>
                            </ul>
                          </li>
                          <li className="single-list ">
                            <a href="about.html" className="single link-active">About</a>
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
  <section className="breadcrumbs-area breadcrumb-bg">
  <div className="container">
    <h1 className="title wow fadeInUp" data-wow-delay="0.0s">About Us</h1>
    <div className="breadcrumb-text">
      <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
        <ul className="breadcrumb listing">
          <li className="breadcrumb-item single-list"><a href="index.html" className="single">Home</a></li>
          <li className="breadcrumb-item single-list" aria-current="page">
            <a href="javascript:void(0)" className="single active">About Us</a></li>
        </ul>
      </nav>
    </div>
  </div>
</section>

    {/*/ End-of Breadcrumbs*/}
    {/* About Us area S t a r t */}
    <section className="about-area">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title mx-430 mb-30 w-md-100">
              <span className="highlights fancy-font font-400">About Us</span>
              <h4 className="title">
                Get The Best Travel Experience With Travello
              </h4>
              <p className="pera">
                Travel is a transformative and enriching experience that
                allows individuals to explore new destinations, cultures, and
                landscapes. It is a fundamental human activity that has been
                practiced for centuries and continues to be a source of joy,
                learning, and personal growth.
              </p>
              <p className="pera">
                Travel is a transformative and enriching experience that
                allows individuals to explore new destinations, cultures.
              </p>
              <div className="section-button mt-27 d-inline-block">
                <a href="about.html" className="btn-primary-icon-sm radius-20">
                  <p className="pera mt-0">Learn More</p>
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
              <div className="about-imp-link mt-40">
                <div className="icon">
                  <i className="ri-user-line" />
                </div>
                <div className="content">
                  <p className="pera font-16">
                    <span className="font-700">2,500</span> People Booked Tomorrow
                    Land Event in the Last 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about-count-section about-count-before-bg">
              <div className="banner">
                <img src="/src/assets/images/gallery/about-banner-three.png" alt="travello" />
              </div>
              <div className="all-count-list">
                <div className="details">
                  <h4 className="count">150k</h4>
                  <p className="pera">Happy Traveler</p>
                </div>
                <div className="divider" />
                <div className="details">
                  <h4 className="count">95.7%</h4>
                  <p className="pera">Satisfaction Rate</p>
                </div>
                <div className="divider" />
                <div className="details">
                  <h4 className="count">5000+</h4>
                  <p className="pera">Tour Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of About US*/}
    {/* Pricing S t a r t */}
    <section className="pricing-area pb-0 section-bg-before-two">
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
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.0s">
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
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.0s">
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
    {/*/ End of Pricing */}
    {/* Brand S t a r t */}
    <section className="brand-area">
      <div className="container">
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
    </section>
    {/*/ End of Brand */}
    {/* Testimonial S t a r t */}
    <section className="testimonial-area section-padding">
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
    {/*/ End of Testimonial */}
    {/* Special area S t a r t */}
    <section className="special-area bottom-padding1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">special offers</span>
              <h4 className="title">
                Winter Our Big Offers to Inspire You
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offercard-1.jpg" alt="travello" />
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
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offercard-2.jpg" alt="travello" />
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
    </section>
    {/*/ End-of special*/}
  </main>
  {/* Footer S t a r t */}
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
                  <img src="/src/assets/images/logo/logo.png" alt="travello" className="changeLogo" />
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
      {/* footer-bottom area */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
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
  {'{'}/* {/*/ End-of Footer */}
  {/* Scroll Up  */} */{'}'}
  <div className="progressParent" id="back-top">
    <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {'{'}/* {/* Add an search-overlay element */} */{'}'}
  <div className="search-overlay" />
  {'{'}/* {/* jquery*/} */{'}'}
</div>

  )
}

export default About
