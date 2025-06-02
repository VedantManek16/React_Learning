import { useState } from 'react';
import './ProductForm.css'
function ProductForm(props){
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');
    function titleChangedHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function dateChangedHandler(event){
        setDate(event.target.value);
        //console.log(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };
       // console.log(productData)
        props.onSaveProduct(productData);

        setDate('');
        setTitle('');
    }
    return(<form onSubmit={submitHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input type='text'value={newTitle} onChange={titleChangedHandler}></input>
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type='date' value={newDate} min='2025-01-01' max = '2025-12-12' onChange={dateChangedHandler}></input>
        </div>
        <div className='new-product_button'> 
            <button type='submit'>Add Product</button>
        </div>
    </form>)
}
export default ProductForm;