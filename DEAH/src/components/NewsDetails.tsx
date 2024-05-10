import React from 'react'

const NewsDetails = () => {
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
        <h1 className="title wow fadeInUp" data-wow-delay="0.0s">News Details</h1>
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
    {/* Destination area S t a r t */}
    <section className="destination-details-section section-padding2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            <div className="news-details-banner imgEffect">
              <img src="/src/images/destination/details.png" alt="travello" />
            </div>
            <div className="news-details-content">
              <div className="d-flex flex-wrap align-items-center gap-20">
                <div className="d-flex gap-10 align-items-center">
                  <div className="author-img">
                    <img src="/src/images/news/news-1.jpeg" alt="travello" />
                  </div>
                  <p className="name">Crish Jorden</p>
                </div>
                <div className="divider" />
                <div className="count">
                  <p className="pera">April 22, 2023</p>
                </div>
                <div className="divider" />
                <div className="count">
                  <p className="pera">10 min read</p>
                </div>
              </div>
              <h4 className="title">The World is a Book and Those Who do not Travel Read Only One Page.</h4>
              <p className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa
                qui officia deserunt mollit anim id est laborum."</p>
              <p className="pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className="news-details-info">
              <h4 className="title">What We Learned Form This Tour</h4>
              <ul className="expect-list">
                <li className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </li>
                <li className="list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor </li>
                <li className="list">Lorem ipsum dolor sit amet, consectetur</li>
              </ul>
            </div>
            <div className="news-details-quote">
              <h4 className="title">Travel makes one modest. You see what a tiny place you occupy in the
                world.</h4>
              <p className="pera">Gustav Flaubert</p>
            </div>
            <div className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia
              deserunt mollit anim id est laborum.</div>
            <div className="tag-social-section d-flex justify-content-between gap-16 flex-wrap">
              <div className="tag-section">
                <h4 className="title">Tags :</h4>
                <div className="tag-list">
                  <div className="tags">
                    <a href="javascript:void(0)" className="tag-btn">Travel</a>
                  </div>
                  <div className="tags">
                    <a href="javascript:void(0)" className="tag-btn">Design</a>
                  </div>
                  <div className="tags">
                    <a href="javascript:void(0)" className="tag-btn">Booking</a>
                  </div>
                  <div className="tags">
                    <a href="javascript:void(0)" className="tag-btn">Destination</a>
                  </div>
                </div>
              </div>
              <div className="social-section">
                <h4 className="title">Share :</h4>
                <div className="social-list">
                  <div className="tags">
                    <a href="javascript:void(0)" className="social-btn"><i className="ri-facebook-fill" /></a>
                  </div>
                  <div className="socials">
                    <a href="javascript:void(0)" className="social-btn"><i className="ri-twitter-fill" /></a>
                  </div>
                  <div className="socials">
                    <a href="javascript:void(0)" className="social-btn"><i className="ri-linkedin-fill" /></a>
                  </div>
                  <div className="socials">
                    <a href="javascript:void(0)" className="social-btn"><i className="ri-instagram-line" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-section">
              <div className="main-profile">
                <div className="user-img-lg">
                  <img src="/src/images/news/news-user-1.png" alt="travello" />
                </div>
                <div className="user-info">
                  <h4 className="name">Chris Jordan</h4>
                  <p className="desg">Technical Content Writer</p>
                  <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a tech
                    enthusiast, writer
                    by day, programmer by night, and always a foodie at heart!</p>
                </div>
              </div>
              <h4 className="comment-count">( 3 ) Comments</h4>
              <div className="main-profile-two">
                <div className="user-img-sm">
                  <img src="/src/images/news/news-user-2.png" alt="travello" />
                </div>
                <div className="user-info">
                  <h4 className="name-sm">David Warner</h4>
                  <p className="date">Jan 12, 2025</p>
                  <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a tech
                    enthusiast, writer
                    by day, programmer by night, and always a foodie at heart!</p>
                  <div className="reply-btn">
                    <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_359_781)">
                          <path d="M22.9994 23.9992C22.7342 23.9992 22.4798 23.8939 22.2923 23.7063C22.1048 23.5188 21.9994 23.2645 21.9994 22.9992C21.9978 21.4084 21.3652 19.8832 20.2403 18.7584C19.1154 17.6335 17.5902 17.0008 15.9994 16.9993H10.1694V18.5852C10.1693 18.9808 10.052 19.3673 9.83221 19.6962C9.61244 20.025 9.30012 20.2813 8.93472 20.4326C8.56932 20.5839 8.16725 20.6235 7.77934 20.5464C7.39144 20.4693 7.03511 20.2789 6.75541 19.9992L0.876406 14.1203C0.313993 13.5577 -0.00195313 12.7948 -0.00195312 11.9993C-0.00195313 11.2038 0.313993 10.4408 0.876406 9.87826L6.75541 3.99927C7.03511 3.71965 7.39144 3.52924 7.77934 3.4521C8.16725 3.37497 8.56932 3.41457 8.93472 3.56591C9.30012 3.71725 9.61244 3.97353 9.83221 4.30235C10.052 4.63117 10.1693 5.01777 10.1694 5.41327V6.99927H14.9994C17.3855 7.00191 19.6732 7.95097 21.3604 9.63822C23.0477 11.3255 23.9968 13.6131 23.9994 15.9993V22.9992C23.9994 23.2645 23.8941 23.5188 23.7065 23.7063C23.519 23.8939 23.2646 23.9992 22.9994 23.9992ZM8.16941 5.41327L2.29041 11.2923C2.10294 11.4798 1.99762 11.7341 1.99762 11.9993C1.99762 12.2644 2.10294 12.5187 2.29041 12.7063L8.16941 18.5852V15.9993C8.16941 15.734 8.27476 15.4797 8.4623 15.2921C8.64984 15.1046 8.90419 14.9993 9.16941 14.9993H15.9994C17.135 14.9989 18.2576 15.2408 19.2923 15.7088C20.3269 16.1768 21.2498 16.8602 21.9994 17.7133V15.9993C21.9973 14.1434 21.2591 12.3641 19.9468 11.0519C18.6345 9.73956 16.8553 9.00138 14.9994 8.99926H9.16941C8.90419 8.99926 8.64984 8.89391 8.4623 8.70637C8.27476 8.51883 8.16941 8.26448 8.16941 7.99926V5.41327Z" fill="#4B5051">
                          </path></g>
                        <defs>
                          <clipPath id="clip0_359_781">
                            <rect width={24} height={24} fill="white">
                            </rect></clipPath>
                        </defs>
                      </svg></a>
                  </div>
                </div>
              </div>
              <div className="replied-profile">
                <div className="main-profile-two">
                  <div className="user-img-sm">
                    <img src="/src/images/news/news-user-2.png" alt="travello" />
                  </div>
                  <div className="user-info">
                    <h4 className="name-sm">Jenney Bairstow</h4>
                    <p className="date">Jan 12, 2025</p>
                    <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a
                      tech enthusiast,
                      writer
                      by day, programmer by night, and always a foodie at heart!</p>
                    <div className="reply-btn">
                      <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <g opacity="0.5" clipPath="url(#clip0_359_791)">
                            <path d="M22.9994 23.9994C22.7342 23.9994 22.4798 23.894 22.2923 23.7065C22.1048 23.5189 21.9994 23.2646 21.9994 22.9994C21.9978 21.4086 21.3652 19.8834 20.2403 18.7585C19.1154 17.6336 17.5902 17.001 15.9994 16.9994H10.1694V18.5854C10.1693 18.9809 10.052 19.3675 9.83221 19.6963C9.61244 20.0251 9.30012 20.2814 8.93472 20.4327C8.56932 20.5841 8.16725 20.6237 7.77934 20.5465C7.39144 20.4694 7.03511 20.279 6.75541 19.9994L0.876406 14.1204C0.313993 13.5578 -0.00195313 12.7949 -0.00195312 11.9994C-0.00195313 11.2039 0.313993 10.441 0.876406 9.87838L6.75541 3.99939C7.03511 3.71977 7.39144 3.52936 7.77934 3.45223C8.16725 3.37509 8.56932 3.4147 8.93472 3.56604C9.30012 3.71738 9.61244 3.97365 9.83221 4.30247C10.052 4.63129 10.1693 5.01789 10.1694 5.41339V6.99939H14.9994C17.3855 7.00203 19.6732 7.95109 21.3604 9.63835C23.0477 11.3256 23.9968 13.6132 23.9994 15.9994V22.9994C23.9994 23.2646 23.8941 23.5189 23.7065 23.7065C23.519 23.894 23.2646 23.9994 22.9994 23.9994ZM8.16941 5.41339L2.29041 11.2924C2.10294 11.4799 1.99762 11.7342 1.99762 11.9994C1.99762 12.2645 2.10294 12.5189 2.29041 12.7064L8.16941 18.5854V15.9994C8.16941 15.7342 8.27476 15.4798 8.4623 15.2923C8.64984 15.1047 8.90419 14.9994 9.16941 14.9994H15.9994C17.135 14.999 18.2576 15.2409 19.2923 15.709C20.3269 16.177 21.2498 16.8603 21.9994 17.7134V15.9994C21.9973 14.1435 21.2591 12.3643 19.9468 11.052C18.6345 9.73968 16.8553 9.0015 14.9994 8.99938H9.16941C8.90419 8.99938 8.64984 8.89403 8.4623 8.70649C8.27476 8.51896 8.16941 8.2646 8.16941 7.99939V5.41339Z" fill="#4B5051">
                            </path></g>
                          <defs>
                            <clipPath>
                              <rect width={24} height={24} fill="white">
                              </rect></clipPath>
                          </defs>
                        </svg></a>
                    </div>
                  </div>
                </div>
                <div className="main-profile-two">
                  <div className="user-img-sm">
                    <img src="/src/images/news/news-user-3.png" alt="travello" />
                  </div>
                  <div className="user-info">
                    <h4 className="name-sm">Steven Smith</h4>
                    <p className="date">Jan 12, 2025</p>
                    <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a
                      tech enthusiast,
                      writer
                      by day, programmer by night, and always a foodie at heart!</p>
                    <div className="reply-btn">
                      <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <g opacity="0.5" clipPath="url(#clip0_359_791)">
                            <path d="M22.9994 23.9994C22.7342 23.9994 22.4798 23.894 22.2923 23.7065C22.1048 23.5189 21.9994 23.2646 21.9994 22.9994C21.9978 21.4086 21.3652 19.8834 20.2403 18.7585C19.1154 17.6336 17.5902 17.001 15.9994 16.9994H10.1694V18.5854C10.1693 18.9809 10.052 19.3675 9.83221 19.6963C9.61244 20.0251 9.30012 20.2814 8.93472 20.4327C8.56932 20.5841 8.16725 20.6237 7.77934 20.5465C7.39144 20.4694 7.03511 20.279 6.75541 19.9994L0.876406 14.1204C0.313993 13.5578 -0.00195313 12.7949 -0.00195312 11.9994C-0.00195313 11.2039 0.313993 10.441 0.876406 9.87838L6.75541 3.99939C7.03511 3.71977 7.39144 3.52936 7.77934 3.45223C8.16725 3.37509 8.56932 3.4147 8.93472 3.56604C9.30012 3.71738 9.61244 3.97365 9.83221 4.30247C10.052 4.63129 10.1693 5.01789 10.1694 5.41339V6.99939H14.9994C17.3855 7.00203 19.6732 7.95109 21.3604 9.63835C23.0477 11.3256 23.9968 13.6132 23.9994 15.9994V22.9994C23.9994 23.2646 23.8941 23.5189 23.7065 23.7065C23.519 23.894 23.2646 23.9994 22.9994 23.9994ZM8.16941 5.41339L2.29041 11.2924C2.10294 11.4799 1.99762 11.7342 1.99762 11.9994C1.99762 12.2645 2.10294 12.5189 2.29041 12.7064L8.16941 18.5854V15.9994C8.16941 15.7342 8.27476 15.4798 8.4623 15.2923C8.64984 15.1047 8.90419 14.9994 9.16941 14.9994H15.9994C17.135 14.999 18.2576 15.2409 19.2923 15.709C20.3269 16.177 21.2498 16.8603 21.9994 17.7134V15.9994C21.9973 14.1435 21.2591 12.3643 19.9468 11.052C18.6345 9.73968 16.8553 9.0015 14.9994 8.99938H9.16941C8.90419 8.99938 8.64984 8.89403 8.4623 8.70649C8.27476 8.51896 8.16941 8.2646 8.16941 7.99939V5.41339Z" fill="#4B5051">
                            </path></g>
                          <defs>
                            <clipPath>
                              <rect width={24} height={24} fill="white">
                              </rect></clipPath>
                          </defs>
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-card mt-40">
                <h4 className="contact-heading">Write Your Comment</h4>
                <form method="post" className="contact-form">
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <input className="custom-form" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="col-sm-6">
                      <input className="custom-form" type="text" placeholder="Enter your email" />
                    </div>
                    <div className="col-sm-6">
                      <input className="custom-form" type="text" placeholder="Your Phone" />
                    </div>
                    <div className="col-sm-6">
                      <input className="custom-form" type="text" placeholder="Select subject" />
                    </div>
                    <div className="col-sm-12">
                      <textarea className="custom-form-textarea" id="exampleFormControlTextarea1" rows={3} placeholder="Enter your message..." defaultValue={""} />
                    </div>
                  </div>
                  <div className="mt-40">
                    <button type="submit" className="send-btn">Post Comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="row g-4 position-sticky top-0">
              <div className="col-lg-12">
                <div className="search-filter-section">
                  <div className="heading">
                    <h4 className="title">Search Here</h4>
                  </div>
                  <div className="news-detals-search">
                    <input type="search" className="search-input" placeholder="Search" />
                    <div className="icon">
                      <i className="ri-search-line" />
                    </div>
                  </div>
                  <div className="heading">
                    <h4 className="title">Recent News</h4>
                  </div>
                  <ul className="recent-news-list">
                    <li className="list">
                      <h4 className="title line-clamp-2"><a href="news-details.html">The World is a
                          Book and Those Who do
                          not Travel...</a></h4>
                      <div className="d-flex justify-content-between flex-wrap gap-8">
                        <div className="d-flex align-items-center gap-8">
                          <i className="ri-time-line" />
                          <p className="date">Jan 23, 2025</p>
                        </div>
                        <p className="time">10 min read</p>
                      </div>
                    </li>
                    <li className="list">
                      <h4 className="title line-clamp-2"><a href="news-details.html">Quest Quotient:
                          Your Ultimate
                          [City/Region]...</a></h4>
                      <div className="d-flex justify-content-between flex-wrap gap-8">
                        <div className="d-flex align-items-center gap-8">
                          <i className="ri-time-line" />
                          <p className="date">Jan 23, 2025</p>
                        </div>
                        <p className="time">10 min read</p>
                      </div>
                    </li>
                    <li className="list">
                      <h4 className="title line-clamp-2"><a href="news-details.html">We Travel, Some
                          of us Forever, to Seek
                          Other.</a></h4>
                      <div className="d-flex justify-content-between flex-wrap gap-8">
                        <div className="d-flex align-items-center gap-8">
                          <i className="ri-time-line" />
                          <p className="date">Jan 23, 2025</p>
                        </div>
                        <p className="time">10 min read</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="destination-offer-three">
                  <div className="destination-content-offer">
                    <span className="highlights">20% off</span>
                    <h4 className="title">The Best Travel Adventure</h4>
                    <a href="payment.html" className="btn-secondary-sm radius-30">Booking Now</a>
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

export default NewsDetails
