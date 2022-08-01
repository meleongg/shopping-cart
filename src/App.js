import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div id='home-container'>
      <div className='home-split-container'>
        <div className='home-text-container'>
          <h1>Vinners, the one-stop shop for all Melssensials!</h1>
        </div>
      </div>
      <div className='home-split-container'>
        <div className='home-text-container'>
          <NavLink id='home-shop-btn' to='/shop'>
            Shop like a Vinner
          </NavLink> 
        </div>
      </div>
    </div>
  );
}

export default App;