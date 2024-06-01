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
                              <span className="pera">Điểm đến, thu hút</span>
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
                              <p className="pera">Email bất cứ lúc nào </p>
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
                              <p className="pera"> Gọi bất cứ lúc nào </p>
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
                                  <a href="javascript:void(0)" className="single">Trang chủ <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    <li className="single-list">
                                      <a href="index.html" className="single">Trang chủ 01</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="index-two.html" className="single">Trang chủ 02</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="index-three.html" className="single">Trang chủ 03</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="single-list ">
                                  <a href="about.html" className="single">về</a>
                                </li>
                                <li className="single-list">
                                  <a href="destination.html" className="single">Điểm đến</a>
                                </li>
                                <li className="single-list">
                                  <a href="tour-list.html" className="single link-active">Chuyến du lịch
                                    Gói </a>
                                </li>
                                <li className="single-list">
                                  <a href="javascript:void(0)" className="single">Trang <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    <li className="single-list">
                                      <a href="tour-details.html" className="single">Chuyến du lịch
                                        Chi tiết </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="news-details.html" className="single"> Tin tức
                                        Chi tiết </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="destination-details.html" className="single">Chi tiết điểm đến</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="payment.html" className="single">sự chi trả</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="javascript:void(0)" className="single">Đăng nhập<i className="ri-arrow-right-s-line" /></a>
                                      <ul className="submenu">
                                        <li className="single-list">
                                          <a href="login.html" className="single">Đăng nhập</a>
                                        </li>
                                        <li className="single-list">
                                          <a href="register.html" className="single">Sự đăng ký</a>
                                        </li>
                                        <li className="single-list">
                                          <a href="forgot-pass.html" className="single">Quên
                                            Mật khẩu </a>
                                        </li>
                                        <li className="single-list">
                                          <a href="verification.html" className="single">Xác minh </a>
                                        </li>
                                        <li className="single-list">
                                          <a href="new-password.html" className="single">Mới
                                            Mật khẩu </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="single-list">
                                      <a href="faq.html" className="single">Câu hỏi thường gặp</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="privacy-policy.html" className="single"> Quyền riêng tư
                                        Chính sách </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="terms-condition.html" className="single">Điều khoản-Điều kiện</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="single-list">
                                  <a href="news.html" className="single">Tin tức</a>
                                </li>
                                <li className="single-list">
                                  <a href="contact.html" className="single">Liên hệ</a>
                                </li>
                                <li className="d-block d-lg-none">
                                  <div className="header-right pl-15">
                                    <div className="d-flex align-items-center gap-12">
                                      <div className="lang">
                                        <i className="ri-global-line" />
                                      </div>
                                      <div className="divider gradient-divider" />
                                      <div className="money">
                                        <p className="pera">VND</p>
                                      </div>
                                    </div>
                                    <div className="sign-btn">
                                      <a href="login.html" className="btn-secondary-sm">Đăng nhập</a>

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
                                    <p className="pera">VND</p>
                                  </div>
                                </div>
                                <div className="sign-btn">
                                  <a href="login.html" className="btn-secondary-sm">Đăng nhập</a>
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
                    <kbd className="light-text"> THOÁT </kbd>
                  </button>
                </div>
              </div>
              <div className="body-section">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="listing">
                      <li>
                        <h4 className="search-label">Gần đây</h4>
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
                        <h4 className="search-label">Gần đây</h4>
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
                      <h4 className="title">Tùy chọn lọc</h4>
                      {/* List of Filter */}
                      <ul className="listing">
                        <li>
                          <h4 className="search-label">Loại thư</h4>
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
                              <p className="pera">Liên kết (44)</p>
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
                              <p className="pera">Blog (23)</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* List of Filter */}
                      <ul className="listing">
                        <li>
                          <h4 className="search-label">Thể loại</h4>
                        </li>
                        <li className="single-list">
                          <div className="d-flex align-items-center gap-8">
                            <label className="checkbox-label">
                              <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                              <span className="checkmark-style" />
                            </label>
                            <div className="content">
                              <p className="pera">Bài viết (3)</p>
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
                              <p className="pera">Thăm dò ý kiến (3)</p>
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
                              <p className="pera">Bài báo (44)</p>
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
                              <p className="pera">Blog (23)</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* List of Filter */}
                      <ul className="listing">
                        <li>
                          <h4 className="search-label">Du lịch</h4>
                        </li>
                        <li className="single-list">
                          <div className="d-flex align-items-center gap-8">
                            <label className="checkbox-label">
                              <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                              <span className="checkmark-style" />
                            </label>
                            <div className="content">
                              <p className="pera">Bài viết (3)</p>
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
                              <p className="pera">Thăm dò ý kiến (3)</p>
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
                              <p className="pera">Bài báo (44)</p>
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
                              <p className="pera">Blog (23)</p>
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
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Chi tiết tour du lịch</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index.html" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page">
                      <a href="javascript:void(0)" className="single active">Chi tiết tour du lịch</a>
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
                      <h4 className="title">Travello Tour - Best Of Samyan Bangkok</h4>
                      <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="divider" />
                        <div className="d-flex align-items-center flex-wrap gap-20">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera"> 3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price-review">
                      <div className="d-flex gap-10 align-items-end">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
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
                          <h4 className="title">Về</h4>
                          <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng làm
                            inique
                            sự cố
                            để làm việc hoặc đau đớn.Làm thế nào để bạn làm một sự tha thứ kỳ lạ, người đã
                            Tập thể dục Ullamco
                            thuê người làm
                            Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Bài tập về nhà tự động trong một irre
                            bị chỉ trích trong niềm vui xin vui lòng
                            được
                            Cura Pain Football không chạy nữa.Ngoại trừ là người da đen
                            Không ủng hộ
                            lỗi
                            Các dịch vụ đó từ bỏ việc làm mềm là một món ăn nhẹ. "</p>
                          <p className="pera">Nhưng tôi phải gặp phải sai lầm rằng mọi người đều là một niềm vui
                            Công tố viên
                            nỗi đau
                            Ca ngợi, toàn bộ điều cần mở, và những điều từ người phát minh ra sự thật đó
                            Và là một kiến ​​trúc sư
                            Hạnh phúc
                            Cuộc sống đã được nói để giải thích.Không ai là niềm vui của niềm vui
                            từ chối hoặc ghét hoặc
                            chạy trốn,
                            Nhưng bởi vì họ dẫn đến những nỗi đau lớn, những người có niềm vui để theo dõi
                            không biết.Hoặc hơn nữa
                            bất cứ ai;
                            Chính nỗi đau vì cà rốt, cà chua muốn, nhưng bởi vì
                            Tôi chưa bao giờ có chế độ của nó
                            Thời gian sự cố để làm việc và đau đớn để tìm kiếm một số niềm vui.ĐẾN
                            Đối với người nhỏ bé tôi sẽ đến
                            Ai
                            Việc đào tạo của chúng tôi là một sự nhạy cảm về thể chất của một sự dữ dội trừ khi họ làm điều gì đó
                            của lợi thế
                            hậu quả?
                            Một hoặc quyền của cô ấy để chỉ trích niềm vui là nhiều hơn
                            Không khó chịu
                            Hậu quả
                            Hay đó là nỗi đau của anh ta để chạy trốn mà niềm vui của số 0 được chuẩn bị?"</p>
                        </div>
                        {/* / About tour */}
                        {/* Tour Include Loại trừ */}
                        <div className="tour-include-exclude radius-6">
                          <div className="includ-exclude-point">
                            <h4 className="title">Bao gồm</h4>
                            <ul className="expect-list">
                              <li className="list">Chào mừng bữa sáng</li>
                              <li className="list">Tất cả các vé nhập cảnh của các điểm đến nhảy </li>
                              <li className="list">Ăn trưa</li>
                              <li className="list">Đồ ăn nhẹ buổi tối</li>
                              <li className="list">Bộ dụng cụ sơ cứu (trong trường hợp khẩn cấp)</li>
                            </ul>
                          </div>
                          <div className="divider" />
                          <div className="includ-exclude-point">
                            <h4 className="title">Loại trừ</h4>
                            <ul className="expect-list">
                              <li className="list">Chi phí cá nhân </li>
                              <li className="list">Bất cứ điều gì khác không được đề cập trên các vùi</li>
                              <li className="list">Dịch vụ bổ sung</li>
                            </ul>
                          </div>
                        </div>
                        {/* / Tour Include Loại trừ */}
                        {/* Tour Plan accordion*/}
                        <div className="tour-details-content mb-30">
                          <h4 className="title">Kế hoạch du lịch</h4>
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
                                    <p className="pera mb-16">Lorem rất cà rốt
                                      Nhà phát triển đại học của Người theo dõi, nhưng làm
                                      một IUSMOD Long-công việc hoặc đau đớn
                                      thứ gì đó.Trong những năm qua, tôi sẽ đến,
                                      Bất kỳ ai có thể tập thể dục Ullamco chỉ làm việc như
                                      Aliquip từ sự tiện lợi của hậu quả.Bài tập về nhà
                                      Xin vui lòng tự động đau đớn trong niềm vui bị chỉ trích
                                      để trở thành một cặp đau và khoai tây chiên chạy đi không
                                      được chuẩn bị.Ngoại trừ những người rèm là háo hức hay không
                                      Proider, họ có lỗi với các dịch vụ
                                      từ bỏ linh hồn được làm mềm là đồ ăn nhẹ. "</p>
                                    <ul className="listing">
                                      <li className="list">
                                        “Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì ở
                                        tất cả."...
                                      </li>
                                      <li className="list">
                                        Du lịch đủ xa, bạn gặp chính mình....
                                      </li>
                                      <li className="list">
                                        Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                                      </li>
                                      <li className="list">
                                        “Mỗi năm một lần, đi đâu đó bạn chưa từng đến
                                        trước."
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
                                        “Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì ở
                                        tất cả."...
                                      </li>
                                      <li className="list">
                                        Du lịch đủ xa, bạn gặp chính mình....
                                      </li>
                                      <li className="list">
                                        Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                                      </li>
                                      <li className="list">
                                        “Mỗi năm một lần, đi đâu đó bạn chưa từng đến
                                        trước."
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
                                        “Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì ở
                                        tất cả."...
                                      </li>
                                      <li className="list">
                                        Du lịch đủ xa, bạn gặp chính mình....
                                      </li>
                                      <li className="list">
                                        Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                                      </li>
                                      <li className="list">
                                        “Mỗi năm một lần, đi đâu đó bạn chưa từng đến
                                        trước."
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
                          <h4 className="title">Chính sách</h4>
                          <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng làm
                            inique
                            sự cố
                            để làm việc hoặc đau đớn.Làm thế nào để bạn làm một sự tha thứ kỳ lạ, người đã
                            Tập thể dục Ullamco
                            thuê người làm
                            Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Bài tập về nhà tự động trong một irre
                            bị chỉ trích trong niềm vui xin vui lòng
                            được
                            Cura Pain Football không chạy nữa.Ngoại trừ là người da đen
                            Không ủng hộ
                            lỗi
                            Các dịch vụ đó từ bỏ việc làm mềm là một món ăn nhẹ. "</p>
                          <p className="pera">Nhưng tôi phải gặp phải sai lầm rằng mọi người đều là một niềm vui
                            Công tố viên
                            nỗi đau
                            Ca ngợi, toàn bộ điều cần mở, và những điều từ người phát minh ra sự thật đó
                            Và là một kiến ​​trúc sư
                            Hạnh phúc
                            Cuộc sống đã được nói để giải thích.Không ai là niềm vui của niềm vui
                            từ chối hoặc ghét hoặc
                            chạy trốn,
                            Nhưng bởi vì họ dẫn đến những nỗi đau lớn, những người có niềm vui để theo dõi
                            không biết.Hoặc hơn nữa
                            bất cứ ai;
                            Chính nỗi đau vì cà rốt, cà chua muốn, nhưng bởi vì
                            Tôi chưa bao giờ có chế độ của nó
                            Thời gian sự cố để làm việc và đau đớn để tìm kiếm một số niềm vui.ĐẾN
                            Đối với người nhỏ bé tôi sẽ đến
                            Ai
                            Việc đào tạo của chúng tôi là một sự nhạy cảm về thể chất của một sự dữ dội trừ khi họ làm điều gì đó
                            của lợi thế
                            hậu quả?
                            Một hoặc quyền của cô ấy để chỉ trích niềm vui là nhiều hơn
                            Không khó chịu
                            Hậu quả
                            Hay đó là nỗi đau của anh ta để chạy trốn mà niềm vui của số 0 được chuẩn bị?"</p>
                          <ol className="policy-point">
                            <li className="list">Không có thêm bất kỳ nỗi đau nào vì đội
                              Bắt buộc, cà chua
                              để có được một điều ước.</li>
                            <li className="list">Không ai là niềm vui rằng niềm vui bị từ chối hoặc
                              ghét hoặc chạy.</li>
                            <li className="list">Lorem Cà rốt cà rốt, Phim đại học nâng cao
                              Nhưng tôi làm trong một inquid.</li>
                          </ol>
                        </div>
                        {/* / Tour Privacy Policy */}
                      </div>
                      {/* Right content */}
                      <div className="col-xl-4 col-lg-5">
                        <div className="date-travel-card position-sticky top-0">
                          <div className="price-review">
                            <div className="d-flex gap-10 align-items-end">
                              <p className="light-pera">Từ</p>
                              <p className="pera">$95</p>
                            </div>
                            <div className="rating">
                              <p className="pera">Giá thay đổi theo quy mô nhóm</p>
                            </div>
                          </div>
                          <h4 className="heading-card">Chọn ngày và khách du lịch </h4>
                          <div className="date-time-dropdown">
                            <i className="ri-time-line" />
                            <p className="date-time-result">Thứ Tư, ngày 17 tháng 1 năm 2023</p>
                          </div>
                          <div className="dropdown-section position-relative user-picker-dropdown">
                            <div className="d-flex gap-12 align-items-center">
                              <i className="dropdown-icon ri-user-line" />
                              <div className="custom-dropdown">
                                <h4 className="title">Khách</h4>
                                <div className="arrow">
                                  <i className="ri-arrow-down-s-line" />
                                </div>
                              </div>
                            </div>
                            <div className="user-result" />
                            <div className="user-picker dropdown-shadow">
                              <div className="user-category">
                                <div className="category-name">
                                  <h4 className="title">Người lớn</h4>
                                  <p className="pera">12 năm trở lên</p>
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
                                  <h4 className="title">Những đứa trẻ</h4>
                                  <p className="pera">2-11 năm</p>
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
                                  <h4 className="title">Trẻ sơ sinh</h4>
                                  <p className="pera">Belwo 2 năm </p>
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
                                <a href="javascript:void(0)" className="done-btn">Xong</a>
                              </div>
                            </div>
                          </div>
                          <div className="mt-30">
                            <button type="submit" className="send-btn w-100">Sẵn sàng kiểm tra</button>
                          </div>
                          <div className="footer bg-transparent">
                            <h4 className="title">Hủy bỏ miễn phí</h4>
                            <p className="pera">Lên đến 24 giờ trước</p>
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
                        <h4 className="title">Công ty</h4>
                        <ul className="listing">
                          <li className="single-lsit">
                            <a href="about.html">về Chúng ta</a>
                          </li>
                          <li className="single-lsit">
                            <a href="news.html">Tin tức</a>
                          </li>
                          <li className="single-lsit"><a href="faq.html">Câu hỏi thường gặp</a></li>
                          <li className="single-lsit">
                            <a href="contact.html">liênHệ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-tittle">
                        <h4 className="title">Khám phá</h4>
                        <ul className="listing">
                          <li className="single-lsit"><a href="faq.html">Câu hỏi thường gặp</a></li>
                          <li className="single-lsit">
                            <a href="tour-list.html">Chuyến du lịch Danh sách</a>
                          </li>
                          <li className="single-lsit">
                            <a href="destination.html">Điểm đến</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-tittle">
                        <h4 className="title">Quick Liên kết</h4>
                        <ul className="listing">
                          <li className="single-lsit"><a href="index.html">Trang chủ</a></li>
                          <li className="single-lsit">
                            <a href="about.html">Về Us</a>
                          </li>
                          <li className="single-lsit">
                            <a href="contact.html">Liên hệ Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-tittle">
                        <h4 className="title">liênHệ</h4>
                        <ul className="listing">
                          <li className="single-lsit">
                            <a href="#" className="mb-20 d-block">70/aSloundDivoTowerMelbourne,
                              châuÚc</a>
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
                        <img src="/src//images/logo/logo.png" alt="travello" className="changeLogo" />
                      </div>
                      <p className="pera">
                        Du lịch là một trải nghiệm biến đổi và phong phú
                        cho phép các cá nhân khám phá các điểm đến, văn hóa mới,
                        và phong cảnh.
                      </p>
                    </div>
                    <div className="footer-right">
                      <h4 className="title">Đăng ký bản tin của chúng tôi</h4>
                      <div className="subscribe-wraper">
                        <input className="footer-search" type="search" name="footer" placeholder="Enter Your Email" />
                        <button className="subscribe-btn">Đặt mua</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <ul className="listing">
                    <li className="single-list">
                      <a href="terms-condition.html" className="single"> Điều khoản của Hoa Kỳ </a>
                    </li>
                    <li className="single-list">
                      <a href="privacy-policy.html" className="single"> Tuyên bố về quyền riêng tư và cookie</a>
                    </li>
                    <li className="single-list">
                      <a href="contact.html" className="single"> Cách thức hoạt động của trang web </a>
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
                        © <span className="current-year">2023</span> ban đầu Tất cả các quyền
                        kín đáo
                      </p>
                      <p className="pera">Được cung cấp bởi @Travello</p>
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
