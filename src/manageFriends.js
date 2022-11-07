// adds the friend when type is 'friends/add' and the action has a payload property with a name, hometown and id
// removes the friend when action type is 'friends/remove' and the action has a property of the friends id to be removed
// adheres to the rules of being a pure function, by not changing the original state, and instead returning a new object
// returns the existing state if the action's type doesn't match a type in the reducer

export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };

    case "friends/remove":
      return {
        friends: [
          ...state.friends.filter((friend) => friend.id !== action.payload),
        ],
      };

    default:
      return state;
  }
}
