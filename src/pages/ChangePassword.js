import React, { useState, useEffect } from 'react'
import { Page, Navbar, List, ListInput, Button } from 'framework7-react'
import { changePassword, showMessage, showError, getMessage } from '../data/actions'
import labels from '../data/labels'

const ChangePassword = props => {
  const [oldPassword, setOldPassword] = useState('')
  const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const patterns = {
      password: /^.{4}$/,
    }
    const validatePassword = value => {
      if (patterns.password.test(value)){
        setOldPasswordErrorMessage('')
      } else {
        setOldPasswordErrorMessage(labels.invalidPassword)
      }
    }
    if (oldPassword) validatePassword(oldPassword)
  }, [oldPassword])
  useEffect(() => {
    const patterns = {
      password: /^.{4}$/,
    }
    const validatePassword = value => {
      if (patterns.password.test(value)){
        setNewPasswordErrorMessage('')
      } else {
        setNewPasswordErrorMessage(labels.invalidPassword)
      }
    }
    if (newPassword) validatePassword(newPassword)
  }, [newPassword])
  useEffect(() => {
    if (error) {
      showError(error)
      setError('')
    }
  }, [error])

  const handleSubmit = async () => {
    try{
      await changePassword(oldPassword, newPassword)
      showMessage(labels.changePasswordSuccess)
      props.f7router.back()
    } catch (err){
      setError(getMessage(props, err))
    }
  }

  return (
    <Page>
      <Navbar title={labels.changePassword} backLink={labels.back} />
      <List form>
        <ListInput
          label={labels.oldPassword}
          type="number"
          placeholder={labels.passwordPlaceholder}
          name="oldPassword"
          clearButton
          errorMessage={oldPasswordErrorMessage}
          errorMessageForce
          onChange={e => setOldPassword(e.target.value)}
          onInputClear={() => setOldPassword('')}
        />
        <ListInput
          label={labels.newPassword}
          type="number"
          placeholder={labels.passwordPlaceholder}
          name="newPassword"
          clearButton
          errorMessage={newPasswordErrorMessage}
          errorMessageForce
          onChange={e => setNewPassword(e.target.value)}
          onInputClear={() => setNewPassword('')}
        />
      </List>
      {!oldPassword || !newPassword || oldPassword === newPassword || oldPasswordErrorMessage || newPasswordErrorMessage ? '' :
        <Button large onClick={() => handleSubmit()}>{labels.submit}</Button>
      }
    </Page>
  )
}
export default ChangePassword
