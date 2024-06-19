import React, { useState } from 'react';


const TravelCard = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleChange = (setter:any) => (event:any) => {
        setter(Number(event.target.value));
    };

    const handleIncrement = (setter:any, value:any) => () => {
        setter(value + 1);
    };

    const handleDecrement = (setter:any, value:any) => () => {
        if (value > 0) {
            setter(value - 1);
        }
    };

    return (
        <div className="col-xl-4 col-lg-5">
            <div className="date-travel-card position-sticky top-0">
                <div className="price-review">
                    <div className="d-flex gap-10 align-items-end">
                        <p className="light-pera">Từ</p>
                        <p className="pera">$95</p>
                    </div>
                    <div className="rating">
                        <p className="pera">Giá thay đổi theo quy mô nhóm</p>
                    </div>
                </div>
                <h4 className="heading-card">Chọn ngày và khách du lịch</h4>
                <div className="date-time-dropdown">
                
             <label htmlFor=""> Ngày</label>
                    <input type="date" placeholder='ngày bắt đầu' />
                </div>
                <div className="date-time-dropdown">
                    <input width={100} type="text" placeholder='số lượng ngày' />
                </div>

                <div className="date-time-dropdown">
                    <input width={100} type="text" placeholder='số lượng khách ' />
                </div>



                <div className="mt-30">
                    <button type="submit" className="send-btn w-100">Sẵn sàng kiểm tra</button>
                </div>
                <div className="footer bg-transparent">
                    <h4 className="title">Hủy bỏ miễn phí</h4>
                    <p className="pera">Lên đến 24 giờ trước</p>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;
