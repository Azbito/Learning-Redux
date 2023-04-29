import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/user/actions'

export default function Header() {
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()

  const handleLoginClick = () => {
    dispatch(
      loginUser({
        name: "Kog'Maw",
        email: 'timetofeed@hotmail.com'
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '2rem',
        gap: '2rem'
      }}
    >
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
        <button onClick={() => handleLogoutClick()}>Logout</button>
      ) : (
        <button onClick={() => handleLoginClick()}>Login</button>
      )}
    </div>
  )
}
