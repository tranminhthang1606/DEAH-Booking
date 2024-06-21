<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static self ACTIVE()
 * @method static self INACTIVE()
 */
class StatusPayment extends Enum
{
    public const UNPAID = 0;
    public const PAID = 1;
    public const REFUND = 2;
    public const REFUNDED = 3;
    public const EXPIRES = 4;

    public static function getArrayView(): array
    {
        return [
            self::UNPAID => 'Chưa thanh toán',
            self::PAID => 'Đã thanh toán',
            self::REFUND => 'Hoàn tiền',
            self::REFUNDED => 'Đã hoàn tiền',
            self::EXPIRES => 'Quá hạn',
        ];
    }

    public static function getValueByKey($key): string
    {
        return self::getArrayView()[$key];
    }
}
