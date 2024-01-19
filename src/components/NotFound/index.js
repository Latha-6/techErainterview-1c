import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="notFoundCard">
      <img
        className="notFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="notfoundHeading">Page Not found</h1>
      <p className="notFoundInfo">
        we are sorry,the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
