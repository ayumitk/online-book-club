const initState = {};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create room success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create room error');
      return state;
    default:
      return state;
  }
};

export default roomReducer;
