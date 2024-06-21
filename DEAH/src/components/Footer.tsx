import React from 'react'

const Footer = () => {
  return (
    <div>
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
                          <a href="#" className="mb-3 d-block">70 Cầu Giấy</a>
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
                      © <span className="current-year">2024</span> initTheme. All rights reserved
                    </p>
                    <p className="pera">Được cung cấp bởi @Travello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
