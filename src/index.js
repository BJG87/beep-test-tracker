import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const app = document.getElementById('app')
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, app)