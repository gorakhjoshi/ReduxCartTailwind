const Card = (props) => {
  return (
    <section className='p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      {props.children}
    </section>
  );
};

export default Card;
