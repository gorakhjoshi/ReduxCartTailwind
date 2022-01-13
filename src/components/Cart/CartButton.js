import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <div>
      <button
        className='inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
        onClick={cartToggleHandler}
      >
        <span>My Cart</span>
        <span>{totalQuantity}</span>
      </button>
      <button
        className='inline-block border border-yellow-500 rounded py-1 px-3 bg-yellow-500 text-white'
        disabled={totalPrice.reduce((acc, item) => acc + item.total, 0) > 50}
      >
        <span>Checkout</span>
      </button>
    </div>
  );
};

export default CartButton;
