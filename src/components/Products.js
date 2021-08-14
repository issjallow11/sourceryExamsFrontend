import React,{ useState,useEffect } from 'react'

import Table from 'react-bootstrap/Table';

const Products = () => {
  let url = process.env.NODE_ENV === "development"?
  process.env.REACT_APP_DEVELOPMENT_URL : 
  process.env.REACT_APP_PRODUCTION_URL;

  const [products, setProducts] = useState([]);
  
  const refreshProducts = async () => {
    // let res = await fetch(url + "FoodItem",{
    //   credentials: 'include',
    // });
    let res = await (url + "Product");
    console.log(res);
    let data= await res.json();
    console.log(data);
    setProducts(data);
    console.log(products);
    
  }
  useEffect(()=>{
    refreshProducts()
  },[])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Products
