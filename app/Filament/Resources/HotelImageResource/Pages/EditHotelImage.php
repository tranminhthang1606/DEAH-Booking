<?php

namespace App\Filament\Resources\HotelImageResource\Pages;

use App\Filament\Resources\HotelImageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHotelImage extends EditRecord
{
    protected static string $resource = HotelImageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
