import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <section>
      <h1>Hi Everyone</h1>
      <p>{ text }</p>
    </section>
  );
};

export default Greeting;
