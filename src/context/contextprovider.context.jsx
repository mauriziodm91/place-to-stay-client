import { createContext, useReducer } from 'react'
import { createAction } from '../utils/createAction.js'

export const Context = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const ACTION_TYPES = {
  USER_UPDATE: 'USER_UPDATE',
}

const INITIAL_STATE = {
  currentUser: null,
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.USER_UPDATE:
      return { ...state, currentUser: payload }
    default:
      throw new Error('no matched action')
  }
}

export const ContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setCurrentUser = (user) => {
    dispatch(createAction(ACTION_TYPES.USER_UPDATE, user))
  }
  const value = { currentUser, setCurrentUser }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
