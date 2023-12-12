import React from 'react';
import './index.css';

//class Kartitems extends React.Component{
const Kartitems=(props)=>{

    // //function To increarse quantity
    // //use arrow function to bind this
    // increaseQuantity=()=>{
    //     //increases the value in console but the react doesnt know that we are updating the quantity value
    //     //this.state.quantity += 1;
    //     //console.log('this', this.state);
    //     //process1
    //     /*this.setState({
    //         quantity:this.state.quantity+=1
    //     });*/ 
    //     //swallow merging

    //     //process 2-from previous state is prev. is required
    //     this.setState((prevState)=>{
    //         return{
    //             quantity:prevState.quantity+=1
    //         }
    //     }) 
    //  }

    //  //function to decrease items
    //  decreaseQuantity=()=>{
    //     const {quantity}=this.state; 
    //     if(quantity == 0) return;
    //     this.setState((prevState)=>{
    //         return{
    //             quantity:prevState.quantity-=1
    //         }
    //     }
    //     //, ()=> {
    //     //    console.log('this.state', this.state)}
    //      )

    //  }

        //console.log('this.props', this.props)
        const { price, title, quantity} = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = props;
                return(
            <div className ="kart-items">
                
                <div className="left-block">
                    <img style={Styles.image} src={product.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25 }}>{title}</div>
                    <div style={{color:'green' }}>Price : {price}</div>
                    <div style={{color:'green' }}>Quantity : {quantity}</div>
                    <div className='kart-item-actions'>
                        
                        <img src='https://www.flaticon.com/svg/vstatic/svg/3914/3914248.svg?token=exp=1701662205~hmac=13fbb23a047d668382e35bae23ca9498' alt='Add' className='action-icons' onClick={()=> onIncreaseQuantity(product)}/>
                        <img src='https://cdn-icons.flaticon.com/svg/10469/10469730.svg?token=exp=1701662612~hmac=e5d76109f6f087edb71a688a3cdb1151' alt='Deduct' className='action-icons' onClick={()=> onDecreaseQuantity(product)}/>
                        <img src='https://cdn-icons.flaticon.com/svg/3917/3917242.svg?token=exp=1701662612~hmac=ec9da94dd6cdd454558daa2893df5b26' alt='Delete' className='action-icons' on onClick={()=> onDeleteQuantity(product.id)}/>
                    </div>
                </div>
            </div>
        );
    }



const Styles={image:{
    height:125,
    width: 170,
    background:'#ccc',
    borderRadius:4}}


export default Kartitems;


