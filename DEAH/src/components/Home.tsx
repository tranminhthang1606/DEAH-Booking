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
                          <a href="index-two"><img src="/src/assets/images/logo/logo.png" alt="logo" className="changeLogo" /></a>
                        </div>
                        {/* search box */}
                        <div className="search-box search-bar d-none d-lg-block">
                          <div className="header-search">
                            <span className="pera">Điểm Đến Thu Hút</span>
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
                            <p className="pera">Email bất cứ lúc nào</p>
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
                            <p className="pera">Gọi bất cứ lúc nào</p>
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
                                <a href="javascript:void(0)" className="single">Trang Chủ </a>
                                
                              </li>
                              <li className="single-list ">
                                <a href="about" className="single link-active">Về Chúng Tôi</a>
                              </li>
                              <li className="single-list">
                                <a href="destination" className="single">Điểm Đến</a>
                              </li>
                              <li className="single-list">
                                <a href="tour-list" className="single">Gói Du Lịch</a>
                              </li>
                              <li className="single-list">
                                <a href="javascript:void(0)" className="single">Trang <i className="ri-arrow-down-s-line" /></a>
                                <ul className="submenu">
                                  <li className="single-list">
                                    <a href="tour-details" className="single">Chuyến Du Lịch
                                      Chi tiết</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="news-details" className="single">Tin Tức</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="destination-details" className="single">Điểm Đến</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="payment" className="single">Thanh Toán</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="javascript:void(0)" className="single">Đăng Nhập<i className="ri-arrow-right-s-line" /></a>
                                    <ul className="submenu">
                                      <li className="single-list">
                                        <a href="login" className="single">Đăng Nhập</a>
                                      </li>
                                      <li className="single-list">
                                        <a href="register" className="single">Đăng Ký</a>
                                      </li>
                                      <li className="single-list">
                                        <a href="forgot-pass" className="single">Quên
                                          Mật Khẩu</a>
                                      </li>
                                      <li className="single-list">
                                        <a href="verification" className="single">Xác Minh</a>
                                      </li>
                                      <li className="single-list">
                                        <a href="new-password" className="single">Mật Khẩu Mới</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="single-list">
                                    <a href="faq" className="single">Câu Hỏi Thường Gặp</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="privacy-policy" className="single">Sự Riêng Tư
                                      Chính Sách</a>
                                  </li>
                                  <li className="single-list">
                                    <a href="terms-condition" className="single">Điều Khoản Điều Kiện</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="single-list">
                                <a href="news" className="single">Tin tức</a>
                              </li>
                              <li className="single-list">
                                <a href="contact" className="single">Liên hệ</a>
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
                                    <a href="login" className="btn-secondary-sm">Đăng nhập</a>

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
                                <a href="login" className="btn-secondary-sm">Đăng nhập</a>
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
                      <a href="tour-details">
                        <div className="search-flex">
                          <div className="content-img">
                            <img src="/src/assets/images/gallery/search-img-1.jpeg" alt="travello" />
                          </div>
                          <div className="content">
                            <h4 className="title line-clamp-1">
                              Dubai by Night City Tour với Fountain Show
                            </h4>
                            <p className="pera line-clamp-2">
                              buổi Tối Tuyệt Vời Esc apade Bắt Đầu Từ Madinat
                              jumeirah Đến Đài Phun Nước Âm Nhạc Để Xem Người Khác.
                              buổi Tối Tuyệt VờiEscapade Bắt Đầu Từ Madinat
                              jumeirah Đến Các Đài Phun Nước Âm Nhạc Để Xem Người Khác
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="single-list">
                      <a href="tour-details">
                        <div className="search-flex">
                          <div className="content-img">
                            <img src="/src/assets/images/gallery/search-img-2.jpeg" alt="travello" />
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
                      <a href="tour-details">
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
                      <h4 className="search-label">Gần đây</h4>
                    </li>
                    <li className="single-list">
                      <a href="tour-details">
                        <div className="search-flex">
                          <div className="content-img">
                            <img src="/src/assets/images/gallery/search-img-1.jpeg" alt="travello" />
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
                      <a href="tour-details">
                        <div className="search-flex">
                          <div className="content-img">
                            <img src="/src/assets/images/gallery/search-img-2.jpeg" alt="travello" />
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
                      <a href="tour-details">
                        <div className="search-flex">
                          <div className="content-img">
                            <img src="/src/assets/images/gallery/search-img-3.jpeg" alt="travello" />
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
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="right-section" id="filterMenu">
                    <h4 className="title">tùyChọnLọc</h4>
                    {/* List of Filter */}
                    <ul className="listing">
                      <li>
                        <h4 className="search-label">Loại bài </h4>
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
    {/* Hero area S t a r t*/}
    <section className="hero-area-bg hero-padding1">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8">
            <div className="hero-caption-one position-relative">
              <h4 className="title wow fadeInUp" data-wow-delay="0.0s">Những điểm du lịch tốt nhất thế giới </h4>
              <p className="pera wow fadeInUp" data-wow-delay="0.1s">
             Lorem Ipsum Dolor ngồi ampe, lãnh sự.Cục Urn đường phố
DUI cần một sự chăm sóc tự động.Có một bất động sản người tiêu dùng xe
họng.Đến khu vực Fewow FadeInup "Data-Wow-Delay =" 0.0s "Ugiat Facilisi hoặc Mũi tên đang chạy
Mũi tên.
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
                <p className="pera">Khách hàng hạnh phúc</p>
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
                   Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                  </div>
                  {/* Single */}
                  <div className="swiper-slide">
                    <video className="hero-slider-video" loop autoPlay muted>
                      <source src="/src/assets/images/hero/hero-slider1.mp4" type="video/mp4" />
                   Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                  </div>
                  {/* Single */}
                  <div className="swiper-slide">
                    <video className="hero-slider-video" loop autoPlay muted>
                      <source src="/src/assets/images/videos/travel11.mp4" type="video/mp4" />
                   Trình duyệt của bạn không hỗ trợ thẻ video.
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
              <h4 className="select2-title">Điểm đến</h4>
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
              <h4 className="select2-title">Loại du lịch</h4>
            </div>
            <select className="destination-dropdown">
              <option value="1"> Loại đặt phòng</option>
              <option value="2"> Loại trước</option>
              <option value="3"> Loại sách trước </option>
            </select>
          </div>
          <div className="divider plan-divider d-none d-lg-block" />
          <div className="dropdown-section">
            <div className="d-flex gap-10 align-items-center">
              <i className="ri-time-line" />
              <div className="custom-dropdown custom-date">
                <h4 className="title"> Ngày từ</h4>
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
                <h4 className="title">Khách</h4>
                <div className="arrow">
                  <i className="ri-arrow-down-s-line" />
                </div>
              </div>
            </div>
            <div className="user-result">02</div>
            <div className="user-picker dropdown-shadow">
              <div className="user-category">
                <div className="category-name">
                  <h4 className="title">Người lớn</h4>
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
                  <h4 className="title">Những đứa trẻ</h4>
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
                  <h4 className="title">Trẻ sơ sinh</h4>
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
                <a href="javascript:void(0)" className="done-btn">xong</a>
              </div>
            </div>
          </div>
          <div className="sign-btn">
            <a href="tour-list" className="btn-secondary-lg">Kế hoạch tìm kiếm</a>
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
              <span className="highlights">Ưu đãi đặc biệt</span>
              <h4 className="title">
              Mùa đông những lời đề nghị lớn của chúng tôi để truyền cảm hứng cho bạn
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <a href="tour-list" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offer-1.png" alt="travello" />
              <div className="offer-content">
                <p className="highlights-text"> Tiết kiệm đến</p>
                <h4 className="title">50%</h4>
                <p className="pera">Hãy cùng khám phá thế giới </p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30">Đặt phòng ngay </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6">
            <a href="tour-list" className="offer-banner imgEffect4 wow fadeInRight" data-wow-delay="0.0s">
              <img src="/src/assets/images/gallery/offer-2.png" alt="travello" />
              <div className="offer-content-two">
                <h4 className="title"> Khách sạn gần đó</h4>
                <p className="pera">
                  Up to <span className="highlights-text">50%</span> Tắt tốt nhất
Khách sạn gần
                </p>
                <div className="location">
                  <i className="ri-map-pin-line" />
                  <p className="name">Bangkok, Thailand</p>
                </div>
                <div className="btn-secondary-sm radius-30"> Đặt phòng ngay </div>
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
              <span className="highlights"> Về chúng tôi</span>
              <h4 className="title">Trải nghiệm thế giới với công ty của chúng tôi </h4>
              <p className="pera">
              Lorem Ipsum Dolor ngồi ampe, lãnh sự.Cục Urn đường phố
DUI cần một sự chăm sóc tự động.Có một bất động sản người tiêu dùng xe
họng.Ra trái đất, EU tạo điều kiện hoặc mũi tên đang chạy
Mũi tên.
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
                  <h4 className="title">Đảm bảo giá tốt nhất</h4>
                  <p className="pera">
                  A "Đảm bảo giá tốt nhất" is a commitment offered by
businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
              <div className="key-point" id="v-pills-two-tab" data-bs-toggle="pill" data-bs-target="#v-pills-two" role="tab" aria-controls="v-pills-two" aria-selected="false">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">Dễ dàng & amp;Đặt phòng nhanh</h4>
                  <p className="pera">
                  A "Đảm bảo giá tốt nhất" is a commitment offered by
businesses, typically in the retail or hospitality
                  </p>
                </div>
              </div>
              <div className="key-point" id="v-pills-three-tab" data-bs-toggle="pill" data-bs-target="#v-pills-three" role="tab" aria-controls="v-pills-three" aria-selected="false">
                <div className="key-icon">
                  <span>$</span>
                </div>
                <div className="key-content">
                  <h4 className="title">Hướng dẫn viên du lịch</h4>
                  <p className="pera">
                  A "Đảm bảo giá tốt nhất" is a commitment offered by
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
A "Đảm bảo giá tốt nhất" is a commitment offered by
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
              <span className="highlights">Danh sách đích</span>
              <h4 className="title">
               khámPháNhữngNơiTuyệtĐẹpTrênThếGiới
              </h4>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <a href="destination-details" className="destination-banner">
              <img src="/src/assets/images/destination/destination-1.png" alt="travello" />
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
          <div className="col-xl-5 col-lg-5 col-md-5">
            <a href="destination-details" className="destination-banner">
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
                <a href="destination-details" className="destination-banner">
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
                <a href="destination-details" className="destination-banner">
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
                <a href="destination-details" className="destination-banner">
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
              <h4 className="title">Chúng tôi đã được đề cập trong các thương hiệu dưới đây</h4>
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
              <span className="highlights">Gói phổ biến</span>
              <h4 className="title">
     Địa điểm du lịch yêu thích nhất trên thế giới
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-4.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-3.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-2.png" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-10.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-5.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-6.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-7.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 Ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-8.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-9.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-10.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-11.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-12.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-13.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-14.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-15.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-16.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-17.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera"> 3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 Người</p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-18.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-19.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
                        <a href="tour-details">
                          <img src="/src/assets/images/package/package-20.jpg" alt="travello" />
                        </a>
                        <div className="image-badge">
                          <p className="pera">Đặc sắc</p>
                        </div>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">dusitd2SamyanBangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="packages-person">
                          <div className="count">
                            <i className="ri-time-line" />
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người </p>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">Từ</p>
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
              <a href="tour-list">
                <div className="btn-primary-icon-sm">
                  <p className="pera">Xem tất cả các tour du lịch </p>
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
              <span className="highlights">Chứng thực</span>
              <h4 className="title">
             Những gì mọi người đã nói về dịch vụ của chúng tôi
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Và rất nhiều số không trong
Hộp.Tincidunt DUI hoặc đại học là xấu xí
hoặc tại khóa học.Sô cô la bóng đá Mattis Ultricies
mạng sống.
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
                  <p className="pera">Tất cả khách hàng nói</p>
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
                    <p className="pera">Thanh toán một lần</p>
                  </div>
                </div>
                <ul className="feature-points">
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Hơn 20 đối tác</p>
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
                    <p className="pera">Lorem rất cà rốt</p>
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
                    <p className="pera">Công cụ đặt phòng trực tuyến</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Hãy thử ngay </span>
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
                    <p className="pera">Tin nhắn hàng loạt</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Lorem rất thông minh sit amet</p>
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
                    <p className="pera">Công cụ đặt phòng trực tuyến</p>
                  </li>
                  <li className="feature-point disable">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Hãy thử ngay </span>
                      <i className="ri-arrow-right-up-line" />
                    </div>
                  </a>
                </div>
                <div className="imp-note">
                  <p className="pera">Mỗi tháng +1,9% mỗi lần đặt phòng trực tuyến</p>
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
                  <p className="pera">Tốt nhất cho các nhu cầu cá nhân và cơ bản </p>
                </div>
                <ul className="feature-points">
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
                    <p className="pera">Lorem rất thông minh sit amet</p>
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
                    <p className="pera">Công cụ đặt phòng trực tuyến</p>
                  </li>
                  <li className="feature-point">
                    <div className="tick-icon">
                      <i className="ri-check-line" />
                    </div>
                    <p className="pera">Máy quét danh thiếp</p>
                  </li>
                </ul>
                <div className="button-section">
                  <a href="payment">
                    <div className="btn-primary-icon-outline">
                      <span className="pera">Liên hệ</span>
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
              <span className="highlights">Tin tức &amp; Bài báo</span>
              <h4 className="title">
                Latest Tin tức &amp; Bài viết Từ The Blog Bài viết
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
                  <span className="heading-pera">Hướng dẫn viên du lịch</span>
                </div>
                <h4 className="title">
                  <a href="javascript:void(0)">Thế giới là một cuốn sách và những người không đi du lịch đọc
Chỉ một
Một trang.</a>
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
                  <span className="heading-pera">Hướng dẫn viên du lịch</span>
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
                  <span className="heading-pera">Hướng dẫn viên du lịch</span>
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
                <a href="news">
                  <div className="btn-primary-icon-sm">
                    <p className="pera">Xem tất cả Tin tức</p>
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
                <span className="highlight"> Nền tảng của chúng tôi </span>
                <h4 className="title">
                Thưởng thức và đặt ứng dụng này trên toàn thế giới
                </h4>
                <p className="pera">
                  Lorem rất Thôn Minh SIT AMET tăng cường.Trò chuyện cuối tuần
Earth ID Vận tải Vận động.Sapien không bỏ lỡ nụ cười
                </p>
              </div>
              <div className="hero-footer position-relative">
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".2s">
                  <div className="video-player">
                    <i className="ri-play-fill" />
                  </div>
                </a>
                <a href="javascript:void(0)" className="pera position-relative">Tải xuống ứng dụng của chúng tôi </a>
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
                  <h4 className="title">Công ty</h4>
                  <ul className="listing">
                    <li className="single-lsit">
                      <a href="about">Về Chúng tôi</a>
                    </li>
                    <li className="single-lsit">
                      <a href="news">Tin tức</a>
                    </li>
                    <li className="single-lsit"><a href="faq">Câu hỏi thường gặp</a></li>
                    <li className="single-lsit">
                      <a href="contact">Liên Hệ</a>
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
                    <li className="single-lsit"><a href="faq">Câu hỏi thường gặp</a></li>
                    <li className="single-lsit">
                      <a href="tour-list">Chuyến du lịch Danh sách</a>
                    </li>
                    <li className="single-lsit">
                      <a href="destination">Điểm đến</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-footer-caption">
                <div className="footer-tittle">
                  <h4 className="title">Liên kết nhanh</h4>
                  <ul className="listing">
                    <li className="single-lsit"><a href="index">Trang chủ</a></li>
                    <li className="single-lsit">
                      <a href="about">Về Chúng Tôi</a>
                    </li>
                    <li className="single-lsit">
                      <a href="contact">Liên Hệ với chúng tôi</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="single-footer-caption">
                <div className="footer-tittle">
                  <h4 className="title">Liên Hệ</h4>
                  <ul className="listing">
                    <li className="single-lsit">
                      <a href="#" className="mb-20 d-block">70 Cầu Giấy,châu Úc</a>
                    </li>
                    <li className="single-lsit">
                      <a href="#">
                        <div className="d-flex gap-12">
                          <i className="ri-phone-line" />(00) +888 123456 789
                        </div>
                      </a>
                    </li>
                    <li className="single-lsit">
                      <a href="#">
                        <div className="d-flex gap-12">
                          <i className="ri-mail-line" />example@gmail.com
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
                <a href="terms-condition" className="single"> Điều khoản của Việt Nam</a>
              </li>
              <li className="single-list">
                <a href="privacy-policy" className="single"> Tuyên bố về quyền riêng tư và cookie</a>
              </li>
              <li className="single-list">
                <a href="contact" className="single"> Cách thức hoạt động của trang web </a>
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
                  © <span className="current-year">2023</span> initTheme. All rights reserved
                </p>
                <p className="pera">Được cung cấp bởi @Travello</p>
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