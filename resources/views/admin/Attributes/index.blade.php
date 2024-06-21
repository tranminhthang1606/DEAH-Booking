@extends('admin.layout.master')
@section('content')
<table class="table">
   <thead>
    <tr>
        <th>ID</th>
        <th>Attribute</th>
        <th>Action</th>
    </tr>
   </thead>
   <tbody>
    @foreach ($attribute as $item)
         <tr>
            <td>{{$item->id}}</td>
            <td>{{$item->attribute}}</td>
            <td>
               <a href="{{route('attributes.create')}}">Thêm</a>
               <a href="{{route('attributes.edit',$item)}}">Eidt</a>
               <form  action="{{route('attributes.destroy',$item)}}" method="post">
                       @method('DELETE')
                       @csrf
                       <button type="submit" onclick="return confirm('xóa k')">Xóa</button>
               </form>
            </td>
         </tr>
    @endforeach
   </tbody>
</table>
@endsection