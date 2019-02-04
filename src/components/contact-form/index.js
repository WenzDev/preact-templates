import { Component, h } from 'preact';
import style from './style';

class ContactForm extends Component {
	render() {
		return (
			<div class={style.menu}>
				<div className={style.card}>
					<form style={style.form} action="https://formspree.io/jake.rethinker@gmail.com" id="newcust"
						  method="POST"
					>
						<div className={style.padding}>
							<h1 className={style.fillout}> Fill out our form and we'll be in contact with you
								shortly!</h1>
							<input className={style.contactinput} type="text" name="name" placeholder="Full Name"
								   id="fullname"
							/>
						</div>
						<div>
							<input className={style.contactinput} type="text" name="Company Name"
								   placeholder="Company Name" id="cname"
							/>
						</div>
						<div>
							<input className={style.contactinput} type="tel" id="phone" placeholder="(xxx)-xxx-xxxx"
								   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
								   required
							/>
						</div>
						<div>
							<input className={style.contactinput} type="text" name="email" placeholder="Email Address"
								   id="email"
							/>
						</div>
						<button className={style.btn} type="submit" form="newcust" value="Submit">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default ContactForm;
