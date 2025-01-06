import { useContext } from 'react'
import { CardComponent, Header, StyledButton } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          Switch to {themeContext?.appTheme === 'light' ? 'dark' : 'light'}{' '}
          theme
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Profile
