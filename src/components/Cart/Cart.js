import Card from '../UI/Card';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItemArr = useSelector((state) => state.cart.items);
  const cartItems = cartItemArr.map((el, i) => {
    return (
      <CartItem
        item={{
          title: el.title,
          quantity: el.quantity,
          total: el.total,
          price: el.price,
          id: el.id,
        }}
        key={i}
      />
    );
  });
  return (
    <Card>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
    </Card>
  );
};

export default Cart;
