import React from 'react'

const PrivacyPolicy = () => {
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
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Chính sách bảo mật</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Chính sách bảo mật</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Privacy policy S t r t */}
          <div className="privacy-policy-area section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Lorem Ipsum Dolor SIT AMET,.</h5>
                    {/* Single Listing */}
                    <ul className="experience listing listing2">
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Bắt buộc tăng cường.Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">nỗi đau là Bắt buộc tăng cường.Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Nibh Kids </p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Lorem rất thông minh Nibh Kids </p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">ipsumDolorSitBắtBuộcTăngCườngDinhDưỡngNibh</p>
                      </li>
                    </ul>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Cà rốt tăng cường</h5>
                    <p className="pera mb-20">Lorem rất cà rốt.Nibh Dinh dưỡng hoặc chưa
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
                        <p className="pera">dolor sit Bắt buộc tăng cường.Dinh dưỡng NIBH</p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Nibh Kids </p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">Lorem rất thông minh Nibh Kids </p>
                      </li>
                      <li className="single-list">
                        <i className="ri-shield-check-line" />
                        <p className="pera">ipsumDolorSitBắtBuộcTăngCườngDinhDưỡngNibh</p>
                      </li>
                    </ul>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-30">
                    <h5 className="title font-600">Lorem rất thông minh</h5>
                    <p className="pera mb-20">Lorem rất cà rốt.Nibh Dinh dưỡng hoặc chưa
                      Bóng đá Malesuada
                      cư dân carton hoặc.Nếu ID tác giả lâm sàng không có sinh viên sư tử nào của bóng đá.Hơn chất chống oxy hóa
                      cũ, đường kính của tôi.
                      Yếu tố hiệu suất chuối tại môi trường.Vui lòng kiểm tra các nhà phát triển của nhà phát triển Protein vào ngày mai
                      chế tạo.Chính nó
                      Bóng đá khấu trừ tại lâm sàng hoặc xấu xí.Nhà phát triển Mũi tên Mass là nụ cười sô cô la hoặc
                      URN.Men
                      Truyền hình xấu xí nhưng trẻ em có một nụ cười cho trẻ em.Cảnh sát chính thống run rẩy
                      Massa </ p>
                    <p className="pera mb-20">Arcut et Justo Quis Aennean Sed.Sollicitudin Eget Mus Semper Vitae Nibh
                      Eget Toror
                      hàng hóa.Cursus vel Scleerisque UT tại.Lacus Orci Vel Dolor Eget Velit Aliquet.Nhân Mã
                      Laoreet non Sed
                      Mattis Trisque A ut.Volutpat hậu quả.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-0">
                    <h5 className="title font-600">Acknowledgement</h5>
                    <p className="pera mb-20">Bằng cách sử dụng dịch vụ hoặc các dịch vụ khác do chúng tôi cung cấp, bạn thừa nhận
                      Mà bạn có
                      Đọc các Điều khoản dịch vụ này và đồng ý bị ràng buộc bởi họ.</p>
                  </div>
                  {/* Single */}
                  <div className="single-terms mb-0">
                    <h5 className="title font-600">Liên hệ với chúng tôi </h5>
                    <p className="pera mb-20 text-normal">Email: <a href="#">initTheme@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End-of Privacy policy*/}
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

export default PrivacyPolicy
