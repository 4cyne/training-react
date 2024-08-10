import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mallApi } from './malApi'

export const store = configureStore({
	reducer: {
		[mallApi.reducerPath]: mallApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(mallApi.middleware),
})

setupListeners(store.dispatch)
