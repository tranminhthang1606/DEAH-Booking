
import "../assets/js/main.js"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import FunctionApp from "../FunctionComponentContext/FunctionApp.js"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Indextwo = () => {

  
  let api = 'http://localhost:8000/api/client/get-tours-new'
  const { data, error, isLoading } = useQuery({
    queryKey: ["KEY"],
    queryFn: async () => {
      const { data } = await axios.get(api)
      console.log(data.data);
      return data.data

    }
  })
  // console.log(data.data);

  if (isLoading) return <div>Loading.....</div>
  if (error) return <div>loi{error.message}</div>
  const tours = Array.isArray(data) ? data : [];




  return (

    <div>

      <div>
        <header className="header-area-two">

          {/* Header top */}
          <div className="top-header-two">
            <h4 className="title">Giảm giá Black Friday</h4>
            <div className="discount pt-3">
              <p className="pera ">30%</p>
            </div>
          </div>
          {/* Header menu */}
          <div className="main-header header-sticky hero-bg-two">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper">
                    {/* Main-menu for desktop */}
                    <div className="main-menu">
                      <nav>
                        <div className="d-flex justify-content-between align-items-center position-relative">
                          {/* Logo*/}
                          <div className="logo">
                            <a href="index"><img src="/src/assets/images/logo/logo.png" alt="logo" className="changeLogo" /></a>
                          </div>
                          <ul className="listing d-none d-lg-block" id="navigation">
                            <li className="single-list">
                              <a href="javascript:void(0)" className="single link-active"> Trang Chủ</a>
                            </li>
                            <li className="single-list">
                              <a href="about" className="single">Về Chúng Tôi</a>
                            </li>
                            <li className="single-list">
                              <a href="destination" className="single">Điểm Đến</a>
                            </li>
                            <li className="single-list">
                              <a href="tour-list" className="single">Gói Du Lịch</a>
                            </li>
                        
                            <li className="single-list">
                              <a href="contact" className="single">Liên hệ</a>
                            </li>
                            <li className="d-block d-lg-none">
                              <div className="header-right pl-15">
                                <div className="d-flex align-items-center gap-12">
                                  <div className="lang search-bar  ">
                                    <i className="ri-search-line " />
                                  </div>
                                  <div className="divider gradient-divider" />
                                
                                </div>
                             
                              </div>
                              <div className="sign-btn">
                                  <a href="login" className="btn-secondary-sm">Đăng nhập</a>
                                </div>
                            </li>
                          </ul>
                          {/* Header Right */}
                          <div className="d-none d-lg-block">
                            <div className="header-right">
                              <div className="d-flex align-items-center gap-12">
                                <div className="lang search-bar">
                                  <i className="ri-search-line" />
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
          {/* Search box */}
          <div className="search-container">
            <div className="top-section">
              <div className="search-icon">
                <i className="ri-search-line" />
              </div>
              <div className="modal-search-box">
                <input type="text" id="searchField" className="search-field" placeholder="Destination, Agency, Country" />
                <button id="closeSearch" className="close-search-btn">
                  <kbd className="light-text">thoát </kbd>
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
                    <li>
                      <h4 className="search-label">Recent</h4>
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
        </header>
        <main>
          {/* Hero area S t a r t*/}
          <section className="hero-padding-two hero-bg-two position-relative">
            <div className="container">
              <div className="row  g-4 align-items-center justify-content-between position-relative">
                <div className="col-xl-7 col-lg-6">
                  <div className="hero-caption-two position-relative">
                    <span className="highlights wow fadeInUp d-block p-1" data-wow-delay="0.0s">Khám phá từ này</span>
                    <h4 className="title wow fadeInUp fs-1 p-1 " data-wow-delay="0.1s">  Kế  hoạch  chuyến  tham  quan  đến  các  địa  điểm  mơ  ước  chỉ  bằng  một  cú  nhấp  chuột ! </h4>
                    <p className="pera wow fadeInUp" data-wow-delay="0.3s">
                      Tận hưởng từng khoảnh khắc tại các địa điểm mơ ước, tham gia các hoạt động thú vị và lưu giữ những kỷ niệm đẹp.<br />
                    </p>
                    <div className="button-section wow fadeInUp" data-wow-delay="0.5s">
                      <a href="payment" className="btn-secondary-sm hero-book-btn">Bắt đầu đặt phòng</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="search-tour-card sidenav-active">
                    <div className="section-title text-center">
                      <h4 className="title">Các tour du lịch tìm kiếm</h4>
                      <p className="pera">Hãy nhập những thông tin dưới đây .</p>
                    </div>
                    <div className="plan-section-two">
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
                      <div className="select-dropdown-section">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="ri-flight-takeoff-fill" />
                          <h4 className="select2-title">Tour Type</h4>
                        </div>
                        <select className="destination-dropdown">
                          <option value={1}>Booking Type</option>
                          <option value={2}>Advance Type</option>
                          <option value={3}>Pre-book Type</option>
                        </select>
                      </div>
                    
                      <div className="dropdown-section">
                      <i className="ri-time-line" /><FunctionApp/> 
                        <div className="d-flex gap-10 align-items-center">
                     
                         
                      
                          <div className="custom-dropdown custom-date">
                     
                       

                            
                          </div>
                        </div>
                 
                      </div>


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
                              <p className="pera">2-11 years</p>
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
                      <div className="sign-btn">
                        <a href="tour-list" className="btn-secondary-lg">Kế hoạch tìm kiếm</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* shape 01 */}
            <div className="shape-one d-none d-lg-block p-5  pt-2" >
              {/* <img  height="400px"  width={650}   src="/src/assets/category_tour/tamdao.jpg" alt="travello" /> */}
            </div>
            {/* shape 02 */}
            <div className="shape-two d-none d-lg-block">
              {/* <img className='' src="/src/assets/category_tour/taxua.jpg" alt="travello" /> */}
            </div>
          </section>
          {/*/ End-of Hero*/}
          {/* Brand S t a r t */}
          <section className="why-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="border-section-title">
                    <h4 className="title">Tại sao bạn lại thích chúng tôi</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="swiper whySwiper-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="why-points">
                          <div className="why-point">
                            <div className="why-icon">
                              <span>$</span>
                            </div>
                            <div className="why-content">
                              <h4 className="title line-clamp-1">Đảm bảo giá tốt nhất</h4>
                              <p className="pera line-clamp-3">
                                Tiết kiệm chi phí: Khách hàng có thể yên tâm không phải tốn thời gian và công sức để so sánh giá giữa các nơi khác nhau.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="why-points">
                          <div className="why-point">
                            <div className="why-icon">
                              <span>$</span>
                            </div>
                            <div className="why-content">
                              <h4 className="title line-clamp-1">Easy &amp; Quick Booking</h4>
                              <p className="pera line-clamp-3">
                                A "Đảm bảo giá tốt nhất" is a commitment offered by
                                businesses, typically in the retail or hospitality
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="why-points">
                          <div className="why-point">
                            <div className="why-icon">
                              <span>$</span>
                            </div>
                            <div className="why-content">
                              <h4 className="title line-clamp-1">Hướng dẫn viên du lịch</h4>
                              <p className="pera line-clamp-3">
                                A "Đảm bảo giá tốt nhất" is a commitment offered by
                                businesses, typically in the retail or hospitality
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="why-points">
                          <div className="why-point">
                            <div className="why-icon">
                              <span>$</span>
                            </div>
                            <div className="why-content">
                              <h4 className="title line-clamp-1">Đảm bảo giá tốt nhất</h4>
                              <p className="pera line-clamp-3">
                                Một "đảm bảo giá tốt nhất" là một cam kết được cung cấp bởi
                                các doanh nghiệp, thường là trong bán lẻ hoặc khách sạn
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End of Brand */}
          {/* Special area S t a r t */}
          <section className="special-area top-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title mx-430 mx-auto text-center">
                    <span className="highlights fancy-font font-400 text-center">Ưu đãi đặc biệt</span>
                    <h4 className="title">
                      Mùa đông những lời đề nghị lớn của chúng tôi để truyền cảm hứng cho bạn
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-6 col-md-6">
                  <a href="tour-list" className="offer-banner imgEffect4 wow fadeInLeft" data-wow-delay="0.0s">
                    <img src="/src/assets/category_tour/tour miền tây.jpg" alt="travello" />

                    <div className="offer-content">
                      <p className="highlights-text">Tiết kiệm lên đến</p>
                      <h4 className="title">50%</h4>
                      <p className="pera">Hãy cùng khám phá thế giới</p>
                      <div className="location">
                        <i className="ri-map-pin-line" />
                        <p className="name">Tây Hồ , Hà Nội </p>
                      </div>
                      <div className="btn-secondary-sm radius-30 ">Đặt phòng ngay</div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6">
                  <a href="tour-list" className="offer-banner imgEffect4 wow fadeInRight" data-wow-delay="0.0s">
                    <img src="/src/assets/category_tour/Sapa.jpg" alt="travello" />
                    <div className="offer-content-two">
                      <h4 className="title">Khách sạn gần đó</h4>
                      <p className="pera">
                        Up to <span className="highlights-text">50%</span> Tắt tốt nhất
                        Khách sạn gần
                      </p>
                      <div className="location">
                        <i className="ri-map-pin-line" />
                        <p className="name">Tây Hồ , Hà Nội </p>
                      </div>
                      <div className="btn-secondary-sm radius-30">Đặt phòng ngay</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Special*/}
          {/* About Us area S t a r t */}
          <section className="about-area bottom-padding1 position-relative">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-5 col-lg-5">
                  <div className="section-title mx-430 mb-30">
                    <span className="highlights fancy-font font-400">Đặt phòng tham quan </span>
                    <h4 className="title">Sẵn sàng kiểm tra</h4>
                    <p className="pera">
                      Lorem Ipsum Dolor ngồi ampe, lãnh sự.Thuận tiện tại Diam Smart
                      đội.Động cơ Mauris chính thống cho đau cho.Nếu có
                      Mauris ngày mai xin vui lòng hoặc vui lòng cuối tuần.EU và
                      Phim hoạt hình lập kế hoạch xấu xí.
                    </p>
                    <div className="about-imp-link">
                      <div className="icon">
                        <i className="ri-phone-line" />
                      </div>
                      <div className="content">
                        <p className="pera">Gọi bất cứ lúc nào</p>
                        <h4 className="title">00 (888) +123456</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="available-card">
                    {/* Open Calender */}
                    <form action="#" className="mb-20">
                      <input type="text" name="daterange" className="custom-form" defaultValue="03/12/2023 - 4/15/2023" />
                    </form>
                    {/* / Open Calender */}
                    {/* user qty card */}
                    <div className="user-qty-card">
                      <div className="user-quantity">
                        <div className="user-category">
                          <div className="category-name">
                            <h4 className="title">Người lớn</h4>
                            <p className="pera">Ages 18+</p>
                          </div>
                          <div className="qty-container">
                            <button className="qty-btn-minus-two mr-1" type="button">
                              <i className="ri-subtract-fill" />
                            </button>
                            <input type="text" name="qty" defaultValue={0} className="input-qty-two input-rounded" />
                            <button className="qty-btn-plus-two ml-1" type="button">
                              <i className="ri-add-fill" />
                            </button>
                          </div>
                        </div>
                        <div className="user-category">
                          <div className="category-name">
                            <h4 className="title">Những đứa trẻ</h4>
                            <p className="pera">Ages 5-18</p>
                          </div>
                          <div className="qty-container">
                            <button className="qty-btn-minus-two mr-1" type="button">
                              <i className="ri-subtract-fill" />
                            </button>
                            <input type="text" name="qty" defaultValue={0} className="input-qty-two input-rounded" />
                            <button className="qty-btn-plus-two ml-1" type="button">
                              <i className="ri-add-fill" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="count-guest">
                        <h4 className="title">
                          Khách <span className="calc-user">0</span>
                        </h4>
                      </div>
                      <div className="mt-30">
                        <button type="submit" className="btn-primary-fill w-100">
                          Sẵn sàng kiểm tra
                        </button>
                      </div>
                    </div>
                    {/* / user qty card */}
                  </div>
                </div>
              </div>
            </div>
            <div className="shape-about-two p3">
              {/* <img width={400} src="/src/assets/category_tour/Phu Quoc Island - Vietnams Trauminsel + Highlights.jpg" alt="travello" /> */}
            </div>
          </section>
          {/*/ End-of About US*/}
          {/* Destination area S t a r t */}
          <section className="destination-section-two bottom-padding1">
            <div className="destination-area-two position-relative">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-7">
                    <div className="section-title text-center mx-430 mx-auto position-relative">
                      <span className="highlights">Danh sách đích</span>
                      <h4 className="title">
                        Chúng tôi cung cấp các điểm đến du lịch hàng đầu
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <a href="destination-details" className="destination-banner-two h-calc wow fadeInUp" data-wow-delay="0.s">
                      <img src="/src/assets/category_tour/TREKKING TÀ XÙA.jpg" alt="travello" />
                      <div className="destination-content-two">
                        <div className="ratting-badge">
                          <span>7 Tour</span>
                        </div>
                        <div className="destination-info-two">
                          <div className="destination-name">
                            <p className="pera">srilanka</p>
                          </div>
                          <div className="button-section">
                            <div className="arrow"><i className="ri-arrow-right-line" /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <a href="destination-details" className="destination-banner-two h-calc wow fadeInUp" data-wow-delay="0.1s">
                      <img src="/src/assets/category_tour/tamdao.jpg" alt="travello" />
                      <div className="destination-content-two">
                        <div className="ratting-badge">
                          <span>7 Tour</span>
                        </div>
                        <div className="destination-info-two">
                          <div className="destination-name">
                            <p className="pera">Srilanka</p>
                          </div>
                          <div className="button-section">
                            <div className="arrow">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <a href="destination-details" className="destination-banner-two  h-calc wow fadeInUp" data-wow-delay="0.2s">
                      <img src="/src/assets/category_tour/Sapa.jpg" alt="travello" />
                      <div className="destination-content-two">
                        <div className="ratting-badge">
                          <span>7 Tour</span>
                        </div>
                        <div className="destination-info-two">
                          <div className="destination-name">
                            <p className="pera">Srilanka</p>
                          </div>
                          <div className="button-section">
                            <div className="arrow">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="destination-offer-two h-calc wow fadeInUp" data-wow-delay="0.3s">
                      <div className="destination-content-offer">
                        <span className="highlights">20% off</span>
                        <h4 className="title">Tốt nhất cho ít hơn </h4>
                        <a href="payment" className="btn-secondary-sm"> Đặt chỗ ngay bây giờ</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Destination */}
          {/* About Us area S t a r t */}
          <section className="about-area-two about-bg-before section-padding2">
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="col-lg-8">
                  <div className="section-title mx-526 mb-30">
                    <span className="highlights">về chúng tôi</span>
                    <h4 className="title"> Trải nghiệm thế giới với công ty của chúng tôiy</h4>
                    <p className="pera">
                      Du lịch là một trải nghiệm biến đổi và phong phú
                      cho phép các cá nhân khám phá các điểm đến, văn hóa mới và
                      Phong cảnh
                    </p>
                    <p className="pera">
                      Đó là một hoạt động cơ bản của con người đã được thực hành cho
                      hàng thế kỷ và tiếp tục là một nguồn vui, học tập và
                      phát triển cá nhân
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="discover-circle ">
                    <a href="about" className="discover-btn">Khám phá nhiều hơn<i className="ri-arrow-right-up-line" /></a>
                  </div>
                </div>
              </div>
              <div className="about-banner-two">
                <h4 className="watermark-text  p-4">Hơn 15 năm kinh nghiệm </h4>
                <div className="video-section">
                  {/* Video */}
                  <div className="hero-bg-video">
                    <video className="hero-slider-video video-cover radius-30" poster="/src/assets/images/gallery/about-curve-banner.png" loop autoPlay muted>
                      <source src="/src/assets/images/videos/travel4.mp4" type="video/mp4" />
                      Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                  </div>
                  <img src="/src/assets/images/gallery/about-curve-banner.png" alt="travello" />
                  <div className="rectangle-shape d-none d-sm-block">
                    <div className="sticky-corner right-corner">
                      <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 35 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M35 0V35C35 15.67 19.33 0 -1.53184e-05 0H35Z" fill="#daedef" />
                      </svg>
                    </div>
                    <div className="sticky-corner bottom-corner">
                      <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 35 35" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M35 0V35C35 15.67 19.33 0 -1.53184e-05 0H35Z" fill="#daedef" />
                      </svg>
                    </div>
                  </div>
                  <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="d-none d-sm-block " data-fancybox="video-gallery">
                    <div className="video-player">
                      <i className="ri-play-fill" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of About US*/}
          {/* Packages S t a r t */}
          <section className="package-area section-padding2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title mx-430 mx-auto text-center">
                    <span className="highlights"> Gói phổ biến</span>
                    <h4 className="title">
                      Địa điểm du lịch yêu thích nhất trên thế giới
                    </h4>
                  </div>
                </div>
              </div>
              {/* <ul className="nav nav-pills package-pills" id="pills-tab" role="tablist">
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
              </ul> */}
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-london" role="tabpanel" aria-labelledby="pills-london-tab">
                  <div className="row g-4">
                    {data?.map((tour: any, index: any) => {
                      return (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>

                          <div className="package-card">
                            <div className="package-img imgEffect4">
                              <a href="tour-details">
                                <img src="/src/assets/category_tour/hội an.jpg" alt="travello" />
                              </a>
                              <div className="image-badge">
                                <p className="pera">Đặc sắc</p>
                              </div>
                            </div>
                            <div className="package-content">
                              <h4 className="area-name">
                                <a href="tour-details">{tour.title}</a>
                              </h4>
                              <div className="location">
                                <i className="ri-map-pin-line" />
                                {/* <div className="name">Tây Hồ , Hà Nội </div> */}
                              </div>
                              <div className="packages-person">
                                <div className="count">
                                  <i className="ri-time-line" />
                                  <p className="pera">{tour.day} Ngày</p>
                                </div>
                                <div className="count">
                                  <i className="ri-user-line" />
                                  <p className="pera"> 2 người</p>
                                </div>
                              </div>
                              <div className="price-review">
                                <div className="d-flex gap-10">
                                  <p className="light-pera">Từ</p>
                                  <p className="pera">{tour.price} VND</p>
                                </div>
                                <div className="rating">
                                  <i className="ri-star-s-fill" />
                                  <p className="pera">4.7 (20 đánh giá)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )



                    })}
                    {/*  */}
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-bangkok" role="tabpanel" aria-labelledby="pills-bangkok-tab">
                  <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
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
                            <a href="tour-details">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
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
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-7.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-8.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                </div>
                <div className="tab-pane fade" id="pills-hongkong" role="tabpanel" aria-labelledby="pills-hongkong-tab">
                  <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-9.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-10.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-11.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-12.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                </div>
                <div className="tab-pane fade" id="pills-manchester" role="tabpanel" aria-labelledby="pills-manchester-tab">
                  <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-13.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-14.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-15.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-16.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                </div>
                <div className="tab-pane fade" id="pills-dubai" role="tabpanel" aria-labelledby="pills-dubai-tab">
                  <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-17.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-18.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-19.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="package-card">
                        <div className="package-img imgEffect4">
                          <a href="tour-details.html">
                            <img src="/src/assets/images/package/package-20.jpg" alt="travello" />
                          </a>
                          <div className="image-badge">
                            <p className="pera">Đặc sắc</p>
                          </div>
                        </div>
                        <div className="package-content">
                          <h4 className="area-name">
                            <a href="tour-details.html">Dusitd2 Samyan Bangkok</a>
                          </h4>
                          <div className="location">
                            <i className="ri-map-pin-line" />
                            <div className="name">Tây Hồ , Hà Nội </div>
                          </div>
                          <div className="packages-person">
                            <div className="count">
                              <i className="ri-time-line" />
                              <p className="pera">3 ngày 2 đêm</p>
                            </div>
                            <div className="count">
                              <i className="ri-user-line" />
                              <p className="pera"> 2 người</p>
                            </div>
                          </div>
                          <div className="price-review">
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
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center ">
                  <div className="section-button d-inline-block ">
                    <a href="tour-list ">
                      <div className="btn-primary-icon-sm pt-3">
                        <p className="pera  ">Xem tất cả các tour du lịch</p>
                        {/* <i className="ri-arrow-right-up-line" /> */}
                      </div>

                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="mt-30">
                        <button type="submit" className="btn-primary-fill w-60 ">
                          <a href="" className="text-white pera ">Sẵn sàng kiểm tra</a>
                        </button>
                      </div> */}
            </div>
          </section>
          {/*/ End of Packages */}
          {/* Promotion S t a r t */}

          {/* <section className="platform-area platform-area-bg">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="app-section-padding">
                    <div className="hero-caption-one position-relative">
                      <span className="highlight">Nền tảng của chúng tôi</span>
                      <h4 className="title">
                        Thưởng thức và đặt ứng dụng này trên toàn thế giới
                      </h4>
                      <p className="pera">
                        Lorem Ipsum Dolor ngồi ampe, lãnh sự.Trò chuyện cuối tuần
                        Earth ID Vận tải Vận động.Sapien không bỏ lỡ nụ cười
                      </p>
                    </div>
                    <div className="hero-footer position-relative">
                   
                      <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" data-fancybox="video-gallery" className="wow bounceIn" data-wow-delay=".2s">
                        <div className="video-player">
                          <i className="ri-play-fill" />
                        </div>
                      </a>

                      <a href="javascript:void(0)" className="pera position-relative">Tải xuống ứng dụng của chúng tôi</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="hero-banner d-none d-lg-block wow fadeInUp" data-wow-delay="0.2s">
                    <img src="/src/assets/category_tour/Phu Quoc Island - Vietnams Trauminsel + Highlights.jpg" alt="travello" />
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/*/ End of Promotion */}
          {/* Testimonial S t a r t */}
          {/* <section className="testimonial-area top-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title mx-430 mx-auto text-center">
                    <span className="highlights">Lời chứng thực </span>
                    <h4 className="title">
                      Những gì họ nói về dịch vụ của chúng tôi
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="swiper h-calc testimonialTwo-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide testimonial-card-two h-calc">
                        <div className="testimonial-header">
                          <div className="logo">
                            <img src="/src/assets/category_tour/Hà Nội- ninh bình-hạ long.jpg" alt="travello" className="changeLogo" />
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <p className="pera">
                            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Nhưng miễn phí
                            Nhưng khóa học chính thống.Thành viên phần tử ID của dễ dàng
                            Trước khi thực thi ớt bóng đá.Chili yếu tố cổ họng
                            Luôn luôn làm bài tập về nhà sinh thái hơn là đói chat.
                            Khảo sát cuối tuần nhưng ngày mai có nhiều lần thay đổi thì không.
                            Molestie là lợi thế của bất kỳ phim hoạt hình nào rất nhiều sòng bạc
                            ac.
                          </p>
                        </div>
                        <div className="testimonial-footer">
                          <div className="all-user">
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
                              <p className="user-count">D</p>
                            </div>
                            <div className="user-info">
                              <p className="name">David Malan</p>
                              <p className="designation">Du khách</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-card-two h-calc">
                        <div className="testimonial-header">
                          <div className="logo">
                            <img src="/src/assets/category_tour/Quy Nhơn (Thành phố Qui Nhơn), Vietnam.jpg" alt="travello" className="changeLogo" />
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <p className="pera">
                            Nhưng vui vẻ miễn phí nhưng chạy.Thành viên phần tử ID
                            Lorem Ipsum Dolor ngồi ampe, lãnh sự.Chất chống oxy hóa miễn phí
                            Trước khi thực thi ớt bóng đá.Chili yếu tố cổ họng
                            Luôn luôn làm bài tập về nhà sinh thái hơn là đói chat.
                            Khảo sát cuối tuần nhưng ngày mai có nhiều lần thay đổi thì không.
                            Molestie là lợi thế của bất kỳ phim hoạt hình nào rất nhiều sòng bạc
                            AC.
                          </p>
                        </div>
                        <div className="testimonial-footer">
                          <div className="all-user">
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-3.png" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-4.jpeg" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-1.jpeg" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-2.png" alt="travello" />
                            </div>
                            <div className="happy-user-count">
                              <p className="user-count">D</p>
                            </div>
                            <div className="user-info">
                              <p className="name">David Malan</p>
                              <p className="designation">Du khách</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-card-two h-calc">
                        <div className="testimonial-header">
                          <div className="logo">
                            <img src="/src/assets/category_tour/Đà Nẵng.jpg" alt="travello" className="changeLogo" />
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <p className="pera">
                            Molestie là lợi thế của bất kỳ phim hoạt hình nào rất nhiều sòng bạc
                            AC.Lorem Ipsum Dolor ngồi ampe, lãnh sự.Nhưng tại
                            miễn phí để giao hàng nhưng khóa học.Thành viên phần tử ID của chất chống oxy hóa
                            Miễn phí trước khi thực thi bóng đá.Yếu tố ớt
                            Cổ họng luôn là bệnh bài tập về nhà sinh thái so với trung bình
                            nạn đói.Khảo sát cuối tuần nhưng ngày mai có nhiều lần kéo dài
                            KHÔNG.
                          </p>
                        </div>
                        <div className="testimonial-footer">
                          <div className="all-user">
                            <div className="happy-user">
                              <img src="/src/assets/category_tour/huế .jpg" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/category_tour/huế .jpg" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-3.png" alt="travello" />
                            </div>
                            <div className="happy-user">
                              <img src="/src/assets/images/hero/user-4.jpeg" alt="travello" />
                            </div>
                            <div className="happy-user-count">
                              <p className="user-count">D</p>
                            </div>
                            <div className="user-info">
                              <p className="name">David Malan</p>
                              <p className="designation">Du khách</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-next">
                      <i className="ri-arrow-right-line" />
                    </div>
                    <div className="swiper-button-prev">
                      <i className="ri-arrow-left-line" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testimonial-banner d-none d-lg-block">
                    <img src="/src/assets/category_tour/Hà Nội- ninh bình-hạ long.jpg" alt="travello" />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/*/ End of Testimonial */}
          {/* Brand S t a r t */}
          {/* <div className="branding pt-30">
            <div className="container">
             
              <div className="swiper brandSwiper-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="" alt="travello" />
                  </div>
                  <div className="swiper-slide">
                    <img src="" alt="travello" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/category_tour/huế .jpg" alt="travello" />
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
          </div> */}
          {/*/ End of Brand */}
          {/* News S t a r t */}
          <section className="news-area section-padding2">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title text-center mx-605 mx-auto position-relative mb-60">
                    <span className="highlights">News &amp; Bài báo</span>
                    <h4 className="title">
                      Latest News &amp; Bài viết Từ The Blog Bài viết
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <article className="news-card-two wow fadeInUp" data-wow-delay="0.0s">
                    <figure className="news-banner-two imgEffect">
                      <a href="news-details"><img src="/src/assets/category_tour/Đà Nẵng.jpg" alt="travello" /></a>
                    </figure>
                    <div className="news-content">
                      <div className="heading">
                        <span className="heading-pera">Hướng dẫn viên du lịch</span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details">Thế giới là một cuốn sách và những người không đọc
                          Chỉ một
                          Một trang. </a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="all-user">
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
                          </div>
                        </div>
                        <p className="time">10 phút đọc</p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <article className="news-card-two wow fadeInUp" data-wow-delay="0.1s">
                    <figure className="news-banner-two imgEffect">
                      <a href="news-details.html"><img src="/src/assets/category_tour/tamdao.jpg" alt="travello" /></a>
                    </figure>
                    <div className="news-content">
                      <div className="heading">
                        <span className="heading-pera">Hướng dẫn viên du lịch</span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details">Thế giới là một cuốn sách và những người không đọc
                          Chỉ một
                          Một trang.</a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="all-user">
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
                          </div>
                        </div>
                        <p className="time">10 phút đọc</p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <article className="news-card-two wow fadeInUp" data-wow-delay="0.2s">
                    <figure className="news-banner-two imgEffect">
                      <a href="news-details"><img src="/src/assets/category_tour/tamdao.jpg" alt="travello" /></a>
                    </figure>
                    <div className="news-content">
                      <div className="heading">
                        <span className="heading-pera">Hướng dẫn viên du lịch</span>
                      </div>
                      <h4 className="title line-clamp-2">
                        <a href="news-details">Thế giới là một cuốn sách và những người không đọc
                          Chỉ một
                          Một trang.</a>
                      </h4>
                      <div className="news-info">
                        <div className="d-flex gap-10 align-items-center">
                          <div className="all-user">
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
                          </div>
                        </div>
                        <p className="time">10 phút đọc</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-12 text-center">
                <div className="section-button d-inline-block wow fadeInUp" data-wow-delay="0.3s">
                  <a href="news.html">
                    <div className="btn-primary-icon-sm pt-3">
                      <p className="pera">Xem tất cả các tin tức</p>
                      {/* <i className="ri-arrow-right-up-line" /> */}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*/ End of News */}
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

export default Indextwo
