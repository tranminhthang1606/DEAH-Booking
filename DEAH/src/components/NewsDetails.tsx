
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {

  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ['KEY_POST', id],
    queryFn: async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/client/get-post-detail/${id}`);
      console.log(data);
      return data.data;


    }
  });

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure data is defined and is an array
  const postDetail = data ? (Array.isArray(data) ? data : [data]) : [];
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
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s"> Chi tiết tin tức</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Tin tức</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Điểm đến area S t a r t */}
          <section className="destination-details-section section-padding2">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-8 col-lg-7">
                  <div className="news-details-banner imgEffect">
                    <img src="/src/assets/images/destination/details.png" alt="travello" />
                  </div>
                  <div className="news-details-content">
                    <div className="d-flex flex-wrap align-items-center gap-20">
                      <div className="d-flex gap-10 align-items-center">
                        <div className="author-img">
                          <img src="/src/assets/images/news/news-1.jpeg" alt="travello" />
                        </div>
                        <p className="name">Crish Jorden</p>
                      </div>
                      <div className="divider" />
                      <div className="count">
                        <p className="pera">April 22, 2023</p>
                      </div>
                      <div className="divider" />
                      <div className="count">
                        <p className="pera">10 phút đọc </p>
                      </div>
                    </div>
                    <h4 className="title">Thế giới là một cuốn sách và những người không đi du lịch chỉ đọc một trang.</h4>
                    <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
                      đôi khi
                      để làm việc hoặc đau đớn.Làm thế nào là tối thiểu, ai tập thể dục mũi
                      Việc làm Ullamco
                      Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Tự động vào khoảnh khắc của một cơn đau irure trong bị chỉ trích
                      niềm vui được trở thành
                      Cura Pain Football không chạy nữa.Ngoại trừ là người da đen và không có nguyên tắc
                      đang ở trong lỗi
                      Rằng các dịch vụ đã từ bỏ linh hồn cho một linh hồn hung hăng là một bữa ăn nhẹ."</p>
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
                  <div className="news-details-info">
                    <h4 className="title">Những gì chúng tôi học được từ tour du lịch này</h4>
                    <ul className="expect-list">
                      <li className="list">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
                      </li>
                      <li className="list">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng tôi
                        Long </ li>
                      <li className="list"> Lorem rất cà rốt, cà chua</li>
                    </ul>
                  </div>
                  <div className="news-details-quote">
                    <h4 className="title">Du lịch làm cho một khiêm tốn.Bạn thấy những gì một nơi nhỏ bé chiếm giữ trong
                      thế giới. </h4>
                    <p className="pera">Gustav Flaubert</p>
                  </div>
                  <div className="pera">Lorem rất cà rốt, nhà phát triển đại học nâng cao, nhưng tôi sẽ
                    sự cố
                    để làm việc hoặc đau đớn.Làm thế nào là tối thiểu, ai đã tập thể dục ullamco
                    Nếu việc làm
                    đến các mục tiêu của sự tiện lợi của hậu quả.Tự động trong một cơn đau irreu trong một niềm vui bị chỉ trích
                    Hãy là một ctle
                    Bóng đá đau đớn không còn nữa.Ngoại trừ là những người mù háo hức hoặc là nguyên tắc, trong
                    lỗi đó là dịch vụ
                    từ bỏ sự mềm mại đó là đồ ăn nhẹ.</div>
                  <div className="tag-social-section d-flex justify-content-between gap-16 flex-wrap">
                    <div className="tag-section">
                      <h4 className="title">Tags :</h4>
                      <div className="tag-list">
                        <div className="tags">
                          <a href="javascript:void(0)" className="tag-btn">Du lịch</a>
                        </div>
                        <div className="tags">
                          <a href="javascript:void(0)" className="tag-btn">Thiết kế</a>
                        </div>
                        <div className="tags">
                          <a href="javascript:void(0)" className="tag-btn">Đặt trước</a>
                        </div>
                        <div className="tags">
                          <a href="javascript:void(0)" className="tag-btn">Điểm đến</a>
                        </div>
                      </div>
                    </div>
                    <div className="social-section">
                      <h4 className="title">Chia sẻ :</h4>
                      <div className="social-list">
                        <div className="tags">
                          <a href="javascript:void(0)" className="social-btn"><i className="ri-facebook-fill" /></a>
                        </div>
                        <div className="socials">
                          <a href="javascript:void(0)" className="social-btn"><i className="ri-twitter-fill" /></a>
                        </div>
                        <div className="socials">
                          <a href="javascript:void(0)" className="social-btn"><i className="ri-linkedin-fill" /></a>
                        </div>
                        <div className="socials">
                          <a href="javascript:void(0)" className="social-btn"><i className="ri-instagram-line" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-section">
                    <div className="main-profile">
                      <div className="user-img-lg">
                        <img src="/src/assets/images/news/news-user-1.png" alt="travello" />
                      </div>
                      <div className="user-info">
                        <h4 className="name">Chris Jordan</h4>
                        <p className="desg">Technical Content Writer</p>
                        <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a tech
                          enthusiast, writer
                          by day, programmer by night, and always a foodie at heart!</p>
                      </div>
                    </div>
                    <h4 className="comment-count">( 3 ) Comments</h4>
                    <div className="main-profile-two">
                      <div className="user-img-sm">
                        <img src="/src/assets/images/news/news-user-2.png" alt="travello" />
                      </div>
                      <div className="user-info">
                        <h4 className="name-sm">David Warner</h4>
                        <p className="date">Jan 12, 2025</p>
                        <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a tech
                          enthusiast, writer
                          by day, programmer by night, and always a foodie at heart!</p>
                        <div className="reply-btn">
                          <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_359_781)">
                              <path d="M22.9994 23.9992C22.7342 23.9992 22.4798 23.8939 22.2923 23.7063C22.1048 23.5188 21.9994 23.2645 21.9994 22.9992C21.9978 21.4084 21.3652 19.8832 20.2403 18.7584C19.1154 17.6335 17.5902 17.0008 15.9994 16.9993H10.1694V18.5852C10.1693 18.9808 10.052 19.3673 9.83221 19.6962C9.61244 20.025 9.30012 20.2813 8.93472 20.4326C8.56932 20.5839 8.16725 20.6235 7.77934 20.5464C7.39144 20.4693 7.03511 20.2789 6.75541 19.9992L0.876406 14.1203C0.313993 13.5577 -0.00195313 12.7948 -0.00195312 11.9993C-0.00195313 11.2038 0.313993 10.4408 0.876406 9.87826L6.75541 3.99927C7.03511 3.71965 7.39144 3.52924 7.77934 3.4521C8.16725 3.37497 8.56932 3.41457 8.93472 3.56591C9.30012 3.71725 9.61244 3.97353 9.83221 4.30235C10.052 4.63117 10.1693 5.01777 10.1694 5.41327V6.99927H14.9994C17.3855 7.00191 19.6732 7.95097 21.3604 9.63822C23.0477 11.3255 23.9968 13.6131 23.9994 15.9993V22.9992C23.9994 23.2645 23.8941 23.5188 23.7065 23.7063C23.519 23.8939 23.2646 23.9992 22.9994 23.9992ZM8.16941 5.41327L2.29041 11.2923C2.10294 11.4798 1.99762 11.7341 1.99762 11.9993C1.99762 12.2644 2.10294 12.5187 2.29041 12.7063L8.16941 18.5852V15.9993C8.16941 15.734 8.27476 15.4797 8.4623 15.2921C8.64984 15.1046 8.90419 14.9993 9.16941 14.9993H15.9994C17.135 14.9989 18.2576 15.2408 19.2923 15.7088C20.3269 16.1768 21.2498 16.8602 21.9994 17.7133V15.9993C21.9973 14.1434 21.2591 12.3641 19.9468 11.0519C18.6345 9.73956 16.8553 9.00138 14.9994 8.99926H9.16941C8.90419 8.99926 8.64984 8.89391 8.4623 8.70637C8.27476 8.51883 8.16941 8.26448 8.16941 7.99926V5.41327Z" fill="#4B5051">
                              </path></g>
                            <defs>
                              <clipPath id="clip0_359_781">
                                <rect width={24} height={24} fill="white">
                                </rect></clipPath>
                            </defs>
                          </svg></a>
                        </div>
                      </div>
                    </div>
                    <div className="replied-profile">
                      <div className="main-profile-two">
                        <div className="user-img-sm">
                          <img src="/src/assets/images/news/news-user-2.png" alt="travello" />
                        </div>
                        <div className="user-info">
                          <h4 className="name-sm">Jenney Bairstow</h4>
                          <p className="date">Jan 12, 2025</p>
                          <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a
                            tech enthusiast,
                            writer
                            by day, programmer by night, and always a foodie at heart!</p>
                          <div className="reply-btn">
                            <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <g opacity="0.5" clipPath="url(#clip0_359_791)">
                                <path d="M22.9994 23.9994C22.7342 23.9994 22.4798 23.894 22.2923 23.7065C22.1048 23.5189 21.9994 23.2646 21.9994 22.9994C21.9978 21.4086 21.3652 19.8834 20.2403 18.7585C19.1154 17.6336 17.5902 17.001 15.9994 16.9994H10.1694V18.5854C10.1693 18.9809 10.052 19.3675 9.83221 19.6963C9.61244 20.0251 9.30012 20.2814 8.93472 20.4327C8.56932 20.5841 8.16725 20.6237 7.77934 20.5465C7.39144 20.4694 7.03511 20.279 6.75541 19.9994L0.876406 14.1204C0.313993 13.5578 -0.00195313 12.7949 -0.00195312 11.9994C-0.00195313 11.2039 0.313993 10.441 0.876406 9.87838L6.75541 3.99939C7.03511 3.71977 7.39144 3.52936 7.77934 3.45223C8.16725 3.37509 8.56932 3.4147 8.93472 3.56604C9.30012 3.71738 9.61244 3.97365 9.83221 4.30247C10.052 4.63129 10.1693 5.01789 10.1694 5.41339V6.99939H14.9994C17.3855 7.00203 19.6732 7.95109 21.3604 9.63835C23.0477 11.3256 23.9968 13.6132 23.9994 15.9994V22.9994C23.9994 23.2646 23.8941 23.5189 23.7065 23.7065C23.519 23.894 23.2646 23.9994 22.9994 23.9994ZM8.16941 5.41339L2.29041 11.2924C2.10294 11.4799 1.99762 11.7342 1.99762 11.9994C1.99762 12.2645 2.10294 12.5189 2.29041 12.7064L8.16941 18.5854V15.9994C8.16941 15.7342 8.27476 15.4798 8.4623 15.2923C8.64984 15.1047 8.90419 14.9994 9.16941 14.9994H15.9994C17.135 14.999 18.2576 15.2409 19.2923 15.709C20.3269 16.177 21.2498 16.8603 21.9994 17.7134V15.9994C21.9973 14.1435 21.2591 12.3643 19.9468 11.052C18.6345 9.73968 16.8553 9.0015 14.9994 8.99938H9.16941C8.90419 8.99938 8.64984 8.89403 8.4623 8.70649C8.27476 8.51896 8.16941 8.2646 8.16941 7.99939V5.41339Z" fill="#4B5051">
                                </path></g>
                              <defs>
                                <clipPath>
                                  <rect width={24} height={24} fill="white">
                                  </rect></clipPath>
                              </defs>
                            </svg></a>
                          </div>
                        </div>
                      </div>
                      <div className="main-profile-two">
                        <div className="user-img-sm">
                          <img src="/src/assets/images/news/news-user-3.png" alt="travello" />
                        </div>
                        <div className="user-info">
                          <h4 className="name-sm">Steven Smith</h4>
                          <p className="date">Jan 12, 2025</p>
                          <p className="pera">Chris Jordan is a technical content writer at Travello. he’s a
                            tech enthusiast,
                            writer
                            by day, programmer by night, and always a foodie at heart!</p>
                          <div className="reply-btn">
                            <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <g opacity="0.5" clipPath="url(#clip0_359_791)">
                                <path d="M22.9994 23.9994C22.7342 23.9994 22.4798 23.894 22.2923 23.7065C22.1048 23.5189 21.9994 23.2646 21.9994 22.9994C21.9978 21.4086 21.3652 19.8834 20.2403 18.7585C19.1154 17.6336 17.5902 17.001 15.9994 16.9994H10.1694V18.5854C10.1693 18.9809 10.052 19.3675 9.83221 19.6963C9.61244 20.0251 9.30012 20.2814 8.93472 20.4327C8.56932 20.5841 8.16725 20.6237 7.77934 20.5465C7.39144 20.4694 7.03511 20.279 6.75541 19.9994L0.876406 14.1204C0.313993 13.5578 -0.00195313 12.7949 -0.00195312 11.9994C-0.00195313 11.2039 0.313993 10.441 0.876406 9.87838L6.75541 3.99939C7.03511 3.71977 7.39144 3.52936 7.77934 3.45223C8.16725 3.37509 8.56932 3.4147 8.93472 3.56604C9.30012 3.71738 9.61244 3.97365 9.83221 4.30247C10.052 4.63129 10.1693 5.01789 10.1694 5.41339V6.99939H14.9994C17.3855 7.00203 19.6732 7.95109 21.3604 9.63835C23.0477 11.3256 23.9968 13.6132 23.9994 15.9994V22.9994C23.9994 23.2646 23.8941 23.5189 23.7065 23.7065C23.519 23.894 23.2646 23.9994 22.9994 23.9994ZM8.16941 5.41339L2.29041 11.2924C2.10294 11.4799 1.99762 11.7342 1.99762 11.9994C1.99762 12.2645 2.10294 12.5189 2.29041 12.7064L8.16941 18.5854V15.9994C8.16941 15.7342 8.27476 15.4798 8.4623 15.2923C8.64984 15.1047 8.90419 14.9994 9.16941 14.9994H15.9994C17.135 14.999 18.2576 15.2409 19.2923 15.709C20.3269 16.177 21.2498 16.8603 21.9994 17.7134V15.9994C21.9973 14.1435 21.2591 12.3643 19.9468 11.052C18.6345 9.73968 16.8553 9.0015 14.9994 8.99938H9.16941C8.90419 8.99938 8.64984 8.89403 8.4623 8.70649C8.27476 8.51896 8.16941 8.2646 8.16941 7.99939V5.41339Z" fill="#4B5051">
                                </path></g>
                              <defs>
                                <clipPath>
                                  <rect width={24} height={24} fill="white">
                                  </rect></clipPath>
                              </defs>
                            </svg></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-card mt-40">
                      <h4 className="contact-heading">Viết bình luận của bạn</h4>
                      <form method="post" className="contact-form">
                        <div className="row g-4">
                          <div className="col-sm-6">
                            <input className="custom-form" type="text" placeholder="Enter your name" />
                          </div>
                          <div className="col-sm-6">
                            <input className="custom-form" type="text" placeholder="Enter your email" />
                          </div>
                          <div className="col-sm-6">
                            <input className="custom-form" type="text" placeholder="Your Phone" />
                          </div>
                          <div className="col-sm-6">
                            <input className="custom-form" type="text" placeholder="Select subject" />
                          </div>
                          <div className="col-sm-12">
                            <textarea className="custom-form-textarea" id="exampleFormControlTextarea1" rows={3} placeholder="Enter your message..." defaultValue={""} />
                          </div>
                        </div>
                        <div className="mt-40">
                          <button type="submit" className="send-btn"> Đăng bình luận </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="row g-4 position-sticky top-0">
                    <div className="col-lg-12">
                      <div className="search-filter-section">
                        <div className="heading">
                          <h4 className="title">Tìm kiếm ở đây</h4>
                        </div>
                        <div className="news-detals-search">
                          <input type="search" className="search-input" placeholder="Search" />
                          <div className="icon">
                            <i className="ri-search-line" />
                          </div>
                        </div>
                        <div className="heading">
                          <h4 className="title">Tin tức gần đây</h4>
                        </div>
                        <ul className="recent-news-list">
                          <li className="list">
                            <h4 className="title line-clamp-2"><a href="news-details"> Thế giới là một
                              Sách và những người làm
                              not Du lịch...</a></h4>
                            <div className="d-flex justify-content-between flex-wrap gap-8">
                              <div className="d-flex align-items-center gap-8">
                                <i className="ri-time-line" />
                                <p className="date">Jan 23, 2025</p>
                              </div>
                              <p className="time">10 phút đọc </p>
                            </div>
                          </li>
                          <li className="list">
                            <h4 className="title line-clamp-2"><a href="news-details">Nhiệm vụ Quest:
                              Cuối cùng của bạn
                              [City/Region]...</a></h4>
                            <div className="d-flex justify-content-between flex-wrap gap-8">
                              <div className="d-flex align-items-center gap-8">
                                <i className="ri-time-line" />
                                <p className="date">Jan 23, 2025</p>
                              </div>
                              <p className="time">10 phút đọc </p>
                            </div>
                          </li>
                          <li className="list">
                            <h4 className="title line-clamp-2"><a href="news-details"> Chúng tôi du lịch, một số
                              của chúng tôi mãi mãi, để tìm kiếm
                              Other.</a></h4>
                            <div className="d-flex justify-content-between flex-wrap gap-8">
                              <div className="d-flex align-items-center gap-8">
                                <i className="ri-time-line" />
                                <p className="date">Jan 23, 2025</p>
                              </div>
                              <p className="time">10 phút đọc </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="destination-offer-three">
                        <div className="destination-content-offer">
                          <span className="highlights">20% off</span>
                          <h4 className="title">The Best Du lịch Adventure</h4>
                          <a href="payment" className="btn-secondary-sm radius-30">Đặt trước Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Điểm đến */}
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

export default NewsDetails
