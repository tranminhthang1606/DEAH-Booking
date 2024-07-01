import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
const Test = () => {
    const { id } = useParams();
    const [mainImage, setMainImage] = useState(null);
  
    const { data, isLoading, error } = useQuery({
      queryKey: ['KEY_POST', id],
      queryFn: async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/client/get-tour-detail/1`);
        localStorage.setItem('tour', JSON.stringify(data.data));
        return data.data;
      }
    });
  
    if (isLoading) return <div>Loading.....</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    const tourDetail = data ? (Array.isArray(data) ? data : [data]) : [];
    
    // Set the first image as the main image by default
    if (tourDetail.length > 0 && !mainImage) {
      setMainImage(tourDetail[0].tour.images[0].image);
    }
  
    const handleImageClick = (image:any) => {
      setMainImage(image);
    };
  return (
    <div>
      <Header />
      <main>
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
        <section className="tour-details-section section-padding2">
          <div className="tour-details-area">
            {data.tour.images && data.tour.images.length > 0 && (
              <div className="image-group">
                <div className="main-image">
                  <img src={`http://127.0.0.1:8000/${mainImage}`} alt="Main" />
                </div>
                <div className="thumbnail-images">
                  {data.tour.images.map((imageObj:any, index:any) => (
                    <img
                      key={index}
                      src={`http://127.0.0.1:8000/${imageObj.image}`}
                      alt={`Thumbnail ${index}`}
                      onClick={() => handleImageClick(imageObj.image)}
                      className="thumbnail"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Test
