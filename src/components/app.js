import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import GetStarted from '../routes/get-started';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app" style="vertical-align: center">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<GetStarted path="/get-started" />
				</Router>
			</div>
		);
	}
}
