import React from 'react'

const DestinationDetail = () => {
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
    {/* Breadcrumbs S t a r t */}
    <section className="breadcrumbs-area breadcrumb-bg">
      <div className="container">
        <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Điểm Đến</h1>
        <div className="breadcrumb-text">
          <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
            <ul className="breadcrumb listing">
              <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
              <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Điểm Đến</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    {/*/ End-of Breadcrumbs*/}
    {/* điểmĐến area S t a r t */}
    <section className="destination-details-section section-padding2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            {/* điểmĐến details banner */}
            <div className="destination-details-banner o-hidden radius-12">
              <div className="swiper destinationSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="/src/assets/images/destination/details.png" alt="travello" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/images/destination/details.png" alt="travello" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/images/destination/details.png" alt="travello" />
                  </div>
                </div>
              </div>
            </div>
            {/* / điểmĐến details banner*/}
            {/* Details content */}
            <div className="destination-details-content">
              <h4 className="title">Điểm đến xu hướng - Thế giới</h4>
              <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
đôi khi
để làm việc hoặc đau đớn.Làm thế nào là tối thiểu, ai tập thể dục mũi
Việc làm Ullamco
Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Tự động vào khoảnh khắc của một cơn đau irure trong bị chỉ trích
niềm vui được trở thành
Cura Pain Football không chạy nữa.Ngoại trừ là người da đen và không có nguyên tắc
đang ở trong lỗi
Các dịch vụ đó từ bỏ việc làm mềm là một món ăn nhẹ. "</p>
              <p className="pera">Tuy nhiên, để gặp phải tất cả sai lầm này là một công tố viên niềm vui
nỗi đau
Ca ngợi, toàn bộ điều cần mở, và những điều từ người sáng lập ra sự thật, và như thể
Kiến trúc sư may mắn
Cuộc sống đã được nói để giải thích.Không ai là niềm vui rằng niềm vui bị từ chối hoặc
ghét hoặc chạy
Nhưng vì họ đi theo những nỗi đau lớn của những người không biết niềm vui.Hoặc
Hơn nữa có
Chính nỗi đau vì cà rốt, được tăng cường, để có được, nhưng tôi không bao giờ
Như vậy a
Thời gian sự cố để làm việc và đau đớn để tìm kiếm một số niềm vui.Phải đi đến
Minima sẽ đến với bất kỳ ai
Đào tạo của chúng tôi là một sự đáng kinh ngạc, trừ khi bạn có một số người trong số họ quan tâm
hậu quả?
Một hoặc quyền của cô ấy để chỉ trích rằng trong niềm vui của cô ấy, xin vui lòng hơn không
khó chịu để đạt được
Hoặc là nỗi đau mà anh ấy tránh được niềm vui không còn nữa? "</p>
            </div>
            {/*/ details-content */}
            {/* info */}
            <div className="destination-details-info">
              <h4 className="title">Thông tin cơ bản</h4>
<div className = "Info-table">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Quốc Gia</th>
                      <td>Australia</td>
                    </tr>
                    <tr>
                      <th>Ngôn Ngữ</th>
                      <td> Tiếng Anh . Tiếng Việt</td>
                    </tr>
                    <tr>
                      <th>Mệnh Giá</th>
                      <td> VND </td>
                    </tr>
                    <tr>
                      <th>Dân Số</th>
                      <td>100 Triệu</td>
                    </tr>
                    <tr>
                      <th>Khu Vực</th>
                      <td>1500 M2</td>
                    </tr>
                    <tr>
                      <th>Thời gian đi Du lịch</th>
                      <td>Tháng 2, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /info  */}
            {/* Details content */}
            <div className="destination-details-content">
              <h4 className="title">Những gì để mong đợi</h4>
              <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
đôi khi
để làm việc hoặc đau đớn.Làm thế nào là tối thiểu, ai tập thể dục mũi
Việc làm Ullamco
Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Tự động vào khoảnh khắc của một cơn đau irure trong bị chỉ trích
niềm vui được trở thành
Cura Pain Football không chạy nữa.</p>
              <ul className="expect-list">
                <li className="list">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
đúng giờ
sự cố để làm việc hoặc đau.</li>
                <li className="list">Nhưng tôi phải gặp phải sai lầm rằng mọi người đều là một niềm vui
công tố viên đau đớn
Ca ngợi toàn bộ điều </li>
                <li className="list">Ngoại trừ những người rèm háo hức không làm dự đoán, chúng có lỗi với
văn phòng bị bỏ rơi
Làm dịu tâm hồn là đồ ăn nhẹ.</li>
                <li className="list">Nhưng họ sẽ buộc tội họ, và sự căm ghét thường xuyên của những người có
vuốt ve
niềm vui của quo và bị hỏng</li>
              </ul>
            </div>
            {/* / details content */}
            {/* accordion */}
            <div className="destination-accordion">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Trích dẫn tốt nhất trong du lịch là gì?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                      <ul className="listing">
                        <li className="list">
                        Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì cả....
                        </li>
                        <li className="list">
                        Du lịch đủ xa, bạn gặp chính mình....
                        </li>
                        <li className="list">
                        Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                        </li>
                        <li className="list">
                   "Mỗi năm một lần, đi đâu đó bạn chưa từng đến trước đây."
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Một trích dẫn tốt về du lịch là gì?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                      <ul className="listing">
                        <li className="list">
                        Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì cả....
                        </li>
                        <li className="list">
                   Du lịch đủ xa, bạn gặp chính mình....
                        </li>
                        <li className="list">
                 Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                        </li>
                        <li className="list">
                     "Mỗi năm một lần, đi đâu đó bạn chưa từng đến trước đây."
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                 Làm thế nào để bạn viết một báo giá cho một chuyến đi?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                      <ul className="listing">
                        <li className="list">
                        Cuộc sống là một cuộc phiêu lưu táo bạo hoặc không có gì cả....
                        </li>
                        <li className="list">
                 Du lịch đủ xa, bạn gặp chính mình....
                        </li>
                        <li className="list">
                 Bất cứ nơi nào bạn đi trở thành một phần của bạn bằng cách nào đó....
                        </li>
                        <li className="list">
                     "Mỗi năm một lần, đi đâu đó bạn chưa từng đến trước đây."
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / Accordion */}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="row g-4 position-static top-0">
              <div className="col-lg-12">
                {/* Offer Card */}
                <div className="destination-offer-three">
                  <div className="destination-content-offer">
                    <span className="highlights">20% off</span>
                    <h4 className="title">Cuộc phiêu lưu du lịch tốt nhất</h4>
                    <a href="payment" className="btn-secondary-sm radius-30">Đặt phòng ngay</a>
                  </div>
                </div>
                {/* / Offer card */}
              </div>
              <div className="col-lg-12">
                <div className="tour-list-card">
                  <h4 className="title">Danh sách du lịch</h4>
                  <ul className="tour-listing">
                    {/* Single */}
                    <li className="list">
                      <div className="package-img imgEffect4">
                        <a href="tour-details"><img src="/src/assets/images/destination/destination-4.png" alt="travello" /></a>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Single */}
                    <li className="list">
                      <div className="package-img imgEffect4">
                        <a href="tour-details"><img src="/src/assets/images/destination/destination-3.png" alt="travello" /></a>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Single */}
                    <li className="list">
                      <div className="package-img imgEffect4">
                        <a href="tour-details"><img src="/src/assets/images/destination/destination-2.png" alt="travello" /></a>
                      </div>
                      <div className="package-content">
                        <h4 className="area-name">
                          <a href="tour-details">Dusitd2 Samyan Bangkok</a>
                        </h4>
                        <div className="location">
                          <i className="ri-map-pin-line" />
                          <div className="name">Bangkok, Thailand</div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10">
                            <p className="light-pera">From</p>
                            <p className="pera">$95</p>
                          </div>
                          <div className="rating">
                            <i className="ri-star-s-fill" />
                            <p className="pera">4.7 (20 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center mt-10">
                    <a href="tour-list" className="see-more-text">xemThêm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End-of điểmĐến */}
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

export default DestinationDetail
