@extends('admin.layout.master')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Vouchers</h1>
                <a href="{{ route('services.create') }}" class="btn btn-primary mb-3">Add New Voucher</a>
                <div class="card">
                    <div class="card-header">Voucher List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <script>
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: '{{ session('success') }}',
                                });
                            </script>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Voucher</th>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Value</th>
                                    <th>Discount Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($vouchers as $voucher)
                                    <tr>
                                        <td>{{ $voucher->voucher }}</td>
                                        <td>{{ $voucher->title }}</td>
                                        <td>{{ $voucher->qty }}</td>    
                                        <td>{{ $voucher->value }}</td>
                                        <td>{{ $voucher->discount_type==0?'Giảm Phần Trăm':'Giảm Tiền' }}</td>                                           
                                        <td>
                                           
                                            <a href="{{ route('services.edit', $voucher->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('services.destroy', $voucher->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this tour?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                   </div>
                </div>
            </div>
        </div>
    </div>
@endsection