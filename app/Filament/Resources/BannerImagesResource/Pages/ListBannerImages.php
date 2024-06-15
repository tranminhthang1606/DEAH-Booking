<?php

namespace App\Filament\Resources\BannerImagesResource\Pages;

use App\Filament\Resources\BannerImagesResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBannerImages extends ListRecords
{
    protected static string $resource = BannerImagesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
