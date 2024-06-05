import React from 'react'

const TermsCondition = () => {
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
                              <p className="pera">Gửi email bất cứ lúc nào </p>
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
                              <p className="pera">Gọi bất cứ lúc nào </p>
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
                                  <a href="about.html" className="single">về</a>
                                </li>
                                <li className="single-list">
                                  <a href="destination.html" className="single">Điểm đến</a>
                                </li>
                                <li className="single-list">
                                  <a href="tour-list.html" className="single">Gói du lịch </a>
                                </li>
                                <li className="single-list">
                                  <a href="javascript:void(0)" className="single link-active">Trang <i className="ri-arrow-down-s-line" /></a>
                                  <ul className="submenu">
                                    <li className="single-list">
                                      <a href="tour-details.html" className="single">Chi tiết du lịch </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="news-details.html" className="single">Chi tiết tin tức </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="destination-details.html" className="single">Chi tiết điểm đến </a>
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
                                            Mật khẩu</a>
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
                                      <a href="privacy-policy.html" className="single">sự riêng tư
                                        Chính sách </a>
                                    </li>
                                    <li className="single-list">
                                      <a href="terms-condition.html" className="single">Điều khoản-Điều kiện </a>
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
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Điều kiện điều kiện</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index.html" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Điều kiện điều kiện</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Terms Condition Area S t a r t*/}
          <div className="terms-condition area section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Giới thiệu</h5>
                    <p className="pera">Nếu bạn muốn mua bất kỳ sản phẩm hoặc dịch vụ nào có sẵn thông qua dịch vụ (mua hàng trực tuyến), bạn có thể được yêu cầu cung cấp một số thông tin nhất định liên quan đến giao dịch mua hàng của bạn, bao gồm nhưng không giới hạn, số thẻ tín dụng hoặc số thẻ ghi nợ của bạn, ngày hết hạn của thẻ, địa chỉ thanh toán của bạn và thông tin vận chuyển của bạn.Bạn tuyên bố và bảo đảm rằng: (i) bạn có quyền hợp pháp để sử dụng bất kỳ (các) phương thức thanh toán nào khác liên quan đến bất kỳ giao dịch mua nào;và rằng (ii) thông tin bạn cung cấp cho chúng tôi là đúng, chính xác và đầy đủ.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Communications</h5>
                    <p className="pera">Lorem rất cà rốt, nhà phát triển Adipising nâng cao bắt buộc.Bạn có muốn trả tiền không?
                      Được gọi là niềm vui
                      Tâm trí là trách móc.Lỗi toàn bộ với một trong số đó tồn tại
                      lợi thế.Không có gì
                      Laudantem làm những con nợ của ai?</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Purchases</h5>
                    <p className="pera mb-20">Nếu bạn muốn mua bất kỳ sản phẩm hoặc dịch vụ nào có sẵn thông qua
                      Dịch vụ
                      .
                      bao gồm nhưng không
                      giới hạn, số thẻ tín dụng hoặc thẻ ghi nợ của bạn, ngày hết hạn của thẻ,
                      Địa chỉ thanh toán,
                      và thông tin vận chuyển của bạn.Bạn tuyên bố và bảo đảm rằng: (i) bạn có hợp pháp
                      quyền sử dụng bất kỳ
                      (các) thẻ hoặc (các) phương thức thanh toán khác liên quan đến bất kỳ giao dịch mua nào;và đó (ii)
                      thông tin bạn
                      Cung cho chúng tôi là đúng, chính xác và đầy đủ.</p>
                    <p className="pera mb-20">Chúng tôi có thể sử dụng việc sử dụng các dịch vụ của bên thứ ba cho mục đích
                      tạo điều kiện
                      Thanh toán và hoàn thành mua hàng.Bằng cách gửi thông tin của bạn, bạn cấp cho chúng tôi
                      có quyền
                      Cung cấp thông tin cho các bên thứ ba này tuân theo chính sách bảo mật của chúng tôi. </p>
                    <p className="pera mb-20"> Chúng tôi có quyền từ chối hoặc hủy đơn hàng của bạn bất cứ lúc nào
                      reasons
                      including but not limited to: product or service availability, errors in the description
                      or price of the
                      product or service, error in your order or other reasons.</p>
                    <p className="pera mb-20">Chúng tôi có quyền từ chối hoặc hủy đơn đặt hàng của bạn nếu gian lận hoặc
                      trái phép hoặc
                      Giao dịch bất hợp pháp bị nghi ngờ.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Các cuộc thi, rút ​​thăm trúng thưởng và khuyến mãi</h5>
                    <p className="pera mb-20">Bất kỳ cuộc thi, rút ​​thăm trúng thưởng hoặc các chương trình khuyến mãi khác (gọi chung là
                      "Chương trình khuyến mãi") đã được thực hiện
                      Có sẵn thông qua dịch vụ có thể được điều chỉnh bởi các quy tắc tách biệt với các Điều khoản này của các Điều khoản này
                      Dịch vụ.nếu bạn
                      Tham gia vào bất kỳ chương trình khuyến mãi nào, vui lòng xem lại các quy tắc áp dụng cũng như quyền riêng tư của chúng tôi
                      Chính sách.Nếu
                      Các quy tắc cho một cuộc xung đột khuyến mãi với các Điều khoản dịch vụ này, các quy tắc quảng cáo sẽ được áp dụng.
                    </p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Subscriptions</h5>
                    <p className="pera mb-20">Một số phần của dịch vụ được lập hóa đơn trên cơ sở đăng ký
                      ("Đăng ký (s)").Bạn
                      sẽ được lập hóa đơn trước trên cơ sở định kỳ và định kỳ ("chu kỳ thanh toán").Hóa đơn
                      chu kỳ sẽ được
                      Đặt tùy thuộc vào loại kế hoạch đăng ký bạn chọn khi mua
                      Đăng ký.</p>
                    <p className="pera mb-20">Vào cuối mỗi chu kỳ thanh toán, đăng ký của bạn sẽ tự động
                      gia hạn dưới
                      Các điều kiện chính xác tương tự trừ khi bạn hủy nó hoặc ban đầu Travello hủy bỏ nó.Bạn
                      Có thể hủy bỏ của bạn
                      Đổi mới đăng ký thông qua trang quản lý tài khoản trực tuyến của bạn hoặc bằng cách liên hệ
                    </p>
                    <p className="pera mb-20">Một phương thức thanh toán hợp lệ là bắt buộc phải xử lý thanh toán cho
                      đăng ký.Bạn
                      sẽ cung cấp cho người khởi xướng Travello thông tin thanh toán chính xác và đầy đủ
                      có thể bao gồm nhưng
                      không giới hạn tên đầy đủ, địa chỉ, trạng thái, mã bưu điện hoặc mã zip, số điện thoại và
                      Thanh toán hợp lệ
                      thông tin phương pháp.Bằng cách gửi thông tin thanh toán đó, bạn tự động ủy quyền
                      ban đầu
                      Travello tính phí tất cả các khoản phí đăng ký phát sinh thông qua tài khoản của bạn cho bất kỳ tài khoản nào
                      công cụ thanh toán.
                    </p>
                    <p className="pera mb-20">Nếu thanh toán tự động không xảy ra vì bất kỳ lý do gì, ban đầu
                      Dự trữ Travello
                      Quyền chấm dứt quyền truy cập của bạn vào dịch vụ có hiệu lực ngay lập tức.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Refunds</h5>
                    <p className="pera mb-20">Chúng tôi cấp tiền hoàn lại cho các hợp đồng trong vòng 30 ngày kể từ khi mua ban đầu
                      sau đó
                      Hợp đồng. </p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Nội dung</h5>
                    <p className="pera mb-20">Dịch vụ của chúng tôi cho phép bạn đăng, liên kết, lưu trữ, chia sẻ và làm
                      có sẵn
                      Một số thông tin, văn bản, đồ họa, video hoặc tài liệu khác (nội dung trực tuyến).Bạn là
                      chịu trách nhiệm cho
                      Nội dung mà bạn đăng trên hoặc thông qua dịch vụ, bao gồm tính hợp pháp, độ tin cậy và
                      sự phù hợp.
                    </p>
                    <p className="pera mb-20">Bằng cách đăng nội dung trên hoặc thông qua dịch vụ, bạn đại diện và bảo đảm
                      rằng: (i)
                      Nội dung là của bạn (bạn sở hữu nó) và/hoặc bạn có quyền sử dụng nó và quyền cấp
                      chúng tôi các quyền
                      và giấy phép như được cung cấp trong các Điều khoản này và (ii) rằng việc đăng nội dung của bạn trên hoặc
                      thông qua dịch vụ
                      Không vi phạm quyền riêng tư, quyền công khai, bản quyền, quyền hợp đồng hoặc
                      bất kỳ quyền khác
                      của bất kỳ cá nhân hoặc tổ chức nào.Chúng tôi có quyền chấm dứt tài khoản của bất kỳ ai được tìm thấy
                      được xâm phạm
                      trên một bản quyền.</p>
                    <p className="pera mb-20">Bạn giữ lại bất kỳ và tất cả các quyền của bạn đối với bất kỳ nội dung nào bạn gửi, đăng
                      hoặc hiển thị trên
                      hoặc thông qua dịch vụ và bạn có trách nhiệm bảo vệ các quyền đó.Chúng tôi không có
                      trách nhiệm và
                      Không có trách nhiệm đối với nội dung bạn hoặc bất kỳ bài đăng của bên thứ ba nào trên hoặc thông qua dịch vụ.
                      Tuy nhiên, bằng cách đăng
                      Nội dung sử dụng dịch vụ Bạn cấp cho chúng tôi quyền và giấy phép để sử dụng, sửa đổi, công khai
                      thực hiện, công khai
                      Hiển thị, sao chép và phân phối nội dung đó trên và thông qua dịch vụ.Bạn đồng ý rằng
                      Giấy phép này
                      Bao gồm quyền cho chúng tôi cung cấp nội dung của bạn cho người dùng dịch vụ khác, những người
                      cũng có thể sử dụng
                      Nội dung của bạn tuân theo các điều khoản này.</p>
                    <p className="pera mb-20">initthemetravello có quyền nhưng không phải là nghĩa vụ giám sát và
                      chỉnh sửa tất cả
                      Nội dung được cung cấp bởi người dùng.</p>
                    <p className="pera mb-20">Ngoài ra, nội dung được tìm thấy trên hoặc thông qua dịch vụ này là tài sản
                      của inittheme
                      Travello hoặc được sử dụng với sự cho phép.Bạn không được phân phối, sửa đổi, truyền, tái sử dụng,
                      Tải xuống, đăng lại,
                      sao chép, hoặc sử dụng nội dung đã nói, dù toàn bộ hoặc một phần, cho mục đích thương mại hoặc
                      lợi ích cá nhân,
                      không có sự cho phép viết trước bằng văn bản từ chúng tôi.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Prohibited Uses</h5>
                    <p className="pera mb-20">Bạn chỉ có thể sử dụng dịch vụ cho các mục đích hợp pháp và theo
                      Điều kiện.Bạn đồng ý
                      Không sử dụng dịch vụ:</p>
                    <p className="pera mb-20">0,1.Bằng mọi cách vi phạm bất kỳ quốc gia hoặc quốc tế hiện hành
                      luật pháp hoặc
                      Quy định. </p>
                    <p className="pera mb-20">0,2.Với mục đích khai thác, gây hại hoặc cố gắng khai thác
                      hoặc làm hại trẻ vị thành niên
                      theo bất kỳ cách nào bằng cách phơi bày chúng với nội dung không phù hợp hoặc cách khác.</p>
                    <p className="pera mb-20">0.3. Để truyền tải, hoặc mua sắm, bất kỳ quảng cáo hoặc
                      quảng cáo
                      tài liệu, bao gồm bất kỳ thư rác nào của người ”
                      chào mời.</p>
                    <p className="pera mb-20">0,4.Để mạo danh hoặc cố gắng mạo danh công ty, một công ty
                      Nhân viên, người khác
                      người dùng hoặc bất kỳ người hoặc thực thể nào khác.</p>
                    <p className="pera mb-20"> 0,5.Theo bất kỳ cách nào xâm phạm quyền của người khác, hoặc trong bất kỳ
                      Cách là bất hợp pháp,
                      đe dọa, gian lận hoặc có hại hoặc liên quan đến bất kỳ bất hợp pháp, bất hợp pháp,
                      gian lận, hoặc có hại
                      mục đích hoặc hoạt động</p>
                    <p className="pera mb-20"> 0,6.Tham gia vào bất kỳ hành vi nào khác hạn chế hoặc ức chế
                      Bất cứ ai sử dụng hoặc
                      Tận hưởng dịch vụ, hoặc theo quyết định của chúng tôi, có thể gây hại hoặc xúc phạm công ty hoặc người dùng
                      dịch vụ hoặc
                      phơi bày chúng với trách nhiệm pháp lý.</p>
                    <p className="pera mb-20"> 0,1.Sử dụng dịch vụ theo bất kỳ cách nào có thể vô hiệu hóa, quá tải, thiệt hại,
                      hoặc suy yếu
                      Dịch vụ hoặc can thiệp vào bất kỳ bên nào khác sử dụng dịch vụ, bao gồm cả khả năng của họ
                      Tham gia vào thực tế
                      hoạt động thời gian thông qua dịch vụ.</p>
                    <p className="pera mb-20">0,2.Sử dụng bất kỳ robot, nhện hoặc thiết bị tự động khác, hoặc
                      có nghĩa là truy cập
                      Dịch vụ cho bất kỳ mục đích nào, bao gồm giám sát hoặc sao chép bất kỳ tài liệu nào trên dịch vụ.
                    </p>
                    <p className="pera mb-20">0,3.Sử dụng bất kỳ quy trình thủ công nào để giám sát hoặc sao chép bất kỳ tài liệu nào trên
                      Dịch vụ hoặc cho
                      Bất kỳ mục đích trái phép nào khác mà không có sự đồng ý trước bằng văn bản của chúng tôi.</p>
                    <p className="pera mb-20">0,4.Sử dụng bất kỳ thiết bị, phần mềm hoặc thói quen nào can thiệp vào
                      làm việc đúng đắn của
                      Dịch vụ.</p>
                    <p className="pera mb-20">0,5.Giới thiệu bất kỳ virus, ngựa trojan, sâu, bom logic, hoặc
                      vật liệu khác
                      đó là độc hại hoặc có hại về công nghệ.</p>
                    <p className="pera mb-20"> 0,6.Cố gắng để có được quyền truy cập trái phép, can thiệp vào, thiệt hại,
                      hoặc phá vỡ bất kỳ
                      các bộ phận của dịch vụ, máy chủ mà dịch vụ được lưu trữ hoặc bất kỳ máy chủ, máy tính hoặc
                      cơ sở dữ liệu được kết nối
                      phục vụ.</p>
                    <p className="pera mb-20"> 0,7.Dịch vụ tấn công thông qua một cuộc tấn công từ chối dịch vụ hoặc phân phối
                      Tấn công từ chối dịch vụ.</p>
                    <p className="pera mb-20">0,8.Thực hiện bất kỳ hành động nào có thể làm hỏng hoặc làm sai lệch xếp hạng của công ty.</p>
                    <p className="pera mb-20">0,9.Nếu không thì cố gắng can thiệp vào hoạt động đúng đắn của
                      Dịch vụ. </p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Chính sách bản quyền</h5>
                    <p className="pera mb-20">Chúng tôi tôn trọng quyền sở hữu trí tuệ của người khác.Nó là của chúng tôi
                      chính sách để trả lời
                      với bất kỳ khiếu nại nào mà nội dung được đăng trên dịch vụ vi phạm bản quyền hoặc bản quyền khác
                      sở hữu trí tuệ
                      Quyền (Vi phạm vi phạm) của bất kỳ cá nhân hoặc tổ chức nào.</p>
                    <p className="pera mb-20">Nếu bạn là chủ sở hữu bản quyền, hoặc được ủy quyền thay mặt cho một người, và bạn
                      Tin rằng
                      Công việc có bản quyền đã được sao chép theo cách cấu thành vi phạm bản quyền,
                      Vui lòng gửi
                      Yêu cầu của bạn qua email, với dòng chủ đề: vi phạm bản quyền và bao gồm trong
                      Yêu cầu của bạn a
                      Mô tả chi tiết về hành vi vi phạm bị cáo buộc như chi tiết dưới đây, theo Thông báo DMCA
                      và thủ tục cho
                      Yêu cầu vi phạm bản quyền</p>
                    <p className="pera mb-20">Bạn có thể phải chịu trách nhiệm về các thiệt hại (bao gồm cả chi phí và
                      Luật sư Phí) cho
                      tuyên bố sai hoặc yêu cầu tín ngưỡng xấu về việc vi phạm bất kỳ nội dung nào được tìm thấy trên và/hoặc
                      thông qua dịch vụ
                      về bản quyền của bạn.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-0">
                    <h5 className="title font-600">Acknowledgement</h5>
                    <p className="pera mb-20">Bằng cách sử dụng dịch vụ hoặc các dịch vụ khác do chúng tôi cung cấp, bạn thừa nhận
                      Mà bạn có
                      Đọc các Điều khoản dịch vụ này và đồng ý bị ràng buộc bởi họ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End-of Terms Condition */}
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
                      <p className="pera">Được cung cấp bởi Việt Nam</p>
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

export default TermsCondition
