import React from 'react';

interface CurrencyFormatterProps {
    amount: number;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({ amount }) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        currency: 'VND',
    });

    return <span>{formatter.format(amount)}</span>;
};

export default CurrencyFormatter;