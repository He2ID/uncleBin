import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './conponents/Counter'
import counter from './reducers'

const store = createStore( counter );
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
	<Counter 
		value={store.getState()}
		onIncrement={
			function() {
				// console.log( store.dispatch({type:'INCREMENT'}) )
				store.dispatch({type:'INCREMENT'})
			}
		}
		onDecrement={() => store.dispatch({type:'DECREMENT'})}
	/>,
	rootEl
);

render();
store.subscribe(render);