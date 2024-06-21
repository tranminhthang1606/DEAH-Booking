import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import FunctionApp from "../FunctionComponentContext/Date.js"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
const TourList = () => {
  let api = 'http://127.0.0.1:8000/api/client/get-tours-list'
  const { data, error, isLoading } = useQuery({
    queryKey: ["KEY_LIST"],
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
      
       <Header/>
        <main>
          {/* Breadcrumbs S t a r t */}
          <section className="breadcrumbs-area breadcrumb-bg">
            <div className="container">
              <h1 className="title wow fadeInUp" data-wow-delay="0.0s">Danh sách du lịch</h1>
              <div className="breadcrumb-text">
                <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.1s">
                  <ul className="breadcrumb listing">
                    <li className="breadcrumb-item single-list"><a href="index" className="single">Trang chủ</a></li>
                    <li className="breadcrumb-item single-list" aria-current="page"><a href="javascript:void(0)" className="single active">Danh sách du lịch</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*/ End-of Breadcrumbs*/}
          {/* Destination area S t a r t */}
          <section className="tour-list-section section-padding2">
            <div className="container">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="search-filter-section">
                    <div className="expand-icon close-btn block d-xl-none">
                      <i className="ri-arrow-left-double-line" />
                    </div>
                    <div className="heading">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z" stroke="#071516" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h4 className="title">Tìm kiếm theo bộ lọc</h4>
                    </div>
                    <div className="tour-search">
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
                          <h4 className="select2-title">Loại du lịch </h4>
                        </div>
                        <select className="destination-dropdown">
                          <option value={1}>Booking Type</option>
                          <option value={2}>Advance Type</option>
                          <option value={3}>Pre-book Type</option>
                        </select>

                      </div>

                      <div className="dropdown-section z-3 rounded-3 position-relative  ">
                        <FunctionApp />
                        <div className="    ">



                          <div className="custom-dropdown custom-date">


                          </div>
                        </div>

                      </div>
                      {/* <div className="dropdown-section position-relative user-picker-dropdown">
                        <div className="d-flex gap-10 align-items-center">
                          <i className="dropdown-icon ri-user-line" />
                          <div className="custom-dropdown">
                            <h4 className="title">Khách</h4>
                            <input type="text" placeholder='Nhập số lượng khách' />
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
                              <p className="pera">12years and above</p>
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
                      </div> */}
                    </div>

                    <div className="price-range-slider">
                      <div id="slider-range" className="range-bar" />
                      <div className="d-flex justify-content-between align-items-center">

                      </div>
                    </div>
                    <div className="heading">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path d="M19.8598 7.40725C19.6893 6.84671 19.3487 6.35773 18.8883 6.01261C18.4279 5.66749 17.8723 5.48456 17.3035 5.49087H13.662L12.5559 1.93016C12.382 1.36968 12.0402 0.88073 11.5799 0.533829C11.1196 0.186928 10.5645 0 9.99465 0C9.42482 0 8.86972 0.186928 8.40939 0.533829C7.94905 0.88073 7.60728 1.36968 7.43335 1.93016L6.32732 5.49087H2.68582C2.11884 5.49171 1.56661 5.67759 1.10802 6.02197C0.649428 6.36635 0.307926 6.85161 0.132295 7.40845C-0.0433363 7.96528 -0.0441136 8.5652 0.130074 9.12251C0.304262 9.67983 0.644504 10.166 1.1022 10.5117L4.06607 12.75L2.9392 16.3547C2.7571 16.9137 2.75479 17.5186 2.93263 18.0791C3.11046 18.6397 3.45892 19.1258 3.92605 19.4651C4.38517 19.8153 4.94156 20.0029 5.5123 20C6.08303 19.997 6.63757 19.8037 7.09329 19.4488L9.99465 17.2431L12.8968 19.4462C13.3551 19.7944 13.9085 19.9835 14.4774 19.9863C15.0464 19.9892 15.6015 19.8057 16.0631 19.4621C16.5246 19.1185 16.8688 18.6326 17.0462 18.0743C17.2235 17.5159 17.2249 16.9139 17.0501 16.3547L15.9232 12.75L18.8904 10.5117C19.3534 10.1704 19.6976 9.68417 19.8722 9.12506C20.0468 8.56594 20.0424 7.96362 19.8598 7.40725ZM17.9069 9.12132L14.453 11.729C14.3111 11.8359 14.2055 11.9863 14.1513 12.1589C14.0972 12.3314 14.0971 12.5172 14.1512 12.6898L15.464 16.8824C15.5304 17.095 15.5298 17.324 15.4624 17.5363C15.3949 17.7486 15.264 17.9333 15.0884 18.0639C14.9129 18.1945 14.7018 18.2642 14.4855 18.2631C14.2691 18.2619 14.0587 18.19 13.8845 18.0575L10.4881 15.4748C10.345 15.3663 10.1721 15.3077 9.99465 15.3077C9.81715 15.3077 9.64428 15.3663 9.50122 15.4748L6.10478 18.0575C5.93065 18.1918 5.71965 18.2652 5.50239 18.2672C5.28512 18.2693 5.07287 18.1998 4.89641 18.0688C4.71996 17.9379 4.58846 17.7523 4.52099 17.539C4.45351 17.3257 4.45357 17.0957 4.52116 16.8824L5.83806 12.6898C5.89217 12.5172 5.89213 12.3314 5.83795 12.1589C5.78376 11.9863 5.67821 11.8359 5.53634 11.729L2.08238 9.12132C1.90844 8.98977 1.77919 8.8048 1.7131 8.59284C1.64701 8.38089 1.64746 8.15277 1.71438 7.9411C1.78131 7.72942 1.91129 7.545 2.08575 7.41418C2.26021 7.28337 2.47024 7.21284 2.68582 7.21269H6.93659C7.11306 7.21268 7.28496 7.15483 7.42756 7.04746C7.57015 6.94009 7.67607 6.78874 7.73007 6.61522L9.02197 2.45618C9.08829 2.24335 9.21827 2.05774 9.39321 1.92607C9.56815 1.7944 9.77902 1.72346 9.99548 1.72346C10.2119 1.72346 10.4228 1.7944 10.5978 1.92607C10.7727 2.05774 10.9027 2.24335 10.969 2.45618L12.2609 6.61522C12.3149 6.78874 12.4208 6.94009 12.5634 7.04746C12.706 7.15483 12.8779 7.21268 13.0544 7.21269H17.3051C17.5207 7.21284 17.7308 7.28337 17.9052 7.41418C18.0797 7.545 18.2097 7.72942 18.2766 7.9411C18.3435 8.15277 18.344 8.38089 18.2779 8.59284C18.2118 8.8048 18.0825 8.98977 17.9086 9.12132H17.9069Z" fill="#071516" />
                      </svg>
                      <h4 className="title">Đánh giá du lịch </h4>
                    </div>
                    <div className="ratting-section">
                      <div className="ratting-checkbox">
                        <input type="checkbox" id="{1}" />

                        <div>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                              <path d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z" fill="#FFB400" />
                            </svg>
                            1
                          </span>
                        </div>
                      </div>
                      <div className="ratting-checkbox">
                        <input type="checkbox" id="{2}" />

                        <div>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                              <path d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z" fill="#FFB400" />
                            </svg>
                            2
                          </span>
                        </div>
                      </div>
                      <div className="ratting-checkbox">
                        <input type="checkbox" id="{3}" />

                        <div>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                              <path d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z" fill="#FFB400" />
                            </svg>
                            3
                          </span>
                        </div>
                      </div>
                      <div className="ratting-checkbox">
                        <input type="checkbox" id="{4}" />



                        <div>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                              <path d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z" fill="#FFB400" />
                            </svg>
                            4
                          </span>
                        </div>
                      </div>
                      <div className="ratting-checkbox">
                        <input type="checkbox" id="{5}" />

                        <div>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} viewBox="0 0 14 13" fill="none">
                              <path d="M6.09749 0.891366C6.45972 0.132244 7.54028 0.132244 7.90251 0.891366L9.07038 3.33882C9.21616 3.64433 9.5066 3.85534 9.84221 3.89958L12.5308 4.25399C13.3647 4.36391 13.6986 5.39158 13.0885 5.97067L11.1218 7.83768C10.8763 8.07073 10.7653 8.41217 10.827 8.74502L11.3207 11.4115C11.4739 12.2386 10.5997 12.8737 9.86041 12.4725L7.47702 11.1789C7.1795 11.0174 6.8205 11.0174 6.52298 11.1789L4.13959 12.4725C3.40033 12.8737 2.52614 12.2386 2.67929 11.4115L3.17304 8.74502C3.23467 8.41217 3.12373 8.07073 2.87823 7.83768L0.911452 5.97067C0.301421 5.39158 0.635332 4.36391 1.46924 4.25399L4.15779 3.89958C4.4934 3.85534 4.78384 3.64433 4.92962 3.33882L6.09749 0.891366Z" fill="#FFB400" />
                            </svg>
                            5
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="heading">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M15.5556 2H15.44C15.0422 2.00354 14.6569 2.13084 14.3446 2.36192C14.0323 2.59299 13.8108 2.91474 13.7147 3.27667C13.6118 3.62903 13.3882 3.93994 13.0784 4.16155C12.7686 4.38316 12.3897 4.5032 12 4.5032C11.6103 4.5032 11.2314 4.38316 10.9216 4.16155C10.6118 3.93994 10.3882 3.62903 10.2853 3.27667C10.1892 2.91474 9.96766 2.59299 9.65538 2.36192C9.3431 2.13084 8.95781 2.00354 8.56 2H8.44444C7.26614 2.00132 6.1365 2.44073 5.30331 3.22185C4.47012 4.00296 4.00141 5.062 4 6.16667V19.5C4 20.163 4.28095 20.7989 4.78105 21.2678C5.28115 21.7366 5.95942 22 6.66667 22H8.56C8.95781 21.9965 9.3431 21.8692 9.65538 21.6381C9.96766 21.407 10.1892 21.0853 10.2853 20.7233C10.3882 20.371 10.6118 20.0601 10.9216 19.8385C11.2314 19.6168 11.6103 19.4968 12 19.4968C12.3897 19.4968 12.7686 19.6168 13.0784 19.8385C13.3882 20.0601 13.6118 20.371 13.7147 20.7233C13.8108 21.0853 14.0323 21.407 14.3446 21.6381C14.6569 21.8692 15.0422 21.9965 15.44 22H17.3333C18.0406 22 18.7189 21.7366 19.219 21.2678C19.719 20.7989 20 20.163 20 19.5V6.16667C19.9986 5.062 19.5299 4.00296 18.6967 3.22185C17.8635 2.44073 16.7339 2.00132 15.5556 2V2ZM17.3333 20.3333L15.4284 20.2808C15.2197 19.5737 14.7678 18.9509 14.143 18.509C13.5182 18.0671 12.7554 17.8308 11.9727 17.8368C11.1901 17.8428 10.4315 18.0907 9.81442 18.5421C9.19738 18.9934 8.75645 19.6231 8.56 20.3333H6.66667C6.43092 20.3333 6.20483 20.2455 6.03813 20.0893C5.87143 19.933 5.77778 19.721 5.77778 19.5V16.1667H7.55556C7.7913 16.1667 8.0174 16.0789 8.18409 15.9226C8.35079 15.7663 8.44444 15.5543 8.44444 15.3333C8.44444 15.1123 8.35079 14.9004 8.18409 14.7441C8.0174 14.5878 7.7913 14.5 7.55556 14.5H5.77778V6.16667C5.77778 5.50363 6.05873 4.86774 6.55883 4.3989C7.05892 3.93006 7.7372 3.66667 8.44444 3.66667L8.57156 3.71917C8.77975 4.42202 9.22755 5.0417 9.84659 5.48363C10.4656 5.92555 11.2219 6.16543 12 6.16667C12.7886 6.16038 13.5534 5.91275 14.178 5.46147C14.8027 5.01019 15.253 4.37995 15.4604 3.66667H15.5556C16.2628 3.66667 16.9411 3.93006 17.4412 4.3989C17.9413 4.86774 18.2222 5.50363 18.2222 6.16667V14.5H16.4444C16.2087 14.5 15.9826 14.5878 15.8159 14.7441C15.6492 14.9004 15.5556 15.1123 15.5556 15.3333C15.5556 15.5543 15.6492 15.7663 15.8159 15.9226C15.9826 16.0789 16.2087 16.1667 16.4444 16.1667H18.2222V19.5C18.2222 19.721 18.1286 19.933 17.9619 20.0893C17.7952 20.2455 17.5691 20.3333 17.3333 20.3333Z" fill="#071516" />
                      </svg>
                      <h4 className="title">Ưu đãi đặc biệt </h4>
                    </div>
                    <div className="offer-list">
                      <div className="d-flex align-items-center gap-12 mb-12">
                        <label className="checkbox-label">
                          <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                          <span className="checkmark-style" />
                        </label>
                        <div className="content">
                          <p className="pera">Có khả năng bán hết</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-12">
                        <label className="checkbox-label">
                          <input className="checkbox-style" type="checkbox" defaultValue="remember" name="remember" />
                          <span className="checkmark-style" />
                        </label>
                        <div className="content">
                          <p className="pera">Giảm giá mùa đông </p>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="cover" />

                </div>
                <div className="col-xl-9">
                  <div className="showing-result">
                    <h4 className="title">Hiển thị 6 trong số 10 kết quả</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <div className="expand-icon hamburger block d-xl-none" id="hamburger">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path d="M3 7H10M10 7C10 8.65685 11.3431 10 13 10H14C15.6569 10 17 8.65685 17 7C17 5.34315 15.6569 4 14 4H13C11.3431 4 10 5.34315 10 7ZM16 17H21M20 7H21M3 17H6M6 17C6 18.6569 7.34315 20 9 20H10C11.6569 20 13 18.6569 13 17C13 15.3431 11.6569 14 10 14H9C7.34315 14 6 15.3431 6 17Z" stroke="#071516" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="sorting-dropdown">
                        <select className="select2">
                          <option value="popular"> Sắp xếp theo phổ biến</option>
                          <option value="low">Giá thấp đến cao</option>
                          <option value="high">Giá cao đến thấp </option>
                          <option value="new">Sắp xếp bằng tờ báo </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="all-tour-list">
                    <div className="row g-4">
                      {data?.map((tour: any, index: number) => {
                        return (

                          <div className="col-xl-4 col-lg-4 col-sm-6" key={index}>
                            <div className="package-card">
                              <div className="package-img imgEffect4">
                                <a href="tour-details">
                                  <img src={'http://127.0.0.1:8000/'+(tour.images?tour.images[0].image:'')} alt="travello" />
                                </a>

                              </div>
                              <div className="package-content">
                                <h4 className="area-name">
                            
                                  <Link to={`/tour-details/${tour.id}`}>{tour.title}</Link>
                                </h4>
                                <div className="location">
                                  <i className="ri-map-pin-line" />
                                  <div className="name"></div>
                                </div>
                                <div className="packages-person">
                                  <div className="count">
                                    <i className="ri-time-line" />
                                    <p className="pera mt-3 ml-2">Lịch Trình {tour.day} Ngày</p>
                                  </div>

                                </div>
                                <div className="price-review">
                                  <div className="d-flex gap-10">
                                    <p className="light-pera mt-1">Từ</p>
                                    <p className="pera text-danger">{tour.price}.VND</p>
                                  </div>
                                  <div className="rating">


                                    <p className="pera mr-5">Đánh giá: {tour.rates ? tour.rates.qty : 0}</p> <p className="pera"> {tour.rates ? tour.rates.rate : 0}   </p> <i className="ri-star-s-fill  mb-3"></i>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>




                        )

                      })}
                    </div>



                    {/* nsdkjasn */}

                    <div className="row">
                      <div className="col-12 text-center">
                        <div className="section-button d-inline-block">
                          <a href="javascript:void(0)">
                            <div className="btn-primary-icon-sm">
                              <i className="ri-loader-2-line" />
                              <p className="pera mt-3">Đang tải</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
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

export default TourList
