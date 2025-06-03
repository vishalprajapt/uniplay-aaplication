
import App from "./App.jsx";
import ReactDom from "react-dom/client";
import Store from "./Redux/Store.jsx";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

//import  {BrowserRouter} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
let data=ReactDom.createRoot(document.getElementById("root"))


data.render( <Provider store={Store}>
    <App /> 
</Provider>)

























// import App from "./App";
// import ReactDOM from 'react-dom/client'

// let root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)










// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
