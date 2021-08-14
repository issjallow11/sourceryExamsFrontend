import React,{ useState,useEffect } from 'react'

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const Products = () => {
  let url = process.env.NODE_ENV === "development"?
  process.env.REACT_APP_DEVELOPMENT_URL : 
  process.env.REACT_APP_PRODUCTION_URL;

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const refreshProducts = async () => {
  
      let res = await fetch(url + "Product",{
        credentials: 'include',
      });
      console.log(res);
      let data= await res.json();
      console.log(data);
      setProducts(data);
      console.log(products);
    }

    const getProduct = async () => {
      let res = await fetch(url + "Product/{id}",{
        credentials: 'include',
      });
      console.log(res);
      let data= await res.json();
      console.log(data);
      setProduct(data);
      console.log(product);
    }
    
  
  useEffect(()=>{
    refreshProducts();
    getProduct();
  },[])

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            
            <li>
              Name
            </li>
            <li>Price</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item,index)=>
          <tr>
            <td>{item.productId}</td>
            <td>{item.name}</td>
            <td>{item.currency}</td>
            <td>{item.category}</td>
            <td>
              <button className="btn btn-primary"  onClick={(e) => handleShow(e, item.id)}>
                View Product
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Products
