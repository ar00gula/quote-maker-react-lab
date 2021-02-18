export default function quotes(state = [], action) {
  let idx
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      let upvoteTarget = state[idx]
      upvoteTarget.votes += 1
      return [...state.slice(0, idx), upvoteTarget, ...state.slice(idx + 1)];
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      let downvoteTarget = state[idx]
      if (downvoteTarget.votes > 0) {
        downvoteTarget.votes -= 1
      }
      return [...state.slice(0, idx), downvoteTarget, ...state.slice(idx + 1)];

    default:
      return state;
  }
}
