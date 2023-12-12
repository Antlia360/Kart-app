import React from 'react';
import './index.css';

//class Navbar extends React.Component{
const Navbar=(props)=>{
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} alt='cart-icon' src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"/>
                    <span style={styles.cartCount}> {props.count}</span>
                </div>
            </div>
        )
        
    }


const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },

    nav:{
        height:70,
        background:'cyan',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },

    cartIconContainer:{
        position:'relative'
    },

    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9

    }
}


export default Navbar;