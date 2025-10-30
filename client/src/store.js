import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/user/user.slice'

export const store = configureStore({
  reducer: {user: userReducer},
})

const persistConfig = {
  key: 'root',
  storage,
}