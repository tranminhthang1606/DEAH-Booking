<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HotelServiceResource\Pages;
use App\Filament\Resources\HotelServiceResource\RelationManagers;
use App\Models\HotelService;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class HotelServiceResource extends Resource
{
    protected static ?string $model = HotelService::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office-2';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('hotel_id')
                    ->required()->preload()->relationship('hotel','name'),
                Select::make('service_id')
                    ->required()->preload()->relationship('service','service'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('hotel.name')
                    ->sortable()->searchable(),
                Tables\Columns\TextColumn::make('service.service')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHotelServices::route('/'),
            'create' => Pages\CreateHotelService::route('/create'),
            'edit' => Pages\EditHotelService::route('/{record}/edit'),
        ];
    }
}
