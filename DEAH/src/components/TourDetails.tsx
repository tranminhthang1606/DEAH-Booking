import React from 'react'

const TourDetails = () => {
  return (
    <div>
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
                            <a href="about.html" className="single">About</a>
                          </li>
                          <li className="single-list">
                            <a href="destination.html" className="single">Destination</a>
                          </li>
                          <li className="single-list">
                            <a href="tour-list.html" className="single link-active">Tour
                              Package</a>
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
                        <img src="/src/images/gallery/search-img-1.jpeg" alt="travello" />
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
                        <img src="/src/images/gallery/search-img-2.jpeg" alt="travello" />
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
                        <img src="/src/images/gallery/search-img-3.jpeg" alt="travello" />
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
                        <img src="/src/images/gallery/search-img-1.jpeg" alt="travello" />
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
                        <img src="/src/images/gallery/search-img-2.jpeg" alt="travello" />
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
                        <img src="/src/images/gallery/search-img-3.jpeg" alt="travello" />
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
    {/* Breadcrumbs S t a r t */}
    <section className="breadcrumbs-area breadcrumb-bg">
      <div className="container">
        <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Tour Details</h1>
        <div className="breadcrumb-text">
          <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
            <ul className="breadcrumb listing">
              <li className="breadcrumb-item single-list"><a href="index.html" className="single">Home</a></li>
              <li className="breadcrumb-item single-list" aria-current="page">
                <a href="javascript:void(0)" className="single active">Tour Details</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    {/*/ End-of Breadcrumbs*/}
    {/* Destination area S t a r t */}
    <section className="tour-details-section section-padding2">
      <div className="tour-details-area">
        {/* Details Banner Slider */}
        <div className="tour-details-banner">
          <div className="swiper tourSwiper-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner-three.png" alt="travello" />
              </div>
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner.png" alt="travello" />
              </div>
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner-two.png" alt="travello" />
              </div>
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner-three.png" alt="travello" />
              </div>
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner.png" alt="travello" />
              </div>
              <div className="swiper-slide">
                <img src="/src/images/gallery/tour-details-banner-two.png" alt="travello" />
              </div>
            </div>
            <div className="swiper-button-next"><i className="ri-arrow-right-s-line" /></div>
            <div className="swiper-button-prev"><i className="ri-arrow-left-s-line" /></div>
          </div>
        </div>
        {/* / Slider*/}
        <div className="tour-details-container">
          <div className="container">
            {/* Details Heading */}
            <div className="details-heading">
              <div className="d-flex flex-column">
                <h4 className="title">Travello Tour - Best of Samyan Bangkok</h4>
                <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
                  <div className="location">
                    <i className="ri-map-pin-line" />
                    <div className="name">Bangkok, Thailand</div>
                  </div>
                  <div className="divider" />
                  <div className="d-flex align-items-center flex-wrap gap-20">
                    <div className="count">
                      <i className="ri-time-line" />
                      <p className="pera">3 Days 2 Night</p>
                    </div>
                    <div className="count">
                      <i className="ri-user-line" />
                      <p className="pera">2 Person</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-review">
                <div className="d-flex gap-10 align-items-end">
                  <p className="light-pera">From</p>
                  <p className="pera">$95</p>
                </div>
                <div className="rating">
                  <i className="ri-star-s-fill" />
                  <p className="pera">4.7 (20 Reviews)</p>
                </div>
              </div>
            </div>
            {/* / Details Heading */}
            <div className="mt-30">
              <div className="row g-4">
                {/* Left content */}
                <div className="col-xl-8 col-lg-7">
                  {/* About tour */}
                  <div className="tour-details-content">
                    <h4 className="title">About</h4>
                    <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                      incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco
                      laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit
                      esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in
                      culpa
                      qui officia deserunt mollit anim id est laborum."</p>
                    <p className="pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium
                      doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                      et quasi architecto
                      beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut
                      fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro
                      quisquam est,
                      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                      non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam,
                      quis
                      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                      ex ea commodi
                      consequatur?
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                      nihil molestiae
                      consequatur,
                      vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                  </div>
                  {/* / About tour */}
                  {/* Tour Include Exclude */}
                  <div className="tour-include-exclude radius-6">
                    <div className="includ-exclude-point">
                      <h4 className="title">Included</h4>
                      <ul className="expect-list">
                        <li className="list">Welcome Breakfast</li>
                        <li className="list">All Entry Tickets of Hopping Destinations</li>
                        <li className="list">Lunch Platter</li>
                        <li className="list">Evening Snacks</li>
                        <li className="list">First Aid Kit (In case of emergency)</li>
                      </ul>
                    </div>
                    <div className="divider" />
                    <div className="includ-exclude-point">
                      <h4 className="title">Exclude</h4>
                      <ul className="expect-list">
                        <li className="list">Personal expenses</li>
                        <li className="list">Anything else that isn't mentioned on Inclusions</li>
                        <li className="list">Additional Service</li>
                      </ul>
                    </div>
                  </div>
                  {/* / Tour Include Exclude */}
                  {/* Tour Plan accordion*/}
                  <div className="tour-details-content mb-30">
                    <h4 className="title">Tour Plan</h4>
                    <div className="destination-accordion">
                      <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                              Day 1 - Samyan Bangkok
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                              <p className="pera mb-16">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum."</p>
                              <ul className="listing">
                                <li className="list">
                                  “Life is either a daring adventure or nothing at
                                  all.” ...
                                </li>
                                <li className="list">
                                  “Travel far enough, you meet yourself.” ...
                                </li>
                                <li className="list">
                                  “Wherever you go becomes a part of you somehow.” ...
                                </li>
                                <li className="list">
                                  “Once a year, go someplace you've never been
                                  before.”
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                              Day 2 - Samyan Bangkok
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                              <p className="pera mb-16">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum."</p>
                              <ul className="listing">
                                <li className="list">
                                  “Life is either a daring adventure or nothing at
                                  all.” ...
                                </li>
                                <li className="list">
                                  “Travel far enough, you meet yourself.” ...
                                </li>
                                <li className="list">
                                  “Wherever you go becomes a part of you somehow.” ...
                                </li>
                                <li className="list">
                                  “Once a year, go someplace you've never been
                                  before.”
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                              Day 3 - Samyan Bangkok
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                              <p className="pera mb-16">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum."</p>
                              <ul className="listing">
                                <li className="list">
                                  “Life is either a daring adventure or nothing at
                                  all.” ...
                                </li>
                                <li className="list">
                                  “Travel far enough, you meet yourself.” ...
                                </li>
                                <li className="list">
                                  “Wherever you go becomes a part of you somehow.” ...
                                </li>
                                <li className="list">
                                  “Once a year, go someplace you've never been
                                  before.”
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* / Tour Plan accordion*/}
                  {/* Tour Privacy Policy */}
                  <div className="tour-details-content">
                    <h4 className="title">Policy</h4>
                    <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor
                      incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco
                      laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit
                      esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in
                      culpa
                      qui officia deserunt mollit anim id est laborum."</p>
                    <p className="pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium
                      doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                      et quasi architecto
                      beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut
                      fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro
                      quisquam est,
                      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                      non numquam eius modi
                      tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam,
                      quis
                      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                      ex ea commodi
                      consequatur?
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                      nihil molestiae
                      consequatur,
                      vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <ol className="policy-point">
                      <li className="list">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, consectetur,
                        adipisci velit.</li>
                      <li className="list">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.</li>
                      <li className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.</li>
                    </ol>
                  </div>
                  {/* / Tour Privacy Policy */}
                </div>
                {/* Right content */}
                <div className="col-xl-4 col-lg-5">
                  <div className="date-travel-card position-sticky top-0">
                    <div className="price-review">
                      <div className="d-flex gap-10 align-items-end">
                        <p className="light-pera">From</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <p className="pera">Price varies by group size</p>
                      </div>
                    </div>
                    <h4 className="heading-card">Select Date and Travelers</h4>
                    <div className="date-time-dropdown">
                      <i className="ri-time-line" />
                      <p className="date-time-result">Wednesday, Jan 17, 2023</p>
                    </div>
                    <div className="dropdown-section position-relative user-picker-dropdown">
                      <div className="d-flex gap-12 align-items-center">
                        <i className="dropdown-icon ri-user-line" />
                        <div className="custom-dropdown">
                          <h4 className="title">Guests</h4>
                          <div className="arrow">
                            <i className="ri-arrow-down-s-line" />
                          </div>
                        </div>
                      </div>
                      <div className="user-result" />
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
                            <button className="qty-btn-plus ml-1" type="button">
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
                            <button className="qty-btn-plus ml-1" type="button">
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
                    <div className="mt-30">
                      <button type="submit" className="send-btn w-100">Check Availability</button>
                    </div>
                    <div className="footer bg-transparent">
                      <h4 className="title">Free Cancellation</h4>
                      <p className="pera">Up to 24 hours in advance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Destination */}
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
                  <img src="/src/images/logo/logo.png" alt="travello" className="changeLogo" />
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
  {/*/ End-of Footer */}
  {/* Scroll Up  */}
  <div className="progressParent" id="back-top">
    <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* Add an search-overlay element */}
  <div className="search-overlay" />
  {/* jquery*/}
  {/* Plugin */}
  {/* Main js*/}
</div>

    </div>
  )
}

export default TourDetails
