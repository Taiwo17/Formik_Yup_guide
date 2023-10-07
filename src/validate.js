export const validate = (values) => {
  let errors = {}
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Please input your password'
  } else if (values.password.length < 8) {
    errors.password = 'The password must be greater than 8 characters'
  } else if (
    !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).*$/.test(values.password)
  ) {
    errors.password =
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&+=)'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}
