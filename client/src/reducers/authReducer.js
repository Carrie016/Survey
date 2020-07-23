import { FETCH_USER } from "../actions/types";
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

//after auth reducer ran and fetched a new piece of states
// then our redux state updates and b/c of it, all the components
//in our app re render as well with that new state
//then in Header, this.props.auth updates as well
