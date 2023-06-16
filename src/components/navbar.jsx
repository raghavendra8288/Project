import YTLogo from '../images/YTLogo.png'
import '../styles/navbar.css'
import notification from '../images/notification.png'
import video from '../images/video.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img width={150} src={YTLogo} alt="" />
      </div>
      <div className="searchBar">
        <input type="text" placeholder='Search' />
      </div>
      <div className="userOptions">
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/add-video">Add Video</Link>
        </div>
        <div className="notification">
          <img width={40} src={notification} alt="" />
        </div>
        <div className="video">
          <img width={40} src={video} alt="" />
        </div>
        <div className="name">
          <h4>R</h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar;