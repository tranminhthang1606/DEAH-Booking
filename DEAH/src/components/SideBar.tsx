import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../App1.css'

const SideBar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));
    
  return (
    <div>
      <div className="side-bar">
                <div className="user-info">
                  <img className="img-profile img-circle img-responsive center-block" src={user.avatar ? 'http://127.0.0.1:8000/' + user.avatar : ''} alt="Profile Avatar" />
                  <ul className="meta list list-unstyled">
                    <li className="name">{user.name}</li>
                    <li className="email"><a href="#">{user.email}</a></li>
                    <li className="activity">Last logged in: Today at 2:18pm</li>
                  </ul>
                </div>
                <nav className="side-menu ">
                  <ul className="nav">
                    <li><a href="/listbill"><span className="fa fa-user" /> Profile</a></li>
                    <li><a href="#"><span className="fa fa-cog" /> Settings</a></li>
                    <li className="active"><a href="#"><span className="fa fa-credit-card" /> Billing</a></li>
                    <li><a href="#"><span className="fa fa-envelope" /> Messages</a></li>
                    <li><a href="user-drive.html"><span className="fa fa-th" /> Drive</a></li>
                    <li><a href="#"><span className="fa fa-clock-o" /> Reminders</a></li>
                    <div className="mt-40">
                          <button type="submit" className="send-btn"><a className='text-black' href="/pass">Đổi mật khẩu </a></button>
                        </div>
                  </ul>
                </nav>
              </div>
    </div>
  )
}

export default SideBar
