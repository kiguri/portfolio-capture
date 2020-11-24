
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork/'
import Nav from './components/Nav'
import MovieDetail from './pages/MovieDetail/'

import {Switch, Route} from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path='/' component={AboutUs} />
                <Route exact path='/work' component={OurWork} />
                <Route path='/work/:id' component={MovieDetail} />
                <Route path='/contact' component={ContactUs} />
            </Switch>
        </div>
    );
}

export default App;
