import React from 'react'

const New = () => {
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
                                  <a href="tour-list.html" className="single">Gói du lịch </a>
                                </li>
                                <li className="single-list">
                                  <a href="javascript:void(0)" className="single">Trang <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    <li className="single-list">
                                      <a href="tour-details.html" className="single">Chuyến du lịch
Chi tiết </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="news-details.html" className="single">Tin tức
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
                                          <a href="verification.html" className="single">xác minh</a>
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
                                  <a href="news.html" className="single link-active">Tin tức</a>
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
                                Dubai by Night City Tour with Fountain show
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
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="right-section" id="filterMenu">
                      <h4 className="title">Tùy chọn lọc </h4>
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
          </div>
        </header>
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Tin tức</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index.html" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Tin tức</a></li>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title">
                        <a href="javascript:void(0)">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="author-img">
                            <img src="/src/images/news/news-1.jpeg" alt="travello" />
                          </div>
                          <p className="name">Chris Earth</p>
                        </div>
                        <p className="time"> 10 phút Đọc </p>
                      </div>
                    </div>
                    <div className="news-content" id="pills-news-two-tab" data-bs-toggle="pill" data-bs-target="#pills-news-two" role="tab" aria-controls="pills-news-two" aria-selected="true">
                      <div className="heading">
                        <span className="heading-pera">Hướng dẫn viên </span>
                      </div>
                      <h4 className="title">
                        <a href="javascript:void(0)">Một khách du lịch giỏi không có kế hoạch cố định và không có ý định
Đến. </a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="author-img">
                            <img src="/src/images/news/news-2.jpeg" alt="travello" />
                          </div>
                          <p className="name">David Warner</p>
                        </div>
                        <p className="time">10 phút đọc </p>
                      </div>
                    </div>
                    <div className="news-content" id="pills-news-three-tab" data-bs-toggle="pill" data-bs-target="#pills-news-three" role="tab" aria-controls="pills-news-three" aria-selected="true">
                      <div className="heading">
                        <span className="heading-pera">Hướng dẫn viên du lịch</span>
                      </div>
                      <h4 className="title">
                        <a href="javascript:void(0)">Chúng tôi du lịch, một số người trong chúng tôi mãi mãi, để tìm kiếm các tiểu bang khác,
Cuộc sống khác, những linh hồn khác. </a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="author-img">
                            <img src="/src/images/news/news-3.jpeg" alt="travello" />
                          </div>
                          <p className="name">David Malan</p>
                        </div>
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
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
                        <span className="heading-pera">Hướng dẫn du lịch </span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details.html">Thế giới là một cuốn sách và những người không đọc
Chỉ một
Một trang. </a>
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
                        <p className="time">10 phút đọc </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-12 text-center">
                  <div className="section-button d-inline-block">
                    <a href="javascript:void(0)">
                      <div className="btn-primary-icon-sm">
                        <i className="ri-loader-2-line" />
                        <p className="pera">Đang tải</p>
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
                        © <span className="current-year">2023</span> ban đầu.Tất cả các quyền
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

export default New
