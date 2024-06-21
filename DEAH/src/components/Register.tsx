import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Register = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Đăng ký</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Đăng ký</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Login area S t a r t  */}
          <div className="login-area section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                  <div className="login-card">
                    {/* Logo */}
                    <div className="logo mb-40">
                      <a href="index" className="mb-30 d-block">
                        <img src="/src/assets/images/logo/logo.png" alt="logo" className="changeLogo" />
                      </a>
                    </div>
                    {/* Form */}
                    <form action="#" method="POST">
                      <div className="contact-form mb-24">
                        <label className="contact-label">Tên </label>
                        <input className="form-control contact-input" type="text" placeholder="Enter Your Tên" />
                      </div>
                      <div className="contact-form mb-24">
                        <label className="contact-label">Email </label>
                        <input className="form-control contact-input" type="email" placeholder="Email" />
                      </div>
                      {/* Password */}
                      <div className="position-relative contact-form mb-24">
                        <label className="contact-label">Nhập mật khẩu </label>
                        <input type="password" className="form-control contact-input password-input" id="txtPasswordLogin" placeholder="Enter Password" />
                        <i className="toggle-password ri-eye-line" />
                      </div>
                      {/* Password */}
                      <div className="position-relative contact-form mb-24">
                        <label className="contact-label">Xác nhận mật khẩu</label>
                        <input type="password" className="form-control contact-input password-input" id="txtPasswordLogin2" placeholder="Confirm Password" />
                        <i className="toggle-password ri-eye-line" />
                      </div>
                      <a href="javascript:void(0)" className="btn-primary-fill justify-content-center w-100">
                        <span className="d-flex justify-content-center gap-6">
                          <span>Register</span>
                        </span>
                      </a>
                    </form>
                    <div className="login-footer mb-20">
                      <div className="create-account">
                        <p>
                          Bạn co săn san để tạo một tai khoản?
                          <a href="login">
                            <span className="text-primary">Đăng nhập</span>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="sign-with">
                      <p className="text-paragraph">Hoặc đăng nhập với </p>
                      <ul className="icon-login-section">
                        <li className="icon-login">
                          <a href="#"><i className="ri-mail-line" /></a>
                        </li>
                        <li className="icon-login">
                          <a href="#"><i className="ri-facebook-fill" /></a>
                        </li>
                        <li className="icon-login">
                          <a href="#"><i className="ri-twitter-fill" /></a>
                        </li>
                        <li className="icon-login">
                          <a href="#"> <i className="ri-linkedin-fill" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End-of Login */}
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

export default Register
