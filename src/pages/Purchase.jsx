import React, { useState, useEffect } from 'react'
import { CreatePurchase } from '../action/index';


function Purchase() {

  const [productName, setProductName] = useState({ productName: null })
  const [productCost, setProductCost] = useState({ productCost: null })
  const [productDate, setProductDate] = useState({ productDate: null })

  const handleSubmit = async (event) => {
    const input = {
      name: productName,
      quantity: 1,
      cost: productCost,
      purchaseDate: productDate,
      status: 1
    }
    const result = await CreatePurchase(input);
    console.log (result);
  }
  return <>
    <div className="m-0auto">
      <h3 className="mt-2 mb-2">進貨填寫</h3>

      <label>商品名稱:</label>
      <input type="text" className="form-control" onChange={element => setProductName(element.target.value)} />
      <label>商品成本:</label>
      <input type="number" className="form-control" onChange={element => setProductCost(element.target.value)} />
      <label>到貨時間:</label>
      <input type="date" className="form-control" onChange={element => setProductDate(element.target.value)} />

      <input className="btn btn-info mt-3" type="submit" value="新增" onClick={handleSubmit} />
    </div>

  </>;
}
export default Purchase;
