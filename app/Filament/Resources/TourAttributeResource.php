<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourAttributeResource\Pages;
use App\Filament\Resources\TourAttributeResource\RelationManagers;
use App\Models\TourAttribute;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TourAttributeResource extends Resource
{
    protected static ?string $model = TourAttribute::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('tour_id')
                    ->required()->searchable()->preload()->relationship('tour','title'),
                Select::make('attribute_id')
                    ->required()->searchable()->preload()->relationship('attribute','attribute'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('tour.title')
                    ->sortable()->searchable(),
                Tables\Columns\TextColumn::make('attribute.attribute')
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
            'index' => Pages\ListTourAttributes::route('/'),
            'create' => Pages\CreateTourAttribute::route('/create'),
            'edit' => Pages\EditTourAttribute::route('/{record}/edit'),
        ];
    }
}
