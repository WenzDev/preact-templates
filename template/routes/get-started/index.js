import { h, Component } from 'preact';
import style from './style';
import ContactForm from '../../components/contact-form';

class GetStarted extends Component {

	constructor() {
		super();
		this.state = {

		};
	}
	render() {
		return (
			<div class={style.home} >
				<div class={style.inputs}>
					<ContactForm />
				</div>
			</div>
		);
	}
}

export default GetStarted;
