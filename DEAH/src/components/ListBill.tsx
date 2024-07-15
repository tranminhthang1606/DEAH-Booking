import React, { useEffect, useState } from 'react'
import '../App1.css'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { format } from 'date-fns';
import { json } from 'react-router-dom'
import StatusPayment from '../FunctionComponentContext/StatusPayment'
import SideBar from './SideBar'

const ListBill = () => {
    const formattedDate =(currentDate)=>format(currentDate,'yyyy-MM-dd');
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [listbill, setListBill] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/client/user/get-bookings', {
                    id: user.id
                });
                console.log(response.data.data);

                setListBill(response.data.data);
                console.log(listbill);

            } catch (error) {
                if (error) return <div>loi...</div>
            }
        };
        fetchData();
    }, []);
    return (
        <div>
      <Header />
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <SideBar/>
              <div className="content-panel">
                <div className="billing">
                <section className='p-6'>
                <main className="table w-100%" id="customers_table">
                    <section className="table__header">
                        <h1>Customer's Bill</h1>
                        <div className="input-group">
                            <input type="search" placeholder="Search Data..." />
                            <img src="images/search.png" alt="" />
                        </div>
                        <div className="export__file">
                            <label
                                htmlFor="export-file"
                                className="export__file-btn"
                                title="Export File"
                            />
                            <input type="checkbox" id="export-file" />
                            
                        </div>
                    </section>
                    <section className="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        {" "}
                                        Id <span className=""></span>
                                    </th>
                                    <th>
                                        {" "}
                                        Booking Code <span className=""></span>
                                    </th>
                                    <th>
                                        {" "}
                                        Ten Nguoi Dung <span className=""></span>
                                    </th>
                                    <th>
                                        {" "}
                                        Gia <span className=""></span>
                                    </th>
                                    <th>
                                        {" "}
                                        Ngay Dat <span className=""></span>
                                    </th>
                                    <th>
                                        {" "}
                                        Action <span className=""></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listbill.map((item:any, index: number) => {
                                    return (
                                        <tr key={item.id}>
                                            <td> {index + 1 } </td>
                                            <td>{item.booking_code}</td>
                                            <td> {item.user_name} </td>
                                            <td> <strong> {item.tour_price}  </strong></td>
                                            <td >{formattedDate(new Date(item.created_at))}</td>
                                            <td>
                                                <p className="status delivered">{item.status_tour}</p>
                                                <StatusPayment status={item.status_payment}/>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </section>
                </main>
            </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>


    )
}

export default ListBill
