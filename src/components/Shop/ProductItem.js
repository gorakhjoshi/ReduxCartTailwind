import Card from '../UI/Card';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-redux';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <li>
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button
            onClick={() => {
              addItemHandler({ title, price, description, id });
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
