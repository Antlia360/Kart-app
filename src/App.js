
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Kartitems from './kartitems';
import Kart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {

  constructor(){
    super()
    this.state={
        products:[],
        loading:true
        //     {
        //     price : 12899,
        //     title : 'Mobile',
        //     quantity:0,
        //     image:'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   ,
        //     id:1    
        // },
        // {
        //     price : 49999,
        //     title : 'Laptop',
        //     quantity:0,
        //     image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
        //     id:2      
        // },
        // {
        //     price : 36999,
        //     title : 'Television',
        //     quantity:0,
        //     image:'https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
        //     id:3      
        // }]
    

    }
    this.db=firebase.firestore();
};

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot)=>{
  //     console.log(snapshot);

  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data)
  //     });
  //     const products = snapshot.docs.map((doc)=>{
  //       const data=doc.data();
  //       data['id']=doc.id ;      
  //       return data;
  //     })
  //     this.setState({
  //       products,
  //       loading:false
  //     })
  //   })

  this.db
    .collection('products')
    //.where('price', '<', 1000)
    .orderBy('price', 'asc')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data)
      });
      const products = snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id ;      
        return data;
      })
      this.setState({
        products,
        loading:false
      })
    })

}

//increament function
handelIncreseQuantity=(product)=>{
    //console.log("i am getAllByDisplayValue", product);
    const {products}=this.state;
    const index=products.indexOf(product);
    // products[index].quantity+=1;

    // this.setState({
    //     products:products
    // })

    const docRef=this.db.collection('products').doc(products[index].id);
    
    docRef.update({
      quantity:products[index].quantity+1
    })
    .then(()=> {
      console.log('updated Successfully')
    })

    .catch((error)=>{
      console.log('Error', error)
    })
}

//decrement function
handelDecreseQuantity=(product)=>{
    //console.log("i am getAllByDisplayValue", product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].quantity===0)
    { return;
    }
    // products[index].quantity-=1;

    // this.setState({
    //     products:products
    // })

    const docRef=this.db.collection('products').doc(products[index].id);
    
    docRef.update({
      quantity:products[index].quantity-1
    })
    .then(()=> {
      console.log('updated Successfully')
    })

    .catch((error)=>{
      console.log('Error', error)
    })

}

//delete quantity
handelDeleteQuantity=(id)=>{
    const {products} =this.state;
    //console.log('this.product', this.product)
    //return an array whose id is not equal to this state product
    // const items =products.filter((item)=>item.id!==id);
    // this.setState({
    //     products:items
    // })

    const docRef=this.db.collection('products').doc(id);

    docRef.delete()
    .then(()=> {
      console.log('deleted Successfully')
    })

    .catch((error)=>{
      console.log('Error', error)
    })
}

KartCount=()=>{ 
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.quantity;
  })
  return count;
}

kartTotal=()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((product)=>{
    total=total + product.quantity*product.price;
  })
  return total;
}

addProduct=()=>{
  this.db
    .collection('products')
    .add({
      image:'',
      price:999,
      quantity:3,
      title:'phone-cover'
    })
    .then((docRef)=>{
      console.log('Product Added', docRef);
    })
    .catch((error)=> {
      console.log('PError', error);
    })

}

  render(){
    const {products, loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.KartCount()}/>
        {/* <button style={{padding:10, fontSize:20}} onClick={this.addProduct}> Add product</button> */}
        <Kart 
          products={products}
          onIncreaseQuantity={this.handelIncreseQuantity}
          onDecreaseQuantity={this.handelDecreseQuantity}
          onDeleteQuantity={this.handelDeleteQuantity}
          />
          {loading && <h1> Loading Products...</h1>}
        <div style={{padding:10}}>
          Total : {this.kartTotal()}
        </div>
          
        
      </div>
    );
  }
}

export default App;
