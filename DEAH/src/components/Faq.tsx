import React from 'react'

const Faq = () => {
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
                            <a href="index.html"><img src="/src/images/logo/logo.png" alt="logo" className="changeLogo" /></a>
                          </div>
                          {/* search box */}
                          <div className="search-box search-bar d-none d-lg-block">
                            <div className="header-search">
                              <span className="pera">Điểm đến, điểm thu hút </span>
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
                                  <a href="javascript:void(0)" className="single">Trang chủ <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    {/* <li className="single-list">
                                      <a href="index.html" className="single">Trang chủ 01</a>
                                    </li> */}
                                    <li className="single-list">
                                      <a href="index-two.html" className="single">Trang chủ </a>
                                    </li>
                                    {/* <li className="single-list">
                                      <a href="index-three.html" className="single">Trang chủ 03</a>
                                    </li> */}
                                  </ul>
                                </li>
                                <li className="single-list ">
                                  <a href="about.html" className="single">Về</a>
                                </li>
                                <li className="single-list">
                                  <a href="destination.html" className="single">Điểm đến</a>
                                </li>
                                <li className="single-list">
                                  <a href="tour-list.html" className="single">Gói du lịch</a>
                                </li>
                                <li className="single-list">
                                  <a href="javascript:void(0)" className="single link-active">Trang <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    <li className="single-list">
                                      <a href="tour-details.html" className="single">Chi tiết tour du lịch</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="news-details.html" className="single">Chi tiết tin tức</a>
                                    </li>
                                    <li className="single-list">
                                      <a href="destination-details.html" className="single">Điểm đến Details</a>
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
                                          <a href="forgot-pass.html" className="single">FQuên mật khẩu</a>
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
                                      <a href="faq.html" className="single">Câu hỏi thường gặp </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="privacy-policy.html" className="single">sự riêng tư
                                        Chính sách </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="terms-condition.html" className="single"> Điều khoản-Điều kiện </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="single-list">
                                  <a href="news.html" className="single">Tin tức </a>
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
                                      <a href="login.html" className="btn-secondary-sm">Dấu hiệu
                                        Trong </a>
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
                                  <a href="login.html" className="btn-secondary-sm">Đăng nhập </a>
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
                    <kbd className="light-text"> ESC </ kbd>
                  </button>
                </div>
              </div>
              <div className="body-section">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="listing">
                      <li>
                        <h4 className="search-label">Gần đây </h4>
                      </li>
                      <li className="single-list">
                        <a href="tour-details.html">
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
                        <h4 className="search-label">Gần đây </h4>
                      </li>
                      <li className="single-list">
                        <a href="tour-details.html">
                          <div className="search-flex">
                            <div className="content-img">
                              <img src="/src/images/gallery/search-img-1.jpeg" alt="travello" />
                            </div>
                            <div className="content">
                              <h4 className="title line-clamp-1">
                                Dubai by Night City Tour VớI Fountain Show
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
                      <h4 className="title"> Tùy chọn lọc </h4>
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
                              <p className="pera">Bài viết (3) </p>
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
                              <p className="pera">Bài viết (44) </ p>
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
                              <p className="pera">Bài viết (3) </p>
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
                              <p className="pera">Bài viết (44) </ p>
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
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">câu Hỏi Thường Gặp</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index.html" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">câuHỏiThườngGặp</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Any Question Area S t a r t */}
          <section className="question-area section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  {/* Section Tittle */}
                  <div className="section-tittle mb-50">
                    <h2 className="title font-700"> Mọi câu hỏi </h2>
                    <p className="pera"> Khi quyết định quyên góp cho tổ chức từ thiện nào, điều quan trọng là phải thực hiện tìm kiếm của bạn
                      và tìm một
                      phù hợp với các giá trị và sở thích của bạn. </p>
                  </div>
                  <div className="accordion" id="accordionExample">
                    {/* Single */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Have you weighed the potential risks and
                          benefits?</button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Khi quyết định quyên góp cho tổ chức từ thiện nào, điều đó rất quan trọng
                          để làm của bạn
                          Tìm kiếm. </div>
                      </div>
                    </div>
                    {/* Single */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed additional-styles" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How will you gather
                          Phản hồi từ các bên liên quan </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Khi quyết định quyên góp cho tổ chức từ thiện nào, điều đó rất quan trọng
                          để làm của bạn
                          tìm kiếm.</div>
                      </div>
                    </div>
                    {/* Single */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed additional-styles" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">There any
                          Tính bền vững hoặc đạo đức để tính đến?</button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Khi quyết định quyên góp cho tổ chức từ thiện nào, điều đó rất quan trọng
                          để làm của bạn
                          tìm kiếm.</div>
                      </div>
                    </div>
                    {/* Single */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed additional-styles" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">There any
                          Tính bền vững hoặc đạo đức để tính đến?</button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Khi quyết định quyên góp cho tổ chức từ thiện nào, điều đó rất quan trọng
                          để làm của bạn
                          tìm kiếm.</div>
                      </div>
                    </div>
                    {/* Single */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed additional-styles" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">There any
                          Lorem rất thông minh Nibh Dinh dưỡng</button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Khi quyết định quyên góp cho tổ chức từ thiện nào, điều đó rất quan trọng
                          để làm của bạn
                          tìm kiếm.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <img className="w-100 d-none d-lg-block tilt-effect radius-10" src="/src/images/gallery/faq.jpg" alt="image" />
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Question Area */}
          {/* FAQs S t r t */}
          <div className="faqs-area bottom-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Cà rốt tăng cường</h5>
                    <p className="pera mb-20">Lorem anh ấy C. rốt tăng cường.Nibh Dinh dưỡng hoặc chưa
                      Bóng đá Malesuada
                      cư dân carton hoặc.Nếu ID tác giả lâm sàng không có sinh viên sư tử nào của bóng đá.Hơn chất chống oxy hóa
                      cũ, đường kính của tôi.
                      Yếu tố hiệu suất chuối tại môi trường.Vui lòng kiểm tra các nhà phát triển của nhà phát triển Protein vào ngày mai
                      chế tạo.Chính nó
                      Trang trí của </ p>
                    {/* Single Listing */}
                    <ul className="experience listing listing2">
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Bắt buộc tăng cường.Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Cà rốt tăng cường.Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Lorem rất thông minh Nibh Dinh dưỡng</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">ipsum Cà rốt tăng cường. Nibh pellentesque</p>
                      </li>
                    </ul>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Lorem rất thông minh</h5>
                    <p className="pera mb-20">Lorem anh ấy C. rốt tăng cường.Nibh Dinh dưỡng hoặc chưa
                      Bóng đá Malesuada
                      cư dân carton hoặc.Nếu ID tác giả lâm sàng không có sinh viên sư tử nào của bóng đá.Hơn chất chống oxy hóa
                      cũ, đường kính của tôi.
                      Yếu tố hiệu suất chuối tại môi trường.Vui lòng kiểm tra các nhà phát triển của nhà phát triển Protein vào ngày mai
                      chế tạo.Chính nó
                      Bóng đá khấu trừ tại lâm sàng hoặc xấu xí.Nhà phát triển Mũi tên Mass là nụ cười sô cô la hoặc
                      URN.Men
                      Truyền hình xấu xí nhưng trẻ em có một nụ cười cho trẻ em.Cảnh sát chính thống run rẩy
                      Massa </ p>
                    <p className="pera mb-20"> Arcu et Justo Quis Aennean Sed.Sollicitudin Eget Mus Semper Vitae Nibh
                      Eget Toror
                      hàng hóa.Cursus vel Scleerisque UT tại.Lacus Orci Vel Dolor Eget Velit Aliquet.Nhân Mã
                      Laoreet non Sed
                      Mattis Trisque A ut.Volutpat hậu quả.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-0">
                    <h5 className="title font-600">Nhìn nhận</h5>
                    <p className="pera mb-20"> Bằng cách sử dụng dịch vụ hoặc các dịch vụ khác do chúng tôi cung cấp, bạn thừa nhận
                      Mà bạn có
                      Đọc các Điều khoản dịch vụ này và đồng ý bị ràng buộc bởi họ.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-0">
                    <h5 className="title font-600">Liên hệ Us</h5>
                    <p className="pera mb-20 text-normal">Email: <a href="#">initTheme@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End-of FAQs*/}
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
                            <a href="about.html">Về chúng tôi</a>
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
                            <a href="about.html">Về chúng tôi</a>
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
                        <h4 className="title">Liên hệ</h4>
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
                        Du lịch là một trải nghiệm biến đổi và phong phú
                        cho phép các cá nhân khám phá các điểm đến, văn hóa mới,
                        và phong cảnh.
                      </p>
                    </div>
                    <div className="footer-right">
                      <h4 className="title">Đăng ký bản tin của chúng tôi </h4>
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
                      <a href="terms-condition.html" className="single">Điều khoản của Hoa Kỳ</a>
                    </li>
                    <li className="single-list">
                      <a href="privacy-policy.html" className="single">Tuyên bố về quyền riêng tư và cookie </a>
                    </li>
                    <li className="single-list">
                      <a href="contact.html" className="single"> Cách thức hoạt động của trang web</a>
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

export default Faq
