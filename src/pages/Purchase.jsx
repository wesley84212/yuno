import React from 'react';

function Purchase() {

  
  return <>
    <div className="m-0auto">
      <h3 className="mt-2 mb-2">進貨填寫</h3>

      <form className="mt-2">
        <label>商品名稱:</label>
        <input type="text" className="form-control" />
        <label>商品成本:</label>
        <input type="number" className="form-control" />
        <label>到貨時間:</label>
        <input type="date" className="form-control" />

        <input className="btn btn-info mt-3" type="submit" value="新增" />
      </form>


    </div>




  </>;
}
export default Purchase;
