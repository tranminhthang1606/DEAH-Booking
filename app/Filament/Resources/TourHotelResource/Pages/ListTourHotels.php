<?php

namespace App\Filament\Resources\TourHotelResource\Pages;

use App\Filament\Resources\TourHotelResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTourHotels extends ListRecords
{
    protected static string $resource = TourHotelResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
