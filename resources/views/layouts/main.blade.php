<!-- resources/views/layouts/main.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Admin Dashboard</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.banners.index') }}">Banners</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.hotels.index') }}">Hotels</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.posts.index') }}">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.rates.index') }}">Rates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.services.index') }}">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.tourAttributes.index') }}">Tour Attributes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.tourComments.index') }}">Tour Comments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.tours.index') }}">Tours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.tourHotels.index') }}">Tour Hotels</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.tourTypes.index') }}">Tour Types</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.users.index') }}">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.vouchers.index') }}">Vouchers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin.wards.index') }}">Wards</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-4">
        @yield('content')
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
