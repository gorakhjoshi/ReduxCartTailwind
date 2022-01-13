import ProductItem from './ProductItem';

const DUMMY_ITEMS = [
  { title: 'Test1', price: 10, description: 'Product1', id: 1 },
  { title: 'Test2', price: 20, description: 'Product2', id: 2 },
];

const productItems = DUMMY_ITEMS.map((el, i) => {
  return (
    <ProductItem
      title={el.title}
      price={el.price}
      description={el.description}
      id={el.id}
      key={i}
    />
  );
});

const Products = () => {
  return (
    <section>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
