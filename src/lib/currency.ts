const formatIndianRupees = (amount: number | string) => {
    const numericAmount = typeof amount === 'string' ? Number(amount) : amount;
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    return `${currency}${numericAmount.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
    })}`;
};

export { formatIndianRupees };
