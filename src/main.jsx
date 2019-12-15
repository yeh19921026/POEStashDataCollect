
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.jsx'
//import Container from './container.jsx'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const App = () => {
	return (
		<div>
			<NavBar />
			<Container />
		</div>
	);
};
//const MyComponent = () => {return <nav></nav>};

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<Router>
	<App />
</Router>, document.getElementById('app'));
console.log('app run');