
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PostNewDetail from '../FunctionComponentContext/PostNewDetail';

const NewsDetails = () => {

  const { id } = useParams();
console.log(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ['KEY_POST', id],
    queryFn: async () => {
      const {data} = await axios.get(`http://127.0.0.1:8000/api/client/get-post-detail/${id}`);
      console.log(data.data.post);
      return data.data.post; 
    }
  });
  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Ensure data is defined and is an array
  const postDetail = data ? (Array.isArray(data) ? data : [data]) : [];
  return (
    <div>
      <div>
      <Header/>
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
              {postDetail?.map((newdetail:any, index:any)=>{
                          return(
                <div className="col-xl-8 col-lg-7" key={index}>
                  <div className="news-details-banner imgEffect">
                  <img src={'http://127.0.0.1:8000/' + (newdetail.images? newdetail.images[0].image : '')} alt="travello" />
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
                    <h4 className="title">{newdetail.title}</h4>
                    <p className="pera">{newdetail.body}</p>
                
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
                     )
                    })}
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
                      
                        <PostNewDetail/>
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
                <PostNewDetail/>
              </div>
            </div>
          </section>
          {/*/ End-of Điểm đến */}
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

export default NewsDetails
