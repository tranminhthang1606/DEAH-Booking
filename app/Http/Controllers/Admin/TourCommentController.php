<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TourComment;

class TourCommentController extends Controller
{
     // Lấy danh sách các tour comments
     public function index()
     {
         $tourComments = TourComment::all();
         return response()->json($tourComments);
     }
 
     // Lấy thông tin chi tiết của một tour comment
     public function show($id)
     {
         $tourComment = TourComment::find($id);
         if ($tourComment) {
             return response()->json($tourComment);
         } else {
             return response()->json(['message' => 'Tour Comment not found'], 404);
         }
     }
 
     // Tạo mới một tour comment
     public function store(Request $request)
     {
         $validatedData = $request->validate([
             'comments' => 'required|string|max:255',
             'tour_id' => 'required|integer|exists:tours,id',
             'user_id' => 'required|integer|exists:users,id'
         ]);
 
         $tourComment = TourComment::create($validatedData);
         return response()->json($tourComment, 201);
     }
 
     // Cập nhật một tour comment
     public function update(Request $request, $id)
     {
         $validatedData = $request->validate([
             'comments' => 'required|string|max:255',
             'tour_id' => 'required|integer|exists:tours,id',
             'user_id' => 'required|integer|exists:users,id'
         ]);
 
         $tourComment = TourComment::find($id);
         if ($tourComment) {
             $tourComment->update($validatedData);
             return response()->json($tourComment);
         } else {
             return response()->json(['message' => 'Tour Comment not found'], 404);
         }
     }
 
     // Xóa một tour comment
     public function destroy($id)
     {
         $tourComment = TourComment::find($id);
         if ($tourComment) {
             $tourComment->delete();
             return response()->json(['message' => 'Tour Comment deleted']);
         } else {
             return response()->json(['message' => 'Tour Comment not found'], 404);
         }
     }
}
