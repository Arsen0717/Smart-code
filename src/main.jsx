import { createRoot } from 'react-dom/client'
import { navigation, data  } from './Components/db/db.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App   data={data} navigation={navigation}/>
)

