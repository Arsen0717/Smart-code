import Elem from '../start-button/start-button'
import './Nav.css'
 
 function Nav(props) {
  
  return (
    <nav className="nav">
      <img className="logo" src="https://smartcode.am/public/image/logo.png?v=1" alt="SmartCode Logo" />
      <div className="buttons">

     
    {
      props.navigation.map(el => {
        return <div className='nav-item'>{el}</div>
      } )
    }


        <Elem />
      </div>
    </nav>
  )
};



export default Nav