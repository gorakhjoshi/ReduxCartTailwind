import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-redux';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const increaseAmountHandler = (id) => {
    dispatch(cartActions.increaseAmount(id));
  };
  const decreaseAmountHandler = (id) => {
    dispatch(cartActions.decreaseAmount(id));
  };

  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div>
          ${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button onClick={() => decreaseAmountHandler(id)}>-</button>
          <button onClick={() => increaseAmountHandler(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
