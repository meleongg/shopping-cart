import '../styles/shop.css';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Item = (props) => {
    const { id, imageName, name, price, quantity, updateCart } = props;

    const handleAddItem = (e) => {
        const btnId = e.target.id; 
        const id = btnId.slice(0, -4);
        const inputId = id + '-input';
        const quant = document.getElementById(inputId).value; 
        let newQuant = parseInt(quant) + parseInt(quantity);
        updateCart(id, newQuant);
        document.getElementById(inputId).value = '';
    }

    return (
        <li className='item'>
            <h2>{name}</h2>
            <img className='item-img' src={images[imageName]} alt='foam roller'></img>
            <p>Price: ${price}</p>
            <div className='quant-container'>
                <label htmlFor='quant'>Quantity: </label>
                <input id={id + '-input'} type='number' name='quant'></input>
                <button id={id + '-btn'} onClick={(e) => handleAddItem(e)} className='add-btn'>Add</button>
            </div>
        </li>
    );
}

export default Item; 