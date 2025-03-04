import './Header.css'
import Nav from '../Nav/Nav'
import Elem from '../start-button/start-button'
import png from "../../assets/play-button.png"
import Logos from './logos/logos'

function Header(props) {
console.log(props);

    return (
        <header className="header">

<Nav  navigation={props.navigation}/>
            <div className="middle">
                <div className='text'>
                    <div className="sov-crag">
                        <div >Սովորի՛ր ծրագրավորում</div>
                        <div>Դարձի՛ր պահանջված մասնագետ</div>
                    <div className='bottm-text'>
                        Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
                      </div>
                    </div>


                    <div className="vd-elem">
                       <Elem />
                        <div className="logos-tesanyut">
                        <div className='logo-tesanyut'>
                            <img className='vd' src={png} height={"24px"} />
                            <span className='tesanyut'> Տեսանյութ</span>
                        </div>
                        <Logos logos={props.logos}/>
                        </div>
                    </div>
                </div>
                <div className="nav-image">
                    <img className="img" src="https://smartcode.am/public/image/header.svg" alt="Header Graphic" />
                    </div>

</div>
        </header>
        )
}

export default Header














