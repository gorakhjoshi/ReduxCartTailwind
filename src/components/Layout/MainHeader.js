import CartButton from '../Cart/CartButton';

const MainHeader = () => {
  return (
    <header className=' xl:bg-blue-500 lg:bg-red-700 md:bg-orange-400 sm:bg-green-600'>
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <ul className='flex'>
          <li className='mr-3'>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
