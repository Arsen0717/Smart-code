// import ".../Features-child/Features-child.css"
import "./Features-child.css"
function Featureschild(props) {
  return (
    props.features.map((elem, index) => {
        return (
            <div className="features-info-item" key={index}>
               <p><img src={`../assets}/${elem.icon}.png`} alt=""/> {elem.title}</p>
                <p>{elem.info}</p>
            </div>
        )
    })
  )
}

export default Featureschild
