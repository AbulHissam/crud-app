export const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, users: [...state.users, action.payload] };
    case "UPDATE":
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user.id !== action.payload.id),
          action.payload,
        ],
      };
    case "DELETE":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
