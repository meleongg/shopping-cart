import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Header from './components/Header';
import Shop from './Shop';
import Thanks from './Thanks';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/shop' element={<Shop />}/>
                <Route path='/thanks' element={<Thanks />}/>
            </Routes>
        </BrowserRouter>
    ); 
}

export default RouteSwitch; 