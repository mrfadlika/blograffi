import { h } from "preact";

const PriceFormatter = ({ amount }) => {
  const formatPrice = (price) => {
    if (price === "0" || price === "Gratis" || price === 0) {
      return "Gratis";
    }
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return <span>{formatPrice(amount)}</span>;
};

export default PriceFormatter;
