<?php

namespace App\Filament\Resources\TourHotelResource\Pages;

use App\Filament\Resources\TourHotelResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTourHotel extends EditRecord
{
    protected static string $resource = TourHotelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
