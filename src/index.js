import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Posts from './Posts.js';
import Dpost from './Dpost.js';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'




ReactDOM.render(<Router >
<div>
	
	<Route exact path="/" component={App}/>
	<Route exact path="/posts/:id" component={Posts}/>
	<Route path="/detailPost/:id" component={Dpost}/>
	
</div>

</Router>
, document.getElementById('root'));
registerServiceWorker();
