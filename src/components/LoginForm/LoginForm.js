import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
  Label,
} from 'reactstrap';

const LoginForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>Ваш email</Label>
        <Field required className="form-control" name="email" component="input" type="email"/>
      </div>
      <div>
        <Label for="password">Пароль</Label>
        <Field required className="form-control" name="password" component="input" type="password"/>
      </div>
      <button type="submit" style={{marginTop: '1rem'}}className="btn btn-secondary" disabled={pristine || submitting}>Войти</button>
    </form>
  )
}

export default reduxForm({
  form: 'login'  // a unique identifier for this form
})(LoginForm)
