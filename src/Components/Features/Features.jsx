
import Elem from "../start-button/start-button"
import Featureschild from "./Features-child/Features-child"
// import './Features-child.css'
import "../Features/Features-child/Features-child.css"
function Features(props) {
  return (
    <div className="features">
        <div className="features-title">
            <h2>Ինչո՞ւ սովորել մեզ մոտ</h2>
            <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
        </div>
        <div className="features-box">
            <div className="features-img">
                <img src="https://smartcode.am/public/image/per2.svg" />
            </div>
            <div className="features-info">
                <Featureschild features={props.features}  />
            </div>
        </div>
        <div className="features-btn">
           <Elem />
        </div>
    </div>
  )
}

export default Features