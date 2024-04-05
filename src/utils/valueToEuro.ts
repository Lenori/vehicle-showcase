export default function valueToEuro(number: number) {
    const formatter = new Intl.NumberFormat('en-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    return formatter.format(number);
}
