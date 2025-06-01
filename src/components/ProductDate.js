import './ProductDate.css';

function ProductDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const date = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (<div className='product-date'>
        <div className='product-date_month'>{month}</div>
        <div className='product-date_year'>{year}</div>
        <div className='product-date_date'>{date}</div>
    </div>);
}

export default ProductDate;