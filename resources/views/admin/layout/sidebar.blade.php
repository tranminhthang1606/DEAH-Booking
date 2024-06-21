 <!-- Main Sidebar Container -->
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
     <!-- Brand Logo -->
     <a href="index3.html" class="brand-link">
         <span class="brand-text font-weight-light">Vũ Vũ Trụ</span>
     </a>

     <!-- Sidebar -->
     <div class="sidebar">
         <!-- Sidebar user panel (optional) -->
         <div class="user-panel mt-3 pb-3 mb-3 d-flex">
             <div class="image">
             </div>
             <div class="info">
             </div>
         </div>

         <!-- SidebarSearch Form -->
         <div class="form-inline">
             <div class="input-group" data-widget="sidebar-search">
                 <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                     aria-label="Search">
                 <div class="input-group-append">
                     <button class="btn btn-sidebar">
                         <i class="fas fa-search fa-fw"></i>
                     </button>
                 </div>
             </div>
         </div>

         <!-- Sidebar Menu -->
         <nav class="mt-2">
             <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                 data-accordion="false">
                 <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

                 <li class="nav-item">
                     {{-- <a href="{{route('attributes.index')}}" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Danh sách Attribute
                <span class="right badge badge-danger">New</span>
              </p>
            </a> --}}
                     <div class="menu">
                         <button class="accordion">Tour</button>
                         <div class="panel">
                             <p>
                             <ul>
                                 <li>Tour_types</li>
                                 <li>Tour_hotel</li>
                                 <li>Tour_attribute</li>
                                 <li>Tour_attribute</li>
                                 <li>Tour_comments</li>
                             </ul>
                             </p>
                         </div>
                         <button class="accordion">Hotel</button>
                        <div class="panel">
                            <p>
                            <ul>
                                <li>Hotel_images</li>
                                <li>Hotel_comments</li>
                                <li>Hotel_service</li>
                              
                            </ul>
                            </p>
                        </div>
                         <button class="accordion">Banner</button>
                         <div class="panel">
                             <p>
                             <ul>
                                 <li>banner_images</li>
                             </ul>
                             </p>
                         </div>
                         <button class="accordion">Post</button>
                         <div class="panel">
                             <p>
                             <ul>
                                 <li>Post_Comment</li>
                             </ul>
                             </p>
                         </div>
                         <button class="accordion">Province</button>
                    

                         <button class="accordion">Districts</button>

                         <button class="accordion">Wards</button>
                         <button class="accordion">Itineraries</button>
                          <a href="{{route('attributes.index')}}"> <button class="accordion">Attributes</button>
                          </a>

                      


                         <button class="accordion">Vouchers</button>
                         <button class="accordion">User_voucher</button>
                         <button class="accordion">Services</button>
                         <button class="accordion">Bookings</button>
                         <button class="accordion">Users</button>




                     </div>

                 </li>
                 <style>
                     /* Style the buttons that are used to open and close the accordion panel */
                     .accordion {
                         background-color: #eee;
                         color: #444;
                         cursor: pointer;
                         padding: 18px;
                         width: 100%;
                         text-align: left;
                         border: none;
                         outline: none;
                         transition: 0.4s;
                     }

                     /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
                     .active,
                     .accordion:hover {
                         background-color: #ccc;
                     }

                     /* Style the accordion panel. Note: hidden by default */
                     .panel {
                         padding: 0 18px;
                         background-color: white;
                         display: none;
                         overflow: hidden;
                     }

                     .panel ul li {
                         transition: all 0.3s ease-in-out;
                     }

                     .panel ul li:hover {
                         color: #333;
                         /* Màu chữ khi hover */
                         background-color: #f1f1f1;
                         /* Màu nền khi hover */
                     }

                     .panel ul {
                         list-style-type: none;
                         /* Loại bỏ dấu chấm ở đầu */
                         padding: 0;
                     }

                     .panel ul li {
                         margin-right: 10px;/ padding: 8px 16px;
                         background-color: #f1f1f1;
                         border: none;
                         border-radius: 4px;
                         cursor: pointer;
                         transition: background-color 0.3s ease-in-out;
                     }

                     .panel ul li:hover {
                         background-color: #150a0a;
                         color: white;
                         /* Màu nền khi hover */
                     }
                 </style>
                 <script>
                     //  const menus = document.querySelectorAll('.menu');
                     //  let activeMenu = null;

                     //  menus.forEach(menu => {
                     //      menu.addEventListener('click', () => {
                     //          if (activeMenu && activeMenu !== menu) {
                     //              activeMenu.classList.remove('active');
                     //          }
                     //          menu.classList.toggle('active');
                     //          activeMenu = menu.classList.contains('active') ? menu : null;
                     //      });
                     //  });


                     var acc = document.getElementsByClassName("accordion");
                     var i;

                     for (i = 0; i < acc.length; i++) {
                         acc[i].addEventListener("click", function() {
                             /* Toggle between adding and removing the "active" class,
                             to highlight the button that controls the panel */
                             this.classList.toggle("active");

                             /* Toggle between hiding and showing the active panel */
                             var panel = this.nextElementSibling;
                             if (panel.style.display === "block") {
                                 panel.style.display = "none";
                             } else {
                                 panel.style.display = "block";
                             }
                         });
                     }
                 </script>

             </ul>
         </nav>
     </div>
 </aside>

