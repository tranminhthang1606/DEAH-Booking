import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SlideshowDetail from '../FunctionComponentContext/SlideshowDetail';
// import TravelCard from '../FunctionComponentContext/DetailFunciton';
import '../App.css'
import Footer from './Footer';
import Header from './Header';
// import Header from './Header';
// import Footer from './Footer';

const TourDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ['KEY_POST', id],
    queryFn: async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/client/get-tour-detail/${id}`);
      console.log(data.data.tour);
      return data.data.tour;
    }
  });

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure data is defined and is an array
  const tourDetail = data ? (Array.isArray(data) ? data : [data]) : [];

  return (
    <div>
      <div>
        <Header />
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Chi tiết tour du lịch</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page">
                      <a href="javascript:void(0)" className="single active">Chi tiết tour du lịch</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Destination area S t a r t */}
          <section className="tour-details-section section-padding2">
            <div className="tour-details-area">
              {/* Details Banner Slider */}
              <div className="tour-details-banner ">
                {/* <div className="swiper tourSwiper-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner-three.png" alt="travello" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner.png" alt="travello" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner-two.png" alt="travello" />
</div>
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner-three.png" alt="travello" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner.png" alt="travello" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/src/assets/images/gallery/tour-details-banner-two.png" alt="travello" />
                    </div>
                  </div>
                  <div className="swiper-button-next"><i className="ri-arrow-right-s-line" /></div>
                  <div className="swiper-button-prev"><i className="ri-arrow-left-s-line" /></div>
                </div> */}
                <SlideshowDetail />
              </div>
              {/* / Slider*/}
              <div className="tour-details-container">
                <div className="container">
                  {/* Details Heading */}
                  {tourDetail?.map((tourDetai: any, index: any) => {
                    return (
                      <div className="details-heading" key={index}>
                        <div className="d-flex flex-column">
                          <h4 className="title">{tourDetai.title}</h4>
                          <div className="d-flex flex-wrap align-items-center gap-30 mt-16">
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <div className="name"></div>
                            </div>
                            <div className="divider" />
                            <div className="d-flex align-items-center flex-wrap gap-20">
                              <div className="count">
                                <i className="ri-time-line" />
                                <p className="pera mt-3">{tourDetai.day} Ngày</p>
                              </div>
                              <div className="count">
                                <i className="ri-user-line" />
                                <p className="pera"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="price-review">
                          <div className="d-flex gap-10 align-items-end">
                            <p className="light-pera ">Từ</p>
                            <p className="pera mt-2 text-danger">{tourDetai.price} VND</p>
                          </div>
                          <div className="rating">
                            <p className="pera mr-5">Đánh giá: {tourDetai.rates ? tourDetai.rates.qty : 0}</p> <p className="pera"> {tourDetai.rates ? tourDetai.rates.rate : 0}   </p> <i className="ri-star-s-fill  mb-3"></i>

                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* / Details Heading */}
                  <div className="mt-30">
                    <div className="row g-4">
                      {/* Left content */}
                      <div className="col-xl-8 col-lg-7">
                        {/* About tour */}
                        <div className="tour-details-content">
                          <h4 className="title">Về</h4>
                          <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng làm
                            inique
                            sự cố
                            để làm việc hoặc đau đớn.Làm thế nào để bạn làm một sự tha thứ kỳ lạ, người đã
                            Tập thể dục Ullamco
                            thuê người làm
                            Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Bài tập về nhà tự động trong một irre
                            bị chỉ trích trong niềm vui xin vui lòng
                            được
                            Cura Pain Football không chạy nữa.Ngoại trừ là người da đen
                            Không ủng hộ
                            lỗi
                            Các dịch vụ đó từ bỏ việc làm mềm là một món ăn nhẹ. "</p>
                          <p className="pera">Nhưng tôi phải gặp phải sai lầm rằng mọi người đều là một niềm vui
                            Công tố viên
                            nỗi đau
                            Ca ngợi, toàn bộ điều cần mở, và những điều từ người phát minh ra sự thật đó
                            Và là một kiến ​​trúc sư
                            Hạnh phúc
                            Cuộc sống đã được nói để giải thích.Không ai là niềm vui của niềm vui
                            từ chối hoặc ghét hoặc
                            chạy trốn,
                            Nhưng bởi vì họ dẫn đến những nỗi đau lớn, những người có niềm vui để theo dõi
                            không biết.Hoặc hơn nữa
                            bất cứ ai;
                            Chính nỗi đau vì cà rốt, cà chua muốn, nhưng bởi vì
                            Tôi chưa bao giờ có chế độ của nó
                            Thời gian sự cố để làm việc và đau đớn để tìm kiếm một số niềm vui.ĐẾN
                            Đối với người nhỏ bé tôi sẽ đến
                            Ai
                            Việc đào tạo của chúng tôi là một sự nhạy cảm về thể chất của một sự dữ dội trừ khi họ làm điều gì đó
                            của lợi thế
                            hậu quả?
                            Một hoặc quyền của cô ấy để chỉ trích niềm vui là nhiều hơn
                            Không khó chịu
                            Hậu quả
                            Hay đó là nỗi đau của anh ta để chạy trốn mà niềm vui của số 0 được chuẩn bị?"</p>
                        </div>
                        {/* / About tour */}
                        {/* Tour Include Loại trừ */}
                        <div className="tour-include-exclude radius-6">
                          <div className="includ-exclude-point">
                            <h4 className="title">Bao gồm</h4>
                            <ul className="expect-list">
                              <li className="list">Chào mừng bữa sáng</li>
                              <li className="list">Tất cả các vé nhập cảnh của các điểm đến nhảy </li>
                              <li className="list">Ăn trưa</li>
                              <li className="list">Đồ ăn nhẹ buổi tối</li>
                              <li className="list">Bộ dụng cụ sơ cứu (trong trường hợp khẩn cấp)</li>
                            </ul>
                          </div>
                          <div className="divider" />
                          <div className="includ-exclude-point">
                            <h4 className="title">Loại trừ</h4>
                            <ul className="expect-list">
                              <li className="list">Chi phí cá nhân </li>
                              <li className="list">Bất cứ điều gì khác không được đề cập trên các vùi</li>
                              <li className="list">Dịch vụ bổ sung</li>
                            </ul>
                          </div>
                        </div>
                        {/* / Tour Include Loại trừ */}
                        {/* Tour Plan accordion*/}
                        <div className="tour-details-content mb-30">
                          <h4 className="title">Kế hoạch du lịch</h4>
                          <div className="destination-accordion">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                              {'Ngày 1'}
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                              </div>

                              {'Ngày 2'}
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                              </div>
                              {'Ngày 3'}
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                </button>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* / Tour Plan accordion*/}
                        {/* Tour Privacy Policy */}
                        <div className="tour-details-content">
                          <h4 className="title">Chính sách</h4>
                          <p className="pera">Lorem rất cà rốt, nhà phát triển đại học cà chua, nhưng làm
                            inique
                            sự cố
                            để làm việc hoặc đau đớn.Làm thế nào để bạn làm một sự tha thứ kỳ lạ, người đã
                            Tập thể dục Ullamco
                            thuê người làm
                            Ngoại trừ việc yêu cầu từ cô ấy xin vui lòng công thức.Bài tập về nhà tự động trong một irre
                            bị chỉ trích trong niềm vui xin vui lòng
                            được
                            Cura Pain Football không chạy nữa.Ngoại trừ là người da đen
                            Không ủng hộ
                            lỗi
                            Các dịch vụ đó từ bỏ việc làm mềm là một món ăn nhẹ. "</p>
                          <p className="pera">Nhưng tôi phải gặp phải sai lầm rằng mọi người đều là một niềm vui
                            Công tố viên
                            nỗi đau
                            Ca ngợi, toàn bộ điều cần mở, và những điều từ người phát minh ra sự thật đó
                            Và là một kiến ​​trúc sư
                            Hạnh phúc
                            Cuộc sống đã được nói để giải thích.Không ai là niềm vui của niềm vui
                            từ chối hoặc ghét hoặc
                            chạy trốn,
                            Nhưng bởi vì họ dẫn đến những nỗi đau lớn, những người có niềm vui để theo dõi
                            không biết.Hoặc hơn nữa
                            bất cứ ai;
                            Chính nỗi đau vì cà rốt, cà chua muốn, nhưng bởi vì
                            Tôi chưa bao giờ có chế độ của nó
                            Thời gian sự cố để làm việc và đau đớn để tìm kiếm một số niềm vui.ĐẾN
                            Đối với người nhỏ bé tôi sẽ đến
                            Ai
                            Việc đào tạo của chúng tôi là một sự nhạy cảm về thể chất của một sự dữ dội trừ khi họ làm điều gì đó
                            của lợi thế
                            hậu quả?
                            Một hoặc quyền của cô ấy để chỉ trích niềm vui là nhiều hơn
                            Không khó chịu
                            Hậu quả
                            Hay đó là nỗi đau của anh ta để chạy trốn mà niềm vui của số 0 được chuẩn bị?"</p>
                          <ol className="policy-point">
                            <li className="list">Không có thêm bất kỳ nỗi đau nào vì đội
                              Bắt buộc, cà chua
                              để có được một điều ước.</li>
                            <li className="list">Không ai là niềm vui rằng niềm vui bị từ chối hoặc
                              ghét hoặc chạy.</li>
                            <li className="list">Lorem Cà rốt cà rốt, Phim đại học nâng cao
                              Nhưng tôi làm trong một inquid.</li>
                          </ol>
                        </div>
                        {/* / Tour Privacy Policy */}
                      </div>
                      {/* Right content */}



                      {/* <TravelCard /> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Destination */}
        </main>
        {/* Footer S t a r t */}
        <Footer />
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

export default TourDetails