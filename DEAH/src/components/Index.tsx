import React from 'react'

const Index = () => {
  return (
    <div>
<div>
  <header className="header-area-three">
    <div className="main-header">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-menu-wrapper d-flex align-items-center justify-content-between">
                <div className="top-header-right">
                  <div className="contact-section">
                    <div className="circle-primary-sm">
                      <i className="ri-phone-line" />
                    </div>
                    <div className="info">
                      <p className="pera">Gọi bất cứ lúc nào</p>
                      <h4 className="title">
                        <a href="javascript:void(0)">00 (888) +123456</a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Top Left Side */}
                {/* Logo*/}
                <div className="logo">
                  <a href="index.html"><img src="/src/assets/images/logo/logo.png" alt="logo" className="changeLogo" /></a>
                </div>
                <div className="header-right-three pl-15 d-none d-lg-flex">
                  <div className="lang">
                    <i className="ri-global-line" />
                    <p className="pera">Tiêngs Việt </p>
                  </div>
                  <div className="divider gradient-divider" />
                  <div className="d-flex gap-20 align-items-center">
                    <p className="pera">
                      <a href="login.html" className="signin">Đăng nhập</a>
                    </p>
                    <div className="sign-btn">
                      <a href="register.html" className="btn-secondary-sm radius-30">Đăng ký</a>
                    </div>
                    {/* Theme Mode */}
                    <button className="ToggleThemeButton change-theme-mode m-0 p-0 border-0">
                      <i className="ri-sun-line" />
                    </button>
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
                          <a href="javascript:void(0)" className="single link-active">Trang chủ <i className="ri-arrow-down-s-line" /></a>
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
                        <li className="single-list">
                          <a href="about.html" className="single">Về</a>
                        </li>
                        <li className="single-list">
                          <a href="destination.html" className="single">Điểm đến</a>
                        </li>
                        <li className="single-list">
                          <a href="tour-list.html" className="single">Gói du lịch</a>
                        </li>
                        <li className="single-list">
                          <a href="javascript:void(0)" className="single">Trang <i className="ri-arrow-down-s-line" /></a>
                          <ul className="submenu">
                            <li className="single-list">
                              <a href="tour-details.html" className="single">Chuyến du lịch
Chi tiết</a>
                            </li>
                            <li className="single-list">
                              <a href="news-details.html" className="single">Tin tức
Chi tiết </a>
                            </li>
                            <li className="single-list">
                              <a href="destination-details.html" className="single">Điểm đến Chi tiết</a>
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
                                  <a href="verification.html" className="single">xác minh</a>
                                </li>
                                <li className="single-list">
                                  <a href="new-password.html" className="single"> Mới
Mật khẩu </a>
                                </li>
                              </ul>
                            </li>
                            <li className="single-list">
                              <a href="faq.html" className="single">Câu hỏi thường gặp</a>
                            </li>
                            <li className="single-list">
                              <a href="privacy-policy.html" className="single">sự riêng tư
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
                          <div className="header-right-three pl-15 mt-10">
                            <div className="sign-btn">
                              <a href="login.html" className="btn-secondary-sm m-0">Đăng nhập</a>
                            </div>
                            <div className="d-flex align-items-center gap-12">
                              <div className="lang">
                                <i className="ri-global-line" />
                                <p className="pera">English</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      {/* search box */}
                      <div className="search-box search-bar d-none d-lg-block">
                        <div className="header-search">
                          <span className="pera">Điểm đến, sự thu hút</span>
                          <div className="search-icon">
                            <i className="ri-search-line" />
                          </div>
                          <kbd className="light-text">
                            <abbr title="Ctrl">Ctrl +</abbr> k
                          </kbd>
                        </div>
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
          <input type="text" id="searchField" className="search-field" placeholder="Điểm đến, Agency, Country" />
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
                       Dubai by Night City Tour với Fountain Show
                      </h4>
                      <p className="pera line-clamp-2">
                       Buổi tối tuyệt vời Escapade bắt đầu từ Madinat
Jumeirah đến đài phun nước âm nhạc để xem người khác.
Buổi tối tuyệt vời Escapade bắt đầu từ Madinat
Jumeirah đến các đài phun nước âm nhạc để xem người khác
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
                     Dubai: cồn cát đỏ cao cấp, lạc đà, Stargazing & amp;5*
BBQ tại Al Khayma Camp ™
                      </h4>
                      <p className="pera line-clamp-2">
                  Kết thúc tuyệt vời cho ngày của bạn ở Dubai với
buổi tối cao cấp red dune sa mạc safari.Cho một tuyệt vời
Kết thúc một ngày của bạn ở Dubai với buổi tối cao cấp của chúng tôi
Safari sa mạc Red Dune.
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
       Nhập học vào làng toàn cầu ở Dubai
                      </h4>
                      <p className="pera line-clamp-2">
                     Nhập học vào lễ hội đa văn hóa lớn nhất Dubai Dubai
Công viên với bản sao của các địa danh mang tính biểu tượng.Nhập vào
Công viên lễ hội đa văn hóa lớn nhất Dubai với
bản sao của các địa danh mang tính biểu tượng
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
                       Dubai by Night City Tour với Fountain Show
                      </h4>
                      <p className="pera line-clamp-2">
                       Buổi tối tuyệt vời Escapade bắt đầu từ Madinat
Jumeirah đến đài phun nước âm nhạc để xem người khác.
Buổi tối tuyệt vời Escapade bắt đầu từ Madinat
Jumeirah đến các đài phun nước âm nhạc để xem người khác
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
                     Dubai: cồn cát đỏ cao cấp, lạc đà, Stargazing & amp;5*
BBQ tại Al Khayma Camp ™
                      </h4>
                      <p className="pera line-clamp-2">
                  Kết thúc tuyệt vời cho ngày của bạn ở Dubai với
buổi tối cao cấp red dune sa mạc safari.Cho một tuyệt vời
Kết thúc một ngày của bạn ở Dubai với buổi tối cao cấp của chúng tôi
Safari sa mạc Red Dune.
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
       Nhập học vào làng toàn cầu ở Dubai
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
                  <h4 className="search-label"> Loại bài</h4>
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
                      <p className="pera">Blogs (23)</p>
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
                      <p className="pera">Blogs (23)</p>
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
  </header>
  <main>
    {/* Hero area S t a r t*/}
    <section className="hero-padding-for-three video-overlay position-relative">
      {/* Video */}
      <div className="hero-bg-video">
        <video className="hero-slider-video video-cover" poster="/src/images/hero/hero-three-banner.png" loop autoPlay muted>
          <source src="/src/images/videos/travel1.mp4" type="video/mp4" />
       Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-xl-12">
            <div className="hero-caption-three position-relative z-3">
              <h4 className="title wow fadeInUp" data-wow-delay="0.0s">
           Lên kế hoạch cho các chuyến tham quan đến các địa điểm mơ ước chỉ trong một cú nhấp chuột!
              </h4>
              <p className="pera wow fadeInUp" data-wow-delay="0.1s">
        Du lịch là một trải nghiệm biến đổi và phong phú
cho phép các cá nhân khám phá các điểm đến, văn hóa mới và
Phong cảnh
              </p>
            </div>
            <div className="hero-footer position-relative z-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="all-user">
                <div className="happy-user">
                  <img src="/src/images/hero/user-1.jpeg" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/images/hero/user-2.png" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/images/hero/user-3.png" alt="travello" />
                </div>
                <div className="happy-user">
                  <img src="/src/images/hero/user-4.jpeg" alt="travello" />
                </div>
                <div className="happy-user-count">
                  <p className="user-count">5k+</p>
                </div>
                <p className="pera">Khách hàng hạnh phúcr</p>
                <span className="wave-emoji">
                  <img src="/src/images/icon/hand.png" alt="travello" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Hero*/}
    {/* Plan area S t a r t */}
    <section className="plan-area-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="plan-section-three plan-shadow">
              <div className="choose-plan-nav">
                {/* Buttons Type Select */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="plan-link active" id="tour-tab" data-bs-toggle="tab" data-bs-target="#tour" type="button" role="tab" aria-controls="tour" aria-selected="true">
                      <i className="ri-ship-line" /> Chuyến du lịch
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="plan-link" id="book-tab" data-bs-toggle="tab" data-bs-target="#book" type="button" role="tab" aria-controls="book" aria-selected="false">
                      <i className="ri-flight-takeoff-fill" /> Book
                    </button>
                  </li>
                </ul>
                {/* / End-of Buttons */}
                {/* Tab Search Contents */}
                <div className="tab-content" id="tourTab">
                  <div className="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="tour-tab">
                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <label className="one-way-label">
                        <input className="one-way-input" type="radio" name="radio" />
                        <span className="circle" />
                        <span className="radio-text">Một chiều</span>
                      </label>
                      <label className="round-trip-label">
                        <input className="round-trip-input" type="radio" name="radio" defaultChecked />
                        <span className="circle" />
                        <span className="radio-text">Chuyến đi khứ hồi</span>
                      </label>
                    </div>
                    <div className="row g-4 justify-content-end">
                      <div className="col-xl-5 col-lg-12">
                        <div className="destination-flex">
                          <div className="select-dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="destination-dropdown-two" />
                            </div>
                            <div className="destination-result line-clamp-1">
                         Sân bay Istanbul ...
                            </div>
                          </div>
                          <div className="select-dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="destination-dropdown-three" />
                            </div>
                            <div className="destination-result-three line-clamp-1">
                         Sân bay Istanbul ...
                            </div>
                          </div>
                          <div className="swap-icon">
                            <i className="ri-arrow-left-right-line" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-12">
                        <div className="destination-flex">
                          <div className="dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="custom-date-three">
                                <h4 className="month-title month-result">Tháng hai</h4>
                                <div className="year-title year-result">
                                 Thứ ba, 6, 2023
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="custom-date-three">
                                <h4 className="month-title text-right month-result-two">
                                  March
                                </h4>
                                <div className="year-title text-right year-result-two">
                                 Thứ ba, 6, 2023
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swap-icon">
                            <i className="ri-calendar-2-line" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3">
                        <div className="sign-btn text-right">
                          <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                            <i className="ri-search-line mr-10 font-20" /> Tìm kiếm Kế hoạch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="book" role="tabpanel" aria-labelledby="book-tab">
                    <div className="d-flex gap-16 flex-wrap mb-26">
                      <label className="one-way-label">
                        <input className="one-way-input" type="radio" name="radio" />
                        <span className="circle" />
                        <span className="radio-text">Một chiều</span>
                      </label>
                      <label className="round-trip-label">
                        <input className="round-trip-input" type="radio" name="radio" />
                        <span className="circle" />
                        <span className="radio-text"> Chuyến đi khứ hồi</span>
                      </label>
                    </div>
                    <div className="row g-4 justify-content-end">
                      <div className="col-xl-5 col-lg-12">
                        <div className="destination-flex">
                          <div className="select-dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="destination-dropdown-two" />
                            </div>
                            <div className="destination-result line-clamp-1">
                         Sân bay Istanbul ...
                            </div>
                          </div>
                          <div className="select-dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="destination-dropdown-three" />
                            </div>
                            <div className="destination-result-three line-clamp-1">
                         Sân bay Istanbul ...
                            </div>
                          </div>
                          <div className="swap-icon">
                            <i className="ri-arrow-left-right-line" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-12">
                        <div className="destination-flex">
                          <div className="dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="custom-date-three">
                                <h4 className="month-title month-result">Tháng hai </h4>
                                <div className="year-title year-result">
                                  Thứ ba, 6, 2023
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-section">
                            <div className="d-flex gap-10 align-items-center">
                              <div className="custom-date-three">
                                <h4 className="month-title text-right month-result-two">
                           Bước đều
                                </h4>
                                <div className="year-title text-right year-result-two">
                               Thứ ba, 6, 2023
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swap-icon">
                            <i className="ri-calendar-2-line" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3">
                        <div className="sign-btn">
                          <a href="tour-list.html" className="btn-secondary-lg w-100 text-center">
                            <i className="ri-search-line mr-10 font-20" /> Kế hoạch tìm kiếm
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / End-of Search Contents */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Plan*/}
    {/* Special area S t a r t */}
    <section className="special-area section-padding2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">Ưu đãi đặc biệt</span>
              <h4 className="title">
            Mùa đông những lời đề nghị lớn của chúng tôi để truyền cảm hứng cho bạn
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
              <img src="/src/images/gallery/offercard-1.jpg" alt="travello" />
              <div className="offer-content">
                <p className="highlights-text"> Tiết kiệm đến</p>
                <h4 className="title">50%</h4>
                <p className="pera">Hãy để khám phá Thế giới</p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30"> Đặt phòng ngay</div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6">
            <a href="tour-list.html" className="offer-banner imgEffect4 wow fadeInRight" data-wow-delay="0.0s">
              <img src="/src/images/gallery/offercard-2.jpg" alt="travello" />
              <div className="offer-content-two">
                <h4 className="title">Khách sạn gần đó</h4>
                <p className="pera">
                 Lên đến<span className="highlights-text">50%</span> Tắt tốt nhất
Khách sạn gần
                </p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30">Đặt phòng ngay</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of special*/}
    {/* Trip area S t a r t */}
    <section className="special-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">Thưởng thức chuyến đi</span>
              <h4 className="title">
              Hàng đầu trong nước & amp;Chuyến tham quan quốc tế
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Trip Buttons */}
            <ul className="nav nav-pills trip-pills" id="pills-tab" role="tablist">
              <li className="nav-item trip-item" role="presentation">
                <button className="nav-link trip-nav active" id="pills-domestic-tab" data-bs-toggle="pill" data-bs-target="#pills-domestic" type="button" role="tab" aria-controls="pills-domestic" aria-selected="true">
             Nội địa
                </button>
              </li>
              <li className="nav-item trip-item" role="presentation">
                <button className="nav-link trip-nav" id="pills-international-tab" data-bs-toggle="pill" data-bs-target="#pills-international" type="button" role="tab" aria-controls="pills-international" aria-selected="false">
            Quốc tế
                </button>
              </li>
            </ul>
            {/* / End-of Trip Buttons */}
            {/* Tab Contents */}
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-domestic" role="tabpanel" aria-labelledby="pills-domestic-tab">
                <div className="row g-4">
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Sylhet</h4>
                        <p className="from-pera line-clamp-1">Osman Internatin ...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">kolkata</h4>
                        <p className="from-pera line-clamp-1">kolkata Airport</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">india</h4>
                        <p className="from-pera line-clamp-1">Shah Amanat Inter...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">india</h4>
                        <p className="from-pera line-clamp-1">Shah Amanat Inter...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">canada</h4>
                        <p className="from-pera line-clamp-1">canada Airport</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">kolkata</h4>
                        <p className="from-pera line-clamp-1">kolkata Airport</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-international" role="tabpanel" aria-labelledby="pills-international-tab">
                <div className="row g-4">
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Australia</h4>
                        <p className="from-pera line-clamp-1">
                          Australia Internatin...
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Usa</h4>
                        <p className="from-pera line-clamp-1">Usa Airport</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Japan</h4>
                        <p className="from-pera line-clamp-1">Narita Inter...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Hongkok</h4>
                        <p className="from-pera line-clamp-1">Hongkok Inter...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Japan</h4>
                        <p className="from-pera line-clamp-1">Narita Inter...</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <a href="tour-details.html" className="trip-card">
                      <div className="from-flex">
                        <h4 className="from-title">VND</h4>
                        <p className="from-pera line-clamp-1">Sân bay Istanbul ...</p>
                      </div>
                      <div className="trip-icon-flex">
                        <div className="trip-icon"><i className="ri-flight-takeoff-fill" /></div>
                      </div>
                      <div className="from-flex">
                        <h4 className="from-title">Canada</h4>
                        <p className="from-pera line-clamp-1">Canada Airport</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* / End-of Tab contents */}
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of trip*/}
    {/* Về Us area S t a r t */}
    <section className="about-area">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title mx-430 mb-30 w-md-100">
              <span className="highlights fancy-font font-400">Về Us</span>
              <h4 className="title">
      Nhận trải nghiệm du lịch tốt nhất với travello
              </h4>
              <p className="pera">
            Du lịch là một trải nghiệm biến đổi và phong phú
cho phép các cá nhân khám phá các điểm đến, văn hóa mới và
Phong cảnh.Đó là một hoạt động cơ bản của con người đã được
thực hành trong nhiều thế kỷ và tiếp tục là một nguồn vui,
học tập, và tăng trưởng cá nhân.
              </p>
              <p className="pera">
             Du lịch là một trải nghiệm biến đổi và phong phú
Cho phép các cá nhân khám phá các điểm đến mới, văn hóa.
              </p>
              <div className="section-button mt-27 d-inline-block">
                <a href="about.html" className="btn-primary-icon-sm radius-20">
                  <p className="pera mt-0">Tìm hiểu thêm</p>
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
              <div className="about-imp-link mt-40">
                <div className="icon">
                  <i className="ri-user-line" />
                </div>
                <div className="content">
                  <p className="pera font-16">
                    <span className="font-700">2,500</span> Mọi người đã đặt trước ngày mai
Sự kiện đất đai trong 24 giờ qua
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about-count-section about-count-before-bg">
              <div className="banner">
                <img src="/src/images/gallery/about-banner-three.png" alt="travello" />
              </div>
              <div className="all-count-list">
                <div className="details">
                  <h4 className="count">150k</h4>
                  <p className="pera"> Du khách hạnh phúc</p>
                </div>
                <div className="divider" />
                <div className="details">
                  <h4 className="count">95.7%</h4>
                  <p className="pera">Tỷ lệ hài lòng </p>
                </div>
                <div className="divider" />
                <div className="details">
                  <h4 className="count">5000+</h4>
                  <p className="pera">Tour hoàn thành </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of Về US*/}
    {/* Feature S t a r t */}
    <section className="feature-area feature-area-bg section-padding2">
      <div className="container">
        <div className="row justify-content-center position-relative z-10">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">Tính năng Tour</span>
              <h4 className="title">
              Địa điểm du lịch yêu thích nhất trên thế giới
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4 position-relative z-10">
          <div className="swiper favSwiper-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-4.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera">Đặc sắc</p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-3.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-2.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-10.jpg" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-4.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-3.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-2.png" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="package-card">
                  <div className="package-img imgEffect4">
                    <a href="tour-details.html">
                      <img src="/src/images/package/package-10.jpg" alt="travello" />
                    </a>
                    <div className="image-badge">
                      <p className="pera"> Đặc trưng </p>
                    </div>
                    <div className="fav-badge">
                      <i className="ri-heart-fill" />
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="location">
                      <i className="ri-map-pin-line" />
                      <div className="name">Bangkok, Thailand</div>
                    </div>
                    <h4 className="area-name">
                      <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                    </h4>
                    <div className="packages-person mb-16">
                      <div className="count">
                        <i className="ri-time-line" />
                        <p className="pera"> 3 ngày 2 đêm</p>
                      </div>
                      <div className="count">
                        <i className="ri-user-line" />
                        <p className="pera">2 người</p>
                      </div>
                    </div>
                    <div className="price-review mb-0">
                      <div className="d-flex gap-10">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                      </div>
                      <div className="rating">
                        <i className="ri-star-s-fill" />
                        <p className="pera">4.7 (20 đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next">
              <i className="ri-arrow-right-s-line" />
            </div>
            <div className="swiper-button-prev">
              <i className="ri-arrow-left-s-line" />
            </div>
          </div>
        </div>
        <div className="row position-relative z-10">
          <div className="col-12 text-center">
            <div className="section-button d-inline-block">
              <a href="tour-list.html">
                <div className="btn-primary-icon-sm border-radius-20">
                  <p className="pera">Xem tất cả các tour du lịch</p>
                  <i className="ri-arrow-right-up-line" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End of Feature */}
    {/* Điểm đến area S t a r t */}
    <section className="destination-area destination-bg-before">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-430 mx-auto position-relative">
              <span className="highlights">Điểm đến Danh sách</span>
              <h4 className="title">
             Khám phá những nơi tuyệt đẹp trên thế giới
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-7 col-md-7">
            <a href="destination-details.html" className="destination-banner">
              <img src="/src/images/destination/destination-01.png" alt="travello" />
              <div className="destination-content">
                <div className="ratting-badge">
                  <i className="ri-star-s-fill" />
                  <span>4.5</span>
                </div>
                <div className="destination-info">
                  <div className="destination-name">
                    <p className="pera">Tây ban nha</p>
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
          <div className="col-xl-4 col-lg-7 col-md-7">
            <a href="destination-details.html" className="destination-banner">
              <img src="/src/images/destination/destination-1.png" alt="travello" />
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
          <div className="col-xl-4 col-lg-7 col-md-7">
            <a href="destination-details.html" className="destination-banner">
              <img src="/src/images/destination/destination-001.jpg" alt="travello" />
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
          <div className="destination-gallery">
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/images/destination/destination-3.png" alt="travello" />
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
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/images/destination/destination-4.png" alt="travello" />
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
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/images/destination/destination-5.png" alt="travello" />
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
              <div className="col-lg-3 col-md-6 col-sm-6">
                <a href="destination-details.html" className="destination-banner">
                  <img src="/src/images/destination/destination-02.png" alt="travello" />
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
      {/* shape */}
      <div className="shape">
        <img src="/src/images/icon/shape.png" alt="travello" />
      </div>
    </section>
    {/*/ End-of Điểm đến */}
    {/* Explore S t a r t */}
    <section className="explore-area section-padding2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-430 mx-auto position-relative mb-60">
              <span className="highlights">Khám phá từ </span>
              <h4 className="title">
              Gói ưu đãi tốt nhất của chúng tôi cho bạn
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-5 col-lg-5 col-md-6">
            <div className="all-explore" id="v-pills-tab-three" role="tablist" aria-orientation="vertical">
              <div className="explore-btn active" id="pills-explore-one-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-one" role="tab" aria-controls="pills-explore-one" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-1.svg" alt="travello" />
                  </div>
                  <h4 className="name">Câu cá & amp;Bơi lội</h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-two-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-two" role="tab" aria-controls="pills-explore-two" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-2.svg" alt="travello" />
                  </div>
                  <h4 className="name">Âm nhạc & amp;Thư giãn </h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-three-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-three" role="tab" aria-controls="pills-explore-three" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-3.svg" alt="travello" />
                  </div>
                  <h4 className="name">trailer &Amp;thểThao </h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-four-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-four" role="tab" aria-controls="pills-explore-four" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-4.svg" alt="travello" />
                  </div>
                  <h4 className="name">Núi & amp;Đi bộ trên đồi </h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-five-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-five" role="tab" aria-controls="pills-explore-five" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-5.svg" alt="travello" />
                  </div>
                  <h4 className="name">Chuyến tham quan dù lượn</h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-six-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-six" role="tab" aria-controls="pills-explore-six" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-1.svg" alt="travello" />
                  </div>
                  <h4 className="name">âmNhạc &Amp;thưGiãn </h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-seven-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-seven" role="tab" aria-controls="pills-explore-seven" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-2.svg" alt="travello" />
                  </div>
                  <h4 className="name">Mountain &amp; Hill Hiking</h4>
                </div>
              </div>
              <div className="explore-btn" id="pills-explore-eight-tab" data-bs-toggle="pill" data-bs-target="#pills-explore-eight" role="tab" aria-controls="pills-explore-eight" aria-selected="true">
                <div className="d-flex gap-16 align-items-center">
                  <div className="explore-icon">
                    <img src="/src/images/icon/explore-1.svg" alt="travello" />
                  </div>
                  <h4 className="name">Câu cá & amp;Bơi lội</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="tab-content" id="v-pills-tabContent-three">
              <div className="tab-pane fade show active" id="pills-explore-one" role="tabpanel" aria-labelledby="pills-explore-one">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/about.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-two" role="tabpanel" aria-labelledby="pills-explore-two">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/music.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-three" role="tabpanel" aria-labelledby="pills-explore-three">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/sports.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-four" role="tabpanel" aria-labelledby="pills-explore-four">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/hiking.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-five" role="tabpanel" aria-labelledby="pills-explore-five">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/paragliding.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-six" role="tabpanel" aria-labelledby="pills-explore-six">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/music.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-seven" role="tabpanel" aria-labelledby="pills-explore-seven">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/hiking.png" alt="travello" />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-explore-eight" role="tabpanel" aria-labelledby="pills-explore-eight">
                <div className="explore-conntent">
                  <h4 className="title">trailer &Amp;thểThao </h4>
                  <p className="pera">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Không có niềm vui nhưng
Vùng DUI dài tincidunt.Đó là bộ phim được kéo
Yếu tố người tiêu dùng.Không phải vào một ngày cuối tuần và
Nhưng chính thống.Luôn luôn là một nỗi đau đau đớn
Tortor nisl.
                  </p>
                  <ul className="expect-list">
                    <li className="list">
               Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.Không phải vậy
Lorem Tiêu dùng cổ họng bất động sản.
                    </li>
                    <li className="list">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chậu đường phố
Hendrerit DUI cần chăm sóc Orci.
                    </li>
                  </ul>
                </div>
                <div className="explore-banner">
                  <img src="/src/images/gallery/about.png" alt="travello" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End of Explore */}
    {/* Testimonial S t a r t */}
    <section className="testimonial-area-three position-relative section-bg-before-two top-padding">
      <div className="container">
        <div className="row justify-content-center position-relative">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title mx-430 mx-auto text-center">
              <span className="highlights fancy-font font-400">Chứng thực</span>
              <h4 className="title">
Những gì mọi người đã nói về dịch vụ của chúng tôi
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="swiper testimonialThree-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide testimonial-card">
                  <div className="testimonial-header">
                    <div className="user-img">
                      <img src="/src/images/testimonial/testimonial-1.jpeg" alt="travello" />
                    </div>
                    <div className="user-info">
                      <p className="name">David Malan</p>
                      <p className="designation">Du khách</p>
                    </div>
                  </div>
                  <div className="rattings">
                    <i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" />
                  </div>
                  <div className="testimonial-body">
                    <p className="pera line-clamp-3">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tinngunt DUI hoặc đại học
xấu xí hoặc tại khóa học.Bất động sản sô cô la bóng đá
Ultricies của cuộc sống.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="logo">
                      <img src="/src/images/logo/logo.png" alt="travello" className="changeLogo" />
                    </div>
                    <p className="date">Jan 20, 2025</p>
                  </div>
                </div>
                <div className="swiper-slide testimonial-card">
                  <div className="testimonial-header">
                    <div className="user-img">
                      <img src="/src/images/testimonial/testimonial-1.jpeg" alt="travello" />
                    </div>
                    <div className="user-info">
                      <p className="name">David Malan</p>
                      <p className="designation">Du khách</p>
                    </div>
                  </div>
                  <div className="rattings">
                    <i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" />
                  </div>
                  <div className="testimonial-body">
                    <p className="pera line-clamp-3">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tinngunt DUI hoặc đại học
xấu xí hoặc tại khóa học.Bất động sản sô cô la bóng đá
Ultricies của cuộc sống.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="logo">
                      <img src="/src/images/logo/logo.png" alt="travello" className="changeLogo" />
                    </div>
                    <p className="date">Jan 20, 2025</p>
                  </div>
                </div>
                <div className="swiper-slide testimonial-card">
                  <div className="testimonial-header">
                    <div className="user-img">
                      <img src="/src/images/testimonial/testimonial-1.jpeg" alt="travello" />
                    </div>
                    <div className="user-info">
                      <p className="name">David Malan</p>
                      <p className="designation">Du khách</p>
                    </div>
                  </div>
                  <div className="rattings">
                    <i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" /><i className="ri-star-fill" />
                  </div>
                  <div className="testimonial-body">
                    <p className="pera line-clamp-3">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tinngunt DUI hoặc đại học
xấu xí hoặc tại khóa học.Bất động sản sô cô la bóng đá
Ultricies của cuộc sống.
                    </p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="logo">
                      <img src="/src/images/logo/logo.png" alt="travello" className="changeLogo" />
                    </div>
                    <p className="date">Jan 20, 2025</p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="hero-banner imgEffect2 o-hidden radius-20">
              <img src="/src/images/hero/testimonial-three-banner.png" alt="travello" />
              {/* shape 01 */}
              <div className="shape">
                <img src="/src/images/icon/feature-shape.png" alt="travello" />
              </div>
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".2s">
                <div className="video-player">
                  <i className="ri-play-fill" />
                </div>
              </a>
            </div>
          </div>
          {/* / End Slider */}
        </div>
      </div>
      <div className="shape-testimonial">
        <img src="/src/images/icon/graphic.png" alt="travello" />
      </div>
    </section>
    {/*/ End of Testimonial */}
    {/* Brand S t a r t */}
    <div className="brand-area">
      <div className="container">
        <div className="swiper brandSwiper-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-1.jpeg" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-2.jpg" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-3.jpg" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-4.png" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-5.png" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-1.jpeg" alt="travello" />
            </div>
            <div className="swiper-slide">
              <img src="/src/images/brand/brand-2.jpg" alt="travello" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/ End of Brand */}
    {/* Tin tức S t a r t */}
    <section className="news-area section-padding2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-605 mx-auto position-relative mb-60">
              <span className="highlights">Tin tức &amp; Bài báo</span>
              <h4 className="title">
                Latest Tin tức &amp; Bài viết Từ The Blog Bài viết
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html"><img src="/src/images/news/news-4.png" alt="travello" /></a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Hướng dẫn viên du lịch</span>
                </div>
                <h4 className="title">
                  <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="travello" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 phút đọc</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html"><img src="/src/images/news/news-5.png" alt="travello" /></a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Hướng dẫn du lịch </span>
                </div>
                <h4 className="title">
                  <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="travello" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 phút đọc</p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <article className="news-card-two">
              <figure className="news-banner-two imgEffect">
                <a href="news-details.html"><img src="/src/images/news/news-6.png" alt="travello" /></a>
              </figure>
              <div className="news-content">
                <div className="heading">
                  <span className="heading-pera">Hướng dẫn du lịch </span>
                </div>
                <h4 className="title">
                  <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
                </h4>
                <div className="news-info">
                  <div className="d-flex gap-10 align-items-center">
                    <div className="all-user">
                      <div className="happy-user">
                        <img src="/src/images/hero/user-1.jpeg" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-2.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-3.png" alt="travello" />
                      </div>
                      <div className="happy-user">
                        <img src="/src/images/hero/user-4.jpeg" alt="travello" />
                      </div>
                    </div>
                  </div>
                  <p className="time">10 phút đọc</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="section-button d-inline-block">
            <a href="news.html">
              <div className="btn-primary-icon-sm">
                <p className="pera"> Xem tất cả Tin tức</p>
                <i className="ri-arrow-right-up-line" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/*/ End of Tin tức */}
    {/* Pricing S t a r t */}
    <section className="pricing-area bottom-padding section-bg-before-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-center mx-605 mx-auto position-relative">
              <span className="highlights-primary">Kế hoạch định giá gói</span>
              <h4 className=" title">
              Đơn giản chỉ cần chọn kế hoạch định giá phù hợp với bạn nhất
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
                    <h4 className="title">Nền tảng</h4>
                    <div className="price-badge d-none">phổ biến</div>
                  </div>
                  <p className="pera">Tốt nhất cho các nhu cầu cá nhân và cơ bản</p>
                </div>
                <div className="price-tag-section">
                  <div className="price-tag">
                    <h4 className="title">$10</h4>
                    <p className="pera"> Thanh toán một lần </p>
</div>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Hơn 20 đối tác </p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Tin nhắn hàng loạt</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera"> Lorem rất cà rốt </p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera"> Công cụ đặt phòng trực tuyến </p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Thử ngay bây giờ</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Mỗi tháng +2% mỗi lần đặt phòng trực tuyến</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.1s">
                <div className="price-header">
                  <div className="d-flex gap-7 mb-2">
                    <h4 className="title">Pro</h4>
                    <div className="price-badge">phổ biến</div>
                  </div>
                  <p className="pera">Tốt nhất cho các nhu cầu cá nhân và cơ bản</p>
                </div>
                <div className="price-tag-section">
                  <div className="price-tag">
                    <h4 className="title">$77</h4>
                    <p className="pera">Thanh toán một lần</p>
                  </div>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Hơn 20 đối tác </p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Tin nhắn hàng loạt </p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất cà rốt</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera"> Công cụ đặt phòng trực tuyến </p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Thử ngay bây giờ</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Mỗi tháng +1,9% mỗi lần đặt phòng trực tuyến </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-card h-calc wow fadeInUp" data-wow-delay="0.2s">
                <div className="price-header">
                  <div className="d-flex gap-7 mb-2">
                    <h4 className="title">Phong tục</h4>
                    <div className="price-badge d-none">phổ biến</div>
                  </div>
                  <p className="pera">Tốt nhất cho các nhu cầu cá nhân và cơ bản</p>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Tin nhắn hàng loạt </p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất cà rốt</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Tất cả mọi thứ không giới hạn</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera"> Công cụ đặt phòng trực tuyến </p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment.html">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Liên hệ</span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera"> Vui lòng liên hệ bất cứ lúc nào</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End of Pricing */}
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
                      <a href="about.html">Về chúngTa</a>
                    </li>
                    <li className="single-lsit">
                      <a href="news.html">Tin tức</a>
                    </li>
                    <li className="single-lsit"><a href="faq.html">Câu hỏi thường gặp</a></li>
                    <li className="single-lsit">
                      <a href="contact.html">Liên hệ</a>
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
                      <a href="destination.html">Điểm đến</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-footer-caption">
                <div className="footer-tittle">
                  <h4 className="title">Nhanh Liên kết</h4>
                  <ul className="listing">
                    <li className="single-lsit"><a href="index.html">Trang chủ</a></li>
                    <li className="single-lsit">
                      <a href="about.html">Về Chúng ta</a>
                    </li>
                    <li className="single-lsit">
                      <a href="contact.html">Liên hệ Chúng ta</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-footer-caption">
                <div className="footer-tittle">
                  <h4 className="title">Liên hệ</h4>
                  <ul className="listing">
                    <li className="single-lsit">
                      <a href="#" className="mb-20 d-block">70/A Tháp Divo Melbourne,
Châu Úc</a>
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
                Du lịch là một trải nghiệm biến đổi và phong phú
cho phép các cá nhân khám phá các điểm đến, văn hóa mới,
và phong cảnh.
                </p>
              </div>
              <div className="footer-right">
                <h4 className="title"> Đăng ký bản tin của chúng tôi</h4>
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
                <a href="terms-condition.html" className="single">Điều khoản của Hoa Kỳ</a>
              </li>
              <li className="single-list">
                <a href="privacy-policy.html" className="single">Tuyên bố về quyền riêng tư và cookie</a>
              </li>
              <li className="single-list">
                <a href="contact.html" className="single">Cách thức hoạt động của trang web</a>
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
                  © <span className="current-year">2023</span> ban đầu.Tất cả các quyền
kín đáo
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

export default Index
