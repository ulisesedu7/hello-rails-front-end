const FETCH_GREETINGS = 'greeting/FETCH_GREETINGS';

const greetingsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

const fetchGreetings = () => async (dispatch) => {
  const response = await fetch('http://localhost:4000/api/v1/hello');
  const greetings = await response.json();

  dispatch({
    type: FETCH_GREETINGS,
    payload: greetings,
  });
};

export { fetchGreetings };
export default greetingsReducer;
