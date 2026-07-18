const INR_RATE = 93;

export const formatIndianRupees = (amount: number | string) => {
    const value = Number(amount) || 0;
    const convertedAmount = value * INR_RATE;
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    return `${currency}${convertedAmount.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    })}`;
};
