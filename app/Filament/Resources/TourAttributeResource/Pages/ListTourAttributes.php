<?php

namespace App\Filament\Resources\TourAttributeResource\Pages;

use App\Filament\Resources\TourAttributeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTourAttributes extends ListRecords
{
    protected static string $resource = TourAttributeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
