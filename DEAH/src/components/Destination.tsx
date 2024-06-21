import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Destination = () => {
  // let api = 'http://127.0.0.1:8000/api/client/get-tours-list'

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["KEY"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(api)
  //     console.log(data.data);
  //     return data.data

  //   }
  // })
  // // console.log(data.data);

  // if (isLoading) return <div>Loading.....</div>
  // if (error) return <div>loi{error.message}</div>
  // const listtours = Array.isArray(data) ? data : [];

  return (
    <div>
      <div>
       <Header/>
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">
                Điểm Đến
              </h1>
              <div className="breadcrumb-text">
                <nav
                  aria-label="breadcrumb"
                  className="breadcrumb-nav wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list">
                      <a href="index" className="single">
                        Trang chủ              </a>
                    </li>
                    <li className="breadcrumb-item single-list" aria-current="page">
                      <a href="javascript:void(0)" className="single active">
                        Điểm Đến
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Destination area S t a r t */}
          <section className="destination-section bottom-padding1">
            <div className="destination-area">

              {/* code */}
            
    
   <div className="container">
                <div className="row g-4">
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-7.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">Spain</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Malaga View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                
             
                  <div className="col-lg-8 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-9.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">New Zealand</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Auckland View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="destination-offer-three h-calc">
                      <div className="destination-content-offer">
                        <span className="highlights">20% off</span>
                        <h4 className="title">Chuyến phiêu lưu du lịch tuyệt vời nhất</h4>
                        <a href="payment" className="btn-secondary-sm radius-30">
                          Đặt Ngay
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-2.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">New Zealand</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Auckland View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-7 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-1.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">Spain</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Malaga View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-3.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">Switzerland</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Zürich View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-4.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">Australia</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Melbourne View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="destination-details"
                      className="destination-banner h-calc"
                    >
                      <img
                        src="/src/assets/images/destination/destination-5.png"
                        alt="travello"
                      />
                      <div className="destination-content">
                        <div className="ratting-badge">
                          <i className="ri-star-s-fill" />
                          <span>4.5</span>
                        </div>
                        <div className="destination-info">
                          <div className="destination-name">
                            <p className="pera">Canada</p>
                            <div className="location">
                              <i className="ri-map-pin-line" />
                              <p className="name">Toronto View</p>
                            </div>
                          </div>
                          <div className="button-section">
                            <div className="arrow-btn">
                              <i className="ri-arrow-right-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
        
           
            </div>
          </section>
          {/*/ End-of Destination */}
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

export default Destination
