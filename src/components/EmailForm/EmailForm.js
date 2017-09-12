import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
  Label,
} from 'reactstrap';

const EmailForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>Интересно? Введите email и получите сслыку на 3 реальных домашних задания.</Label>
        <Field required className="form-control" name="email" component="input" type="email"/>
      </div>
      <button type="submit" style={{marginTop: '1rem'}} className="btn btn-lg btn-secondary" disabled={pristine || submitting}>Получить ссылку!</button>
    </form>
  )
}

export default reduxForm({
  form: 'email'  // a unique identifier for this form
})(EmailForm)
