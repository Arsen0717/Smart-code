import Logos from './Components/Header/logos/logos'
import './App.css'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Features from './Components/Features/Features'


function App(props) {
  return (
<>
  
<Header navigation={props.navigation}/>
<Middle data={props.data} />
<Features features={props.features} />
</>
  )
}
export default App

    //  lessons, trainers, contact 
