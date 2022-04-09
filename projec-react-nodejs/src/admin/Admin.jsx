import React, {useEffect, useRef, useState} from 'react'
import './Admin.css'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
export default function Admin() {
  //states lưu các giá trị của input
  const [pCode, setPcode] = useState('');
  const [pName, setPName] = useState('');
  const [pPrice, setPPrice] = useState(0);
  const [pQuantity, setPQuantity] = useState(0);
  const [pDiscount, setPDiscount] = useState(0);
  const [pWarranty, setPWarranty] = useState(0);
  const [pSell,setPSell] = useState(false);
  const [file, setFile] = useState(false);
  const [products, setProducts] = useState([]);
  const [pCategory, setPCategory] = useState('')
  const [categories, setCategories] = useState([]);
  const [successAdd, setSuccessAdd] = useState(false);
  const [failedAdd, setFailedAdd] = useState(false);

  //state cho chỉnh sửa sản phẩm
  const [editID, seteditID] = useState(null);
  const [currentEditProduct, setCurrentEditProduct] = useState();
  //ref lưu sản phẩm chỉnh sửa
  const editNameRef = useRef('');
  const editPriceRef = useRef(0);
  const editCodeRef = useRef(0);
  const editQuantityRef = useRef(0);
  const editWarrantyRef = useRef(0);
  const editImage = useRef('');
  const editDiscountRef = useRef(0);
  const [sellEdit, setSellEdit] = useState('');
  const [catEdit, setCatEdit] = useState('');
  const [editFile, setEditFile] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);
  useEffect(() => {
    setCurrentEditProduct(products.find(pr => pr._id === editID));
  }, [editID])
  useEffect(() => {
    const getProducts = async () => {
      const data = await axios.get("http://localhost:5000/ProductRT/getproduct");
      setProducts(data.data);
    }
    const getCategories = async () => {
      const data = await axios.get('http://localhost:5000/CategoryRT/getcategory');
      setCategories(data.data);
    }
    getProducts();
    getCategories();
  }, [])
  const deleteHandler = async (id) => {
    try{
      await axios.delete(`http://localhost:5000/ProductRT/delete/${id}`);
      setProducts(products.filter(product => product._id != id));
    }catch(err){
      console.log(err);
    }
  }
  //Thêm sản phẩm
  const addProductHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name", fileName);
    data.append("file", file);
    try{
      await axios.post("/upload", data);
      await axios.post("/ProductRT/addproduct", {
        ProductCode: pCode,
        PName: pName,
        PPrice: pPrice,
        PQuantity:pQuantity,
        PWarranty: pWarranty,
        PImage: `/images/${fileName}`,
        PDiscount:pDiscount,
        PSell: pSell,
        PCategory: pCategory
      })
      setSuccessAdd(true);
      setFailedAdd(false);
    }catch(err){
      setSuccessAdd(false);
      setFailedAdd(true);
    }
  }
  const sellChange = (e) => {
   setPSell(e.target.value);
  }
  const catChange = (e) => {
    setPCategory(e.target.value);
  }
  const editHandler = async (e) => {
    e.preventDefault();
    let f = '';
    if(editFile){
      try{
        const data = new FormData();
        const fileName = Date.now() + editFile.name;
        f = `/images/${fileName}`;
        data.append("name", fileName);
        data.append("file", editFile);
        await axios.post("/upload", data);
      }catch(err){
        console.log(err);
      }
    }else{
      f = currentEditProduct.PImage;
    }
    const newUpdateProduct = {
      ProductCode: editCodeRef.current.value,
      PName: editNameRef.current.value,
      PPrice: editPriceRef.current.value,
      PQuantity:editQuantityRef.current.value,
      PWarranty: editWarrantyRef.current.value,
      PImage: f,
      PDiscount:editCodeRef.current.value,
      PSell: sellEdit.trim().length > 0 ? sellEdit : currentEditProduct.PSell,
      PCategory: catEdit.trim().length > 0 ? catEdit : currentEditProduct.PCategory
    }
    try{
      await axios.post('/ProductRT/update', {
        newUpdateProduct: newUpdateProduct,
        _id: currentEditProduct._id
      })
      setUpdateStatus(true);
    }catch(err){
      setUpdateStatus(false);
      console.log(err);
    }
  }
  const catEditChange = (e) => {
    setCatEdit(e.target.value)
  }
  const sellEditChange = (e) => {
    setSellEdit(e.target.value);
  }
  return (
    <div className='admin'>
      <div className="admin-nav">
        <div className="admin-nav-left">
          <h4>Admin</h4>
        </div>
        <div className="admin-nav-right">
          <ul className="admin-nav-right-menu">
            <li className="admin-nav-right-item active">Product</li>
            <li className="admin-nav-right-item">Order</li>
            <li className="admin-nav-right-item">Logout</li>
          </ul>
        </div>
      </div>
      {successAdd && <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your product is successful added.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}
      {failedAdd && <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failed!</strong> Something wrong happened 😢.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}
      <section className="admin-product">
        <div className="admin-product-header">
          <h4>Product list:</h4>
        </div>
        <table className="table nav-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Discount</th>
              <th scope="col">Warranty</th>
              <th scope="col">Image</th>
              <th scope="col">Sell</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => <tr key={index}>
                <th scope="row">{index}</th>
                <td>{product.PName}</td>
                <td>{product.PPrice}</td>
                <td>{product.PQuantity}</td>
                <td>{product.PDiscount}</td>
                <td>{product.PWarranty}</td>
                <td className='table-image'>
                  <img src={product.PImage} alt="" />
                </td>
                <td>True</td>
                <td className='table-action'>
                  <button onClick={() => seteditID(product._id)} type='button' data-toggle="modal" data-target="#edit" className='btn1'>Edit</button>
                  <button onClick={() => deleteHandler(product._id)} className='btn2'>Delete</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
        <div className="admin-add">
          <button type="button" data-toggle="modal" data-target="#exampleModal" className='add'>Add</button>
        </div>
      </section>
        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">ADD product</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={addProductHandler} className="form">
              <div className="modal-body">
                  <div className="form-group">
                    <label className='form-label' htmlFor="name">Name: </label>
                    <input required onChange={e => setPName(e.target.value)} type="text" id='name' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Code: </label>
                    <input  required onChange={e => setPcode(e.target.value)} type="text" id='code' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input  required onChange={e => setPPrice(e.target.value)} type="text" id='price' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity: </label>
                    <input  required onChange={e => setPQuantity(e.target.value)} type="number" id='quantity' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="war">Warranty: </label>
                    <input  required onChange={e => setPWarranty(e.target.value)} type="number" id='war' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="discount">Discount: </label>
                    <input onChange={e => setPDiscount(e.target.value)} type="number" id='discount' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sell">Sell? </label>
                    <select onChange={sellChange} required name="sell" id="sell" className='form-control pt-2 pb-2'>
                      <option className='form-control' value="false">No</option>
                      <option className='form-control' value="true">Yes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sell">Category: </label>
                    <select onChange={catChange} required name="sell" id="sell" className='form-control pt-2 pb-2'>
                      {
                        categories.map((cat, index) => <option key={index} className='form-control' value={cat._id}>{cat.CName}</option>)
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input required onChange={e => setFile(e.target.files[0])} type="file" name="img" id="img" className='form-input'/>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-success">Save</button>
              </div>
            </form>
            </div>
          </div>
        </div>
        <div className="modal fade" id="edit" role="dialog" aria-labelledby="edit" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit product</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={editHandler} className="form">
              <div className="modal-body">
                  <div className="form-group">
                    <label className='form-label' htmlFor="name">New name: </label>
                    <input ref={editNameRef} defaultValue={currentEditProduct?.PName} placeholder={currentEditProduct?.PName} type="text" id='name' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">New code: </label>
                    <input ref={editCodeRef} defaultValue={currentEditProduct?.ProductCode} placeholder={currentEditProduct?.ProductCode}  onChange={e => setPcode(e.target.value)} type="text" id='code' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">New price: </label>
                    <input ref={editPriceRef} defaultValue={currentEditProduct?.PPrice} placeholder={currentEditProduct?.PPrice}  onChange={e => setPPrice(e.target.value)} type="text" id='price' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantity">New quantity: </label>
                    <input ref={editQuantityRef} defaultValue={currentEditProduct?.PQuantity} placeholder={currentEditProduct?.PQuantity}  onChange={e => setPQuantity(e.target.value)} type="number" id='quantity' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="war">New warranty: </label>
                    <input ref={editWarrantyRef} defaultValue={currentEditProduct?.PWarranty} placeholder={currentEditProduct?.PWarranty}  onChange={e => setPWarranty(e.target.value)} type="number" id='war' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="discount">New discount: </label>
                    <input ref={editDiscountRef} defaultValue={currentEditProduct?.PDiscount} placeholder={currentEditProduct?.PDiscount} onChange={e => setPDiscount(e.target.value)} type="number" id='discount' className='form-control' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sell">Sell? </label>
                    <select required onChange={sellEditChange} name="sell" id="sell" className='form-control pt-2 pb-2'>
                      <option className='form-control' value="false">No</option>
                      <option className='form-control' value="true">Yes</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sell">Category: </label>
                    <select required onChange={catEditChange} name="sell" id="sell" className='form-control pt-2 pb-2'>
                      {
                        categories.map((cat, index) => <option key={index} className='form-control' value={cat._id}>{cat.CName}</option>)
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input ref={editImage} defaultValue={currentEditProduct?.PImage} onChange={e => setEditFile(e.target.files[0])} type="file" name="img" id="img" className='form-input'/>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-success">Save</button>
              </div>
              <div className='d-flex align-item-center justify-content-center'>
                {
                  updateStatus && <p className='text-success'>Update completed</p>
                }
                {
                  (updateStatus === false) && <p className='text-danger'>Update failed</p>
                }
              </div>
            </form>
            </div>
          </div>
        </div>
    </div>
  )
}