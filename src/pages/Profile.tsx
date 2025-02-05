import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
import Cookies from 'js-cookie'

// COMPONENTS
import {
  CardComponent,
  Header,
  StyledButton,
  StyledH2,
  FormComponent,
} from '@/components'
import { Container, Grid } from '@mui/material'

// HOOKS
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'

// SERVICES
import { logout } from '@/services'

// TYPES
import {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from '@/types'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
    msg: '',
    type: 'success',
  })

  const clearMessage = () => {
    setTimeout(() => setUpdateMessage({ msg: '', type: 'success' }), 5000)
  }

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile')

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('profile/update')

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
    useDelete('profile/delete')

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Phone', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    })
  }
  const handleDelete = async () => {
    if (
      confirm(
        'Are you sure you want to delete your account? Make sure you delete your leads before...'
      )
    ) {
      try {
        await profileDeleteData()
        alert('Account deleted successfully')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (error) {
        alert('Error deleting account')
      }
    }
  }

  useEffect(() => {
    if (profileUpdateData) {
      setUpdateMessage({
        msg: 'Profile updated successfully',
        type: 'success',
      })
    }

    if (profileUpdateError) {
      setUpdateMessage({
        msg: 'Error updating profile',
        type: 'error',
      })
    }

    clearMessage()
  }, [profileUpdateData, profileUpdateError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">User data</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
                        {
                          className: 'primary',
                          disabled: !formValid || profileUpdateLoading,
                          type: 'submit',
                          onClick: handleSubmit,
                          children: profileUpdateLoading
                            ? 'Hold on...'
                            : 'Update my profile',
                        },
                        {
                          className: 'alert',
                          disabled: profileDeleteLoading,
                          type: 'button',
                          onClick: handleDelete,
                          children: profileDeleteLoading
                            ? 'Hold on...'
                            : 'Delete my account',
                        },
                      ]}
                      message={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2 className="mb-1">Account settings</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Switch to{' '}
                {themeContext?.appTheme === 'light' ? 'dark' : 'light'} theme
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
