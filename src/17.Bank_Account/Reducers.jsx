export const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };

    case "deposit":
      return { ...state, balance: state.balance + action.payload };

    case "withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };

    case "payLoan":
      return {
        ...state,
        loan: state.loan - 1000,
        balance: state.balance - 1000,
      };

    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;

    default:
      throw new Error("Unkown");
  }
}
