<?php

namespace App\Filament\Resources\HotelCommentResource\Pages;

use App\Filament\Resources\HotelCommentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHotelComments extends ListRecords
{
    protected static string $resource = HotelCommentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
