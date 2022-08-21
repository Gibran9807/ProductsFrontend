import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {

  state = {
    products: [],
    category: '',
    price: 0,
    image: '',
    description: '',
    quantity: 0
  };

  onInputChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000/products");
    this.setState({ products: res.data });
  }


  onSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      category: this.state.category,
      price: this.state.price,
      image: this.state.image,
      description: this.state.description,
      quantity: this.state.quantity
    }
    await axios.post('http://localhost:3000/products', newProduct)
    window.location.reload()
  }

  onDelete = async (id) => {
    await axios.delete('http://localhost:3000/products/' + id)
    this.componentDidMount()
  }
  
  onUpdate = async(id) => {
    const updateProduct = {
      category: this.state.category,
      price: this.state.price,
      image: this.state.image,
      description: this.state.description,
      quantity: this.state.quantity
    }
    await axios.put('http://localhost:3000/products/' + id , updateProduct)
    window.location.reload()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body bg-dark">
            <h4>Post a Product</h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group gap-3">
                <label>Category</label>
                <select name="category" onChange={this.onInputChange} className="form-control">
                  <option value=""></option>
                  <option value="Processor">Processor</option>
                  <option value="Motherboard">Motherboard</option>
                  <option value="Graphic card">Graphic card</option>
                  <option value="Hard Drive">Hard Drive</option>
                  <option value="RAM Memory">RAM Memory</option>
                  <option value="Power Supply">Power Supply</option>
                  <option value="Computer Case">Computer Case</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Keyboard">Keyboard</option>
                </select>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={this.onInputChange}
                />
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  onChange={this.onInputChange}
                />
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Price</label>
                      <input
                        type="text"
                        name="price"
                        className="form-control"
                        onChange={this.onInputChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label>Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        className="form-control"
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-success form-control">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-center">
            <table className="table bg-dark">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody >
                {this.state.products.map((product) => (
                  <tr 
                    key={product._id}
                  >
                    {
                      <>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><img src={product.image} alt={product.category}/></td>
                        <td>{product.quantity}</td>
                        <td><button className="btn btn-danger" onClick={() => this.onDelete(product._id)}>Delete</button></td>
                        <td>
                          <button className="btn btn-primary" onClick={() => this.onUpdate(product._id)}>
                            Update
                          </button>
                        </td>
                      </>
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
