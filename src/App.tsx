import "./styles.css";

import { useState } from "react";
import { ProductList } from "./components/product-list";
import { LoadButton } from "./components/load-button";

const generateNumbers = (count: number) =>
  Array.from(Array(count + 1).keys()).slice(1);
const products = generateNumbers(5);

const initialList = [{ products }];

function useLoadMore<T>(
  initialList: T[],
  loadMore: () => T
): { list: T[]; loadPrevious: () => void; loadNext: () => void } {
  const [list, setList] = useState<T[]>(initialList);

  const loadPrevious = () => {
    const newItem = loadMore();
    setList((prev) => [newItem].concat(prev));
  };

  const loadNext = () => {
    const newItem = loadMore();
    setList((prev) => prev.concat(newItem));
  };

  return {
    list,
    loadPrevious,
    loadNext
  };
}

const loadFn = () => ({ products: generateNumbers(4) });

export default function App() {
  const { list, loadPrevious, loadNext } = useLoadMore(initialList, loadFn);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <LoadButton onClick={loadPrevious}>previous</LoadButton>
      {list?.length
        ? list.map(({ products }, index) => (
            <ProductList key={index} products={products} />
          ))
        : null}
      <LoadButton onClick={loadNext}>next</LoadButton>
    </div>
  );
}
