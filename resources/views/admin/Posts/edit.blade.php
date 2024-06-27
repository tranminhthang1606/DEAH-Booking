@extends('admin.layout.master')
@section('content')
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h1>Manage Posts</h1>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts</a></li>
                                <li class="breadcrumb-item active"><a href="">Create</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 card">
                <div class="row">
                    <div class="card-header">{{ $title }}</div>
                    <div class="card-body">
                        <form class="tablelist-form" autocomplete="off" action="{{ route('posts.update', $post->id) }}"
                            method="post" enctype="multipart/form-data">
                            @csrf
                            @method('put')
                            <div class="modal-body">
                                <div class="row">
                                    <div class="mb-3 col-6">
                                        <label for="customername-field" class="form-label">Title
                                        </label>

                                        <input type="text" id="customername-field" class="form-control" name="title"
                                            value="{{ $post->title }}">
                                        @error('title')
                                            <span class="text-danger fw-light "><i>{{ $message }}</i></span>
                                        @enderror
                                    </div>

                                    <div class="col-2">
                                        <label for="date-field" class="form-label">Active
                                        </label>
                                        <div class="form-check form-switch">

                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                                name="is_active" @if ($post->is_active == 1) checked @endif
                                                value="1" id="active">
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="mb-3 col-6">
                                        <label for="customername-field" class="form-label">Thumbnail new
                                        </label>

                                        <input type="file" name="file" class="form-control"
                                            onchange="document.getElementById('thumbnail').src = window.URL.createObjectURL(this.files[0])">
                           
                                        <img id="thumbnail" src="" style="max-width: 200px; max-height:200px;" />

                                    </div>
                                    <div class="mb-3 col-6">
                                        <label for="customername-field" class="form-label">Thumbnail old
                                        </label>
                                        <input type="file" class="form-control" disabled>
                                        <img src="{{ asset($post->thumbnail) }}"
                                            style="max-width: 200px; max-height:200px;" />


                                    </div>
                                </div>
                                <div class="mt-3">
                                    <label for="customername-field" class="form-label">Body
                                    </label>
                                    <textarea name="body" class="ckeditor-classic form-control">
                                        {{ $post->body }}
                                                </textarea>
                                    @error('body')
                                        <span class="text-danger fw-light "><i>{{ $message }}</i></span>
                                    @enderror
                                </div>
                            </div>
                            <div class="modal-footer mt-3">
                                <div class="hstack gap-2 justify-content-end">
                                    <button type="submit" class="btn btn-success" id="add-btn">Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    </div>
@endsection
