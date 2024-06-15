<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourHotelResource\Pages;
use App\Filament\Resources\TourHotelResource\RelationManagers;
use App\Models\TourHotel;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TourHotelResource extends Resource
{
    protected static ?string $model = TourHotel::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('tour_id')
                    ->required()->searchable()->preload()->relationship('tour','title'),
                Select::make('hotel_id')
                    ->required()->searchable()->preload()->relationship('hotel','name'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('tour.title')
                    ->sortable()->searchable(),
                Tables\Columns\TextColumn::make('hotel.name')
                    ->sortable()->searchable(),
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
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\DeleteAction::make()
                ])
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
            'index' => Pages\ListTourHotels::route('/'),
            'create' => Pages\CreateTourHotel::route('/create'),
            'edit' => Pages\EditTourHotel::route('/{record}/edit'),
        ];
    }
}
