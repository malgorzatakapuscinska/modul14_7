var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired,
	},
	render: function(){
		return (
			React.createElement('form', {className: 'contact_form form-group'},
				React.createElement('label', {htmlFor: 'name' }, 'Imię: '),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					id: 'name',
					placeholder: 'Wpisz imię', 
					value: this.props.contact.firsName
				}),
				React.createElement('label', {htmlFor: 'surname'}, 'Nazwisko: '),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					id: 'surname',
					placeholder: 'Wpisz nazwisko',
					value: this.props.contact.lastName
				}),
				React.createElement('label', {htmlFor: 'email'}, "e-mail: "),
				React.createElement('input', {
					className: 'form-control',
					type: 'text',
					id: 'email',
					placeholder: 'Wpisz e-mail',
					value: this.props.contact.email
				}),
				React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, 'Dodaj kontakt')
			)
		);
	}
});
