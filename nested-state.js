const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Sam",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("initial state", store.getState());

const unsbuscribe = store.subscribe(() => {
  console.log("update state", store.getState());
});
store.dispatch(updateStreet("456 Main St"));

unsbuscribe();
