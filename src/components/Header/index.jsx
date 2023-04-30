import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/user/actions'
import Button from '../Button'
import './styles.scss'

export default function Header() {
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()

  const handleLoginClick = () => {
    dispatch(
      loginUser({
        name: 'Hooman'
      })
    )
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const todaysDate = new Date()
  const todaysWeekDay = weekDays[todaysDate.getDay()]

  return (
    <div className="container">
      <img
        style={{ width: '4rem' }}
        src="https://bognarjunior.files.wordpress.com/2018/08/download.png"
        alt="Redux logo"
      />
      <strong>Learning Redux!</strong>
      {currentUser ? (
        <p>
          Happy {todaysWeekDay}, <b>{currentUser.name}!</b>
        </p>
      ) : (
        <></>
      )}
      {currentUser ? (
        <Button title="Login" onClick={() => handleLogoutClick()} />
      ) : (
        <Button title="Logout" onClick={() => handleLoginClick()} />
      )}
    </div>
  )
}
