import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className={style.home}>
				<div class={style.main}>
					<h1 className={style.header}> Company Name </h1>
					<h2 className={style.follow}> Company Description </h2>
					<div>
						<a href="/get-started">
							<btn className={style.btn}>Get Started</btn>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
