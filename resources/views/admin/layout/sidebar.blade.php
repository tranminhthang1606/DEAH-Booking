<div id="scrollbar">
    <div class="container-fluid">

        <div id="two-column-menu">
        </div>
        <ul class="navbar-nav" id="navbar-nav">
            <li class="menu-title"><span data-key="t-menu">Menu</span></li>
            <li class="nav-item">
                <a class="nav-link menu-link" href="{{ route('admin.index') }}" role="button" aria-expanded="false"
                    aria-controls="sidebarDashboards">
                    <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">Dashboards</span>
                </a>

            </li> <!-- end Dashboard Menu -->
            <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="sidebarApps">
                    <i class="ri-apps-2-line"></i> <span data-key="t-apps">Tours</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarApps">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <a href="{{ route('tours.index') }}" class="nav-link" data-key="t-chat"> Tours </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('tourTypes.index') }}" class="nav-link">
                                Tour types
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('tourHotels.index') }}" class="nav-link">
                                Tour hotels
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('attributes.index') }}" class="nav-link" data-key="t-chat"> Attributes
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('rates.index') }}" class="nav-link" data-key="t-chat"> Rates </a>
                        </li>

                    </ul>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarHotels" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="sidebarHotels">
                    <i class="ri-home-2-line"></i> <span data-key="t-apps">Hotels</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarHotels">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <a href="{{ route('hotels.index') }}" class="nav-link" role="button"
                                aria-expanded="false" aria-controls="sidebarCalendar" data-key="t-calender">
                                Hotels
                            </a>
                        </li>


                        <li class="nav-item">
                            <a href="{{ route('hotel_images.index') }}" class="nav-link" data-key="t-chat"> Hotels Images </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('hotel_comments.index') }}" class="nav-link" data-key="t-chat"> Hotel
                                comments </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('services.index') }}" class="nav-link" data-key="t-chat"> Services </a>
                        </li>

                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link menu-link" href="#sidebarPost" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="sidebarHotels">
                    <i class="ri-pages-line"></i> <span data-key="t-apps">Posts</span>
                </a>
                <div class="collapse menu-dropdown" id="sidebarPost">
                    <ul class="nav nav-sm flex-column">
                        <li class="nav-item">
                            <a href="{{ route('posts.index') }}" class="nav-link" role="button"
                                aria-expanded="false" aria-controls="sidebarCalendar" data-key="t-calender">
                                Posts
                            </a>
                        </li>



                        <li class="nav-item">
                            <a href="{{ route('post_comments.index') }}" class="nav-link" data-key="t-chat"> Post
                                comments </a>
                        </li>


                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link menu-link" href="{{ route('vouchers.index') }}" role="button"
                    aria-expanded="false" aria-controls="sidebarHotels">
                    <i class="ri-add-box-line"></i> <span data-key="t-apps">Vouchers</span>
                </a>

            </li>

            <li class="nav-item">
                <a class="nav-link menu-link" href="{{ route('users.index') }}" role="button"
                    aria-expanded="false" aria-controls="sidebarHotels">
                    <i class="ri-user-2-line"></i> <span data-key="t-apps">Accounts</span>
                </a>

            </li>
        </ul>
    </div>
    <!-- Sidebar -->
</div>

<div class="sidebar-background"></div>
</div>
