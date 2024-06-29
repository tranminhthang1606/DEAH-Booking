import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <div>
        <Header />
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Liên hệ</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Liên hệ</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Contact area S t a r t */}
          <section className="contact-area section-padding2">
            <div className="position-relative contact-bg-before">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-9 ">
                    <div className="contact-card">
                      <h4 className="contact-heading">Hãy viết cho chúng tôi bất cứ lúc nào </h4>
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
                          <button type="submit" className="send-btn">Gửi Tin Nhắn</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*/ End-of Contact*/}
          {/* Map */}
          <iframe className="map-frame" src="https://www.google.com/maps/embed/v1/place?q=USA,+Turkish &key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" height={500} style={{ border: 15 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          {/* / Map */}
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

export default Contact
