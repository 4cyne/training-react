import React from 'react'
import ReactDOM from 'react-dom/client'

import Layout from './components/layout/Layout.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './services/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</React.StrictMode>
)
