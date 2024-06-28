<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static self ACTIVE()
 * @method static self INACTIVE()
 */
class StatusTour extends Enum
{
    public const WAITCONFIRM = 0;
    public const CONFIRM = 1;
    public const DONE = 2;
    public const CANCEL = 3;
    public const EXPIRES = 4;

    public static function getArrayView(): array
    {
        return [
            self::WAITCONFIRM => 'Chờ xác nhận',
            self::CONFIRM => 'Đã xác nhận',
            self::DONE => 'Hoàn thành',
            self::CANCEL => 'Đã Hủy',
            self::EXPIRES => 'Quá hạn',
        ];
    }

    public static function getValueByKey($key): string
    {
        return self::getArrayView()[$key];
    }
}
