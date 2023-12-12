import React from 'react';
import './index.css';
import Kartitems from './kartitems';
import App from './App';

//class Kart extends React.Component{
const Kart =(props)=>{
  
        const {products}=props;      
        return(

            <div className='kart'>
                {products.map((product)=>{
                    return (
                    <Kartitems 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteQuantity={props.onDeleteQuantity}
                    /> 
                    )
                })}
            
           
  
            </div>        
        );
    }





export default Kart;
