@extends('admin.layout.master')

@section('content')
@section('styles')
    <style>
        .limited-text {
            max-height: 100px;
            /* Độ cao tối đa ban đầu của vùng chứa */
            overflow: hidden;
            /* Ẩn nội dung vượt quá max-height */
        }

        .limited-text.expanded {
            max-height: none;
            /* Hiển thị toàn bộ nội dung khi mở rộng */
        }
    </style>
@endsection

<div class="row">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0">Hotels</h4>

                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="{{ route('hotels.index') }}">Hotels</a></li>
                        <li class="breadcrumb-item active"><a href="javascript: void(0);">Details</a></li>
                    </ol>
                </div>

            </div>
        </div>
    </div>
    <div class="card container">
        <div class="card-body">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs mb-3" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home" role="tab" aria-selected="false">
                        Info
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " data-bs-toggle="tab" href="#product1" role="tab" aria-selected="false">
                        Gallary
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#messages" role="tab" aria-selected="false">
                        Services
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#settings" role="tab" aria-selected="true">
                        Comments
                    </a>
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content  text-muted">
                <div class="tab-pane active" id="home" role="tabpanel">
                    <h6>Info hotel</h6>
                    <div class="row">
                        <div class="col-md-4">
                            <p>Name: <strong>{{ $hotel->name }}</strong></p>
                        </div>
                        <div class="col-md-4">
                            <p>Active: <strong> @php
                                echo $hotel->is_active == 1
                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                            @endphp</strong></p>
                        </div>
                        <div class="col-md-4">
                            <p>Status: <strong> @php
                                echo $hotel->status == 1
                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Available</span>'
                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Full</span>';
                            @endphp</strong></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <p>Price: <strong>{{ number_format($hotel->price, 0, '.', '.') }} VND</strong></p>
                            <p>Promotion: <strong>{{ number_format($hotel->promotion, 0, '.', '.') }} VND</strong></p>
                            <p>Address:
                                <strong>
                                    {{ $hotel->address . ', ' . $hotel->ward->name . ', ' . $hotel->district->name . ', ' . $hotel->province->name }}
                                </strong>
                            </p>
                        </div>
                        <div class="col-md-8 ov ">
                            <p class="limited-text">
                                Description: <strong>
                                    {{ $hotel->description }}
                                </strong></p>
                            <button class="btn btn-outline-info button" onclick="toggleText()">Show more</button>
                        </div>
                    </div>
                </div>
                <div class="tab-pane " id="product1" role="tabpanel">
                    <h6>Gallary image hotel</h6>
                    <div class="table-responsive">
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotel->images as $image)
                                    <tr class="">
                                        <td scope="col">{{ $image->id }}</td>

                                        <td>
                                            <img width="200px" height="200px"
                                                src="{{ asset('storage/hotels/' . $image->image) }}" alt="">
                                        </td>
                                        <td>
                                            <form
                                                action="{{ route('hotel_images.destroy', ['hotel_image' => $image->id]) }}"
                                                method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" onclick="return confirm('Are you sure?')">
                                                    <i class="ri-delete-bin-2-line"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach


                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="tab-pane" id="messages" role="tabpanel">
                    <h6>Hotel services</h6>
                    <div class="table-responsive">
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotel->services as $service)
                                    <tr class="">
                                        <td scope="col">{{ $service->id }}</td>

                                        <td>
                                            {{ $service->service }}
                                        </td>
                                        <td>
                                            <form
                                                action="{{ route('hotel_services.destroy', ['hotel_service' => $service->id]) }}"
                                                method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" onclick="return confirm('Are you sure?')">
                                                    <i class="ri-delete-bin-2-line"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach


                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane" id="settings" role="tabpanel">
                    <h6>Hotel comments</h6>
                    <div class="table-responsive">
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotel->comments as $comment)
                                    <tr class="">
                                        <td scope="col">{{ $comment->id }}</td>

                                        <td>
                                            {{ $comment->comments }}
                                        </td>
                                        <td>
                                            <form
                                                action="{{ route('hotel_comments.destroy', ['hotel_comment' => $comment->id]) }}"
                                                method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" onclick="return confirm('Are you sure?')">
                                                    <i class="ri-delete-bin-2-line"></i>
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div><!-- end card-body -->
    </div>
    <!--end col-->


</div>
@section('scripts')
    <script>
        function toggleText() {
            var textContainer = document.querySelector('.limited-text');
            textContainer.classList.toggle('expanded');
            var buttonText = document.querySelector('.button');
            if (textContainer.classList.contains('expanded')) {
                buttonText.textContent = 'Show less';
            } else {
                buttonText.textContent = 'Show more';
            }
        }
    </script>
@endsection
@endsection
