import React from 'react'

type Props = {}

const New = (props: Props) => {
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
                            <a href="javascript:void(0)" className="single">Home <i/></a>
                          </li>
                          <li className="single-list ">
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
                            <a href="news.html" className="single link-active">News</a>
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
        <h1 className="title wow fadeInUp" data-wow-delay="0.0s">News</h1>
        <div className="breadcrumb-text">
          <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
            <ul className="breadcrumb listing">
              <li className="breadcrumb-item single-list"><a href="index.html" className="single">Home</a></li>
              <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">News</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    {/*/ End-of Breadcrumbs*/}
    {/* About Us area S t a r t */}
    <section className="news-area section-padding2">
      <div className="container">
        <div className="row g-4 mb-60">
          <div className="col-xl-7 col-lg-7">
            <div className="tab-content" id="v-pills-tabContent-two">
              <div className="tab-pane  fade show active" id="pills-news-one" role="tabpanel" aria-labelledby="pills-news-one">
                <div className="about-banner imgEffect4">
                  <img src="/src/images/news/news-banner.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-news-two" role="tabpanel" aria-labelledby="pills-news-two">
                <div className="about-banner imgEffect4">
                  <img src="/src/images/news/banner-1.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-news-three" role="tabpanel" aria-labelledby="pills-news-three">
                <div className="about-banner imgEffect4">
                  <img src="/src/images/news/banner-2.png" alt="travello" />
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
                      <img src="/src/images/news/news-1.jpeg" alt="travello" />
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
                      <img src="/src/images/news/news-2.jpeg" alt="travello" />
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
                      <img src="/src/images/news/news-3.jpeg" alt="travello" />
                    </div>
                    <p className="name">David Malan</p>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-4.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-5.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-6.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-7.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-8.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-9.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-10.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-11.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html">
                  <img src="/src/images/news/news-12.png" alt="travello" />
                </a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Tour Guide</span>
                </div>
                <h4 className="title line-clamp-2">
                  <a href="news-details.html">The World is a Book and Those Who do not Travel Read
                    Only
                    One Page.</a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="image" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="image" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 min read</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 text-center">
            <div className="section-button d-inline-block">
              <a href="javascript:void(0)">
                <div className="btn-primary-icon-sm">
                  <i className="ri-loader-2-line" />
                  <p className="pera">Loading</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of About US*/}
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

export default New
