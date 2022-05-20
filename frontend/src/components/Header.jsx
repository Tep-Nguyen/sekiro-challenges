import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import logo from '../resources/logo.png'
import titlecard from '../resources/titlecard.png'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'><img src={logo} width={15.189119170984} height={13} alt=''/> Sekiro Challenges <img src={logo} width={15.189119170984} height={13} alt=''/></Link>
      </div>
      <div className='titlecard'>
        <a href='https://www.sekirothegame.com/content/atvi/sekiro/web/en/home.html' target='_blank' rel='noreferrer'><img src={titlecard} width={132.57142857143} height={32} alt=''/></a>

      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
             </button>
           </li>
          </>
          
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
