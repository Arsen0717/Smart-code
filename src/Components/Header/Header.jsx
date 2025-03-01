import './Header.css'
import Nav from '../Nav/Nav'
import Elem from '../start-button/start-button'
import png from "../../assets/play-button.png"


function Header(props) {
console.log(props);

    return (
        <header className="header">

<Nav  navigation={props.navigation}/>
            <div className="middle">
                <div className='text'>
                    <div className="sov-crag">
                        <div className='sovorir'>Սովորի՛ր</div>
                        <div> ծրագրավորում </div>
                    </div>
                    <div className='sov-crag'>
                        <div className='sovorir'>Դարձի՛ր </div>
                        <div> պահանջված մասնագետ </div>
                    </div>



                    <div className='bottm-text'>
                        Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
                    </div>
                    <div className="vd-elem">
                       <Elem />
                        <div className='logo-tesanyut'>
                            <img className='vd' src={png} height={"24px"} />
                            <span className='tesanyut'> Տեսանյութ</span>
                        </div>
                    </div>


                </div>

                <div className="nav-image">
                    <img className="img" src="https://smartcode.am/public/image/header.svg" alt="Header Graphic" /></div>
            </div>
        </header>
        )
}

export default Header














