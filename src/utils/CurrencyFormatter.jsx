export default function CurrencyFormatter(locale = "en-US", number) {
  const formattedNumber = new Intl.NumberFormat(locale).format(number);

  return formattedNumber;
}
