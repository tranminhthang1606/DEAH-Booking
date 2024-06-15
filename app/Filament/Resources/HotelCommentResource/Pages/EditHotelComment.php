<?php

namespace App\Filament\Resources\HotelCommentResource\Pages;

use App\Filament\Resources\HotelCommentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHotelComment extends EditRecord
{
    protected static string $resource = HotelCommentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
