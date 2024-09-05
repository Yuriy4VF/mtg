import { Tuple, configureStore } from "@reduxjs/toolkit"

const initialState = { lang: "ru", openSelect: false }

const reducer = (
  state: {
    lang: string
    openSelect: boolean
  } = initialState,
  action: { type: string; payload: any },
) => {
  if (action.type === "TOGGLE_SELECT") {
    return { ...state, openSelect: !state.openSelect }
  }
  if (action.type === "SELECT_LANGUAGE") {
    return { ...state, lang: action.payload }
  }
  return state
}

const store = configureStore({
  reducer,
  middleware: () => new Tuple(),
})

export type State = ReturnType<typeof store.getState>

export default store
