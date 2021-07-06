const initState = {
  options: {
    loading: false,
    amount_of_questions: 10,
    index: 0,
    score: 0
  },
  questions: [],
  questionStatus: []
}

const Reducer = (state = initState, action) => {
  switch (action.type) {

    case "CHANGE_LOADING":
      return {
        ...state,
        options: {
          ...state.options,
          loading: action.value
        }
      }

    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions
      }

    case "SET_INDEX":
      return {
        ...state,
        options: {
          ...state.options,
          index: action.index
        }
      }

    case "SET_SCORE":
      return {
        ...state,
        options: {
          ...state.options,
          score: action.score
        }
      }

    default:
      return state
  }
}
export default Reducer