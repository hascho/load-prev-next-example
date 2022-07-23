import { useStyles } from "./useStyles";
import type { ProductListProps } from "./ProductList.types";

export const ProductList = (props: ProductListProps) => {
  const { products } = props;
  const styles = useStyles();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <ul style={styles.container}>
      {products.map((product) => (
        <li style={styles.item} key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
};
