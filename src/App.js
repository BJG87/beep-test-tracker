import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

function App() {
    return <>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />}> </Route>
                    <Route path='about' element={<About />}> </Route>
                </Routes>
            </>
}
export default App