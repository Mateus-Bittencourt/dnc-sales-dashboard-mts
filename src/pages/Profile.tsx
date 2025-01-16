import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'

// COMPONENTS
import { CardComponent, Header, StyledButton, StyledH2 } from '@/components'
import { Container, Grid } from '@mui/material'

// SERVICES
import { logout } from '@/services'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2>User Name</StyledH2>
              <p>Email: user@example.com</p>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 Main St, City, State, ZIP</p>
            </CardComponent>
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
