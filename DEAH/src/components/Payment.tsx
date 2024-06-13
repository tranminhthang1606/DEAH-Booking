import React from 'react'

const Payment = () => {
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
                                  <a href="index-two" className="single">Trang Chủ </a>

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
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Sự chi trả</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Payment</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Destination area S t a r t */}
          <section className="tour-details-section section-padding2">
            <div className="tour-details-area">
              <div className="tour-details-container">
                <div className="container">
                  <div className="details-heading mb-30">
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
                            <p className="pera">3 ngày 2 đêm</p>
                          </div>
                          <div className="count">
                            <i className="ri-user-line" />
                            <p className="pera">2 người</p>
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
                        <p className="pera">4.7 (20 Reviews)</p>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-xl-8">
                      {/* Included Exclude*/}
                      <div className="tour-include-exclude m-0 mb-30 radius-6">
                        <div className="includ-exclude-point">
                          <h4 className="title">Bao gồm</h4>
                          <ul className="expect-list">
                            <li className="list">Tất cả các vé nhập cảnh của các điểm đến nhảy </li>
                            <li className="list">Bữa trưa Platter </li>
                            <li className="list"> Đồ ăn nhẹ buổi tối </li>
                            <li className="list"> Bộ sơ cứu (trong trường hợp khẩn cấp) </li>
                          </ul>
                        </div>
                        <div className="divider" />
                        <div className="includ-exclude-point">
                          <h4 className="title">Loại trừ </h4>
                          <ul className="expect-list">
                            <li className="list">Chi phí cá nhân </li>
                            <li className="list">Bất cứ điều gì khác không được đề cập trên các vùi </li>
                            <li className="list"> Dịch vụ bổ sung </li>
                            <li className="list"> những người khác và vv </li>
                          </ul>
                        </div>
                      </div>
                      {/*/ Included Exclude*/}
                      {/* Payment S t a r t */}
                      <div className="donation-payment">
                        {/* Payment */}
                        <div className="card-style box-shadow border-0">
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="contact-form mb-24">
                                  <label className="contact-label">Tên</label>
                                  <input className="form-control contact-input" type="text" placeholder="e.g Alex" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="contact-form mb-24">
                                  <label className="contact-label">Email</label>
                                  <input className="form-control contact-input" type="email" placeholder="e.g example@gmail.com" />
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-12 payment-gateway-wrapper mt-10">
                              <ul className="payment-gateway-list mb-10">
                                <li className="single-gateway-item selected"><img src="/src/assets/images/icon/payment-method1.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method2.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method3.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method4.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method6.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method7.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method8.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method10.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method12.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method13.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method15.png" alt="img" /></li>
                                <li className="single-gateway-item "><img src="/src/assets/images/icon/payment-method16.png" alt="img" /></li>
                              </ul>
                              <div className="remember-me terms-condition">
                                <label>
                                  <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                                  <small>I agree to all the
                                    <a href="terms-condition">
                                      <span className="text-primary">Terms</span></a> and <a href="privacy-policy"><span className="text-primary">Privacy policy</span>
                                    </a>
                                  </small>
                                  <span className="checkmark-style" />
                                </label>
                              </div>
                              <a href="javascript:void(0)" className="btn-primary-submit">Payment Now</a>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*End-of Payment */}
                    </div>
                    <div className="col-xl-4">
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
                        <h4 className="heading-card">Chọn Ngày và Khách du lịch </h4>
                        <div className="date-time-dropdown">
                          <i className="ri-time-line" />
                          <p className="date-time-result">Thứ Tư, ngày 17 tháng 1 năm 2023 </p>
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
                                <p className="pera">2-11 năm </p>
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
                                <p className="pera"> Belwo 2 năm </p>
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
                          <p className="pera"> Lên đến 24 giờ trước</p>
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
                      <div className="footer-title">
                        <h4 className="title text-white">Công ty</h4>
                        <ul className="list-unstyled">
                          <li className="single-list">
                            <a href="about">Về Chúng tôi</a>
                          </li>
                          <li className="single-list">
                            <a href="news  text-white">Tin tức</a>
                          </li>
                          <li className="single-list">
                            <a href="faq  text-white">Câu hỏi thường gặp</a>
                          </li>
                          <li className="single-list">
                            <a href="contact  text-white">Liên Hệ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-title">
                        <h4 className="title text-white">Khám phá</h4>
                        <ul className="list-unstyled">
                          <li className="single-list">
                            <a href="faq">Câu hỏi thường gặp</a>
                          </li>
                          <li className="single-list">
                            <a href="tour-list">Chuyến du lịch Danh sách</a>
                          </li>
                          <li className="single-list">
                            <a href="destination">Điểm đến</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-title">
                        <h4 className="title text-white">Liên kết nhanh</h4>
                        <ul className="list-unstyled">
                          <li className="single-list">
                            <a href="index">Trang chủ</a>
                          </li>
                          <li className="single-list">
                            <a href="about">Về Chúng Tôi</a>
                          </li>
                          <li className="single-list">
                            <a href="contact">Liên Hệ với chúng tôi</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer-caption">
                      <div className="footer-title">
                        <h4 className="title text-white">Liên Hệ</h4>
                        <ul className="list-unstyled">
                          <li className="single-list">
                            <a href="#" className="mb-3 d-block">70 Cầu Giấy, châu Úc</a>
                          </li>
                          <li className="single-list">
                            <a href="#">
                              <div className="d-flex gap-2">
                                <i className="ri-phone-line" />(00) +888 123456 789
                              </div>
                            </a>
                          </li>
                          <li className="single-list">
                            <a href="#">
                              <div className="d-flex gap-2">
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
            <div className="footer-bottom-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-between gap-2 flex-wrap">
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
        <div className="progressParent" id="back-top">
          <svg className="backCircle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <div className="search-overlay" />
      </div>

    </div>
  )
}

export default Payment
