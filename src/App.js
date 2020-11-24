
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
