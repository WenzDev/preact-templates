import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';


class Header extends Component {
	constructor() {
		super();
		this.state ={
			items: ['Home', 'About', 'Login']
		};
	}
	render() {
		return (
			<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px' }}>
				<div className={style.topnav}>
					<a class={style.left} style="float: left" href="/#"> Company Name </a>
					<a class={style.right} href="/get-started">Get Started</a>
				</div>
			</Headroom>
		);
	}
}

export default Header;
