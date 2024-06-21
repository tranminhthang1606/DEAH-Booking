{{-- @extends('admin.layout.admin')
@section('content')
<table class="table">
   <thead>
    <tr>
        <th>ID</th>
        <th>Banner_id</th>
        <th>AImage</th>
        <th>Action</th>
    </tr>
   </thead>
   <tbody>
    @foreach ($bannerImages as $item)
         <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->banner_id}}</td>
            <td>{{$item->image}}</td>

            <td>
               <a href="{{route('bannerimage.create')}}">Thêm</a>
               <a href="{{route('bannerimage.edit',$item)}}">Eidt</a>
               <form  action="{{route('bannerimage.destroy',$item)}}" method="post">
                       @method('DELETE')
                       @csrf
                       <button type="submit" onclick="return confirm('xóa k')">Xóa</button>
               </form>
            </td>
         </tr>
    @endforeach
   </tbody>
</table>
@endsection --}}
@extends('admin.layout.admin')

@section('content')
    <h1>Danh sách ảnh banner</h1>

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ảnh</th>
                <th>Banner</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($bannerImages as $bannerImage)
                <tr>
                    <td>{{ $bannerImage->id }}</td>
                    <td><img src="{{ asset('storage/' . $bannerImage->image) }}" alt="Banner Image" width="100"></td>
                    <td>{{ $bannerImage->banner->title }}</td>
                    <td>
                        <a href="{{ route('bannerimage.show', $bannerImage) }}" class="btn btn-primary">Xem</a>
                        <a href="{{ route('bannerimage.edit', $bannerImage) }}" class="btn btn-secondary">Sửa</a>
                        <form action="{{ route('bannerimage.destroy', $bannerImage) }}" method="POST" style="display: inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger" onclick="return confirm('Bạn có chắc chắn muốn xóa?')">Xóa</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <a href="{{ route('bannerimage.create') }}" class="btn btn-success">Tạo ảnh banner mới</a>
@endsection