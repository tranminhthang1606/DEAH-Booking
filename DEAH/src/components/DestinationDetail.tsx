import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DestinationDetail = () => {
  return (
    <div>
      <div>
      <Header/>
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
                    <div className="Info-table">
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
       <Footer/>
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

export default DestinationDetail
