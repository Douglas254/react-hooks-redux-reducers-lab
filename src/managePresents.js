    // ✓ returns the existing state if the action's type doesn't match a type in the reducer 
    // ✓ increases the number of presents if there the action's type is 'presents/increase' 
    // ✓ adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object 

const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here
  switch (action.type) {
    case "presents/increase":
      return { numberOfPresents: initialState.numberOfPresents + 1 };

    default:
      return state;
  }
}
