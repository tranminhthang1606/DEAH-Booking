<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserVoucherResource\Pages;
use App\Filament\Resources\UserVoucherResource\RelationManagers;
use App\Models\UserVoucher;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserVoucherResource extends Resource
{
    protected static ?string $model = UserVoucher::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('voucher_id')
                    ->required()
                    ->searchable()
                    ->preload()->relationship('vouchers','title'),
                Select::make('user_id')
                ->required()
                ->searchable()
                ->preload()->relationship('users','email'),
                Forms\Components\Toggle::make('using_voucher')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('vouchers.voucher')
                    ->sortable(),
                Tables\Columns\TextColumn::make('users.name')
                    ->sortable(),
                Tables\Columns\IconColumn::make('using_voucher')
                    ->boolean(),
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
            'index' => Pages\ListUserVouchers::route('/'),
            'create' => Pages\CreateUserVoucher::route('/create'),
            'edit' => Pages\EditUserVoucher::route('/{record}/edit'),
        ];
    }
}
