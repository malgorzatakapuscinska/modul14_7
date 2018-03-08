var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			<form className = {'contact_form form-group'}>
				<label htmlFor={'name'}>Imię: </label>
				<input className={'form-control'} type = {'text'} id = {'name'} placeholder = {'Wpisz imię'} value = {this.props.contact.firstName}></input>
				<label htmlFor={'surname'}> Nazwisko: </label>
				<input className={'form-control'} type = {'text'} id = {'surname'} placeholder= {'Wpisz nazwisko'} value = {this.props.contact.lastName}></input>
				<label htmlFor = {'email'}>Email:</label>
				<input className = {'form-control'} type = {'text'} id = {'email'} placeholder = {'Wpisz e-mail'} value = {this.props.contact.email}></input>
				<button	type = {'submit'} className = {'btn btn-primary'}>Dodaj kontakt</button>
			</form> 
		);
	}
});