
import './App.css'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
// import Header from './Components/Header/Header'


function App(props) {
  return (

<div>
<Header navigation={props.navigation}/>
<Middle data={props.data} />
</div>
     
  )
}
export default App

