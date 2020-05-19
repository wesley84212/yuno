import React from 'react'

function Registered(){

    return(<>

<form className="col-10 reg-form">
  <div className="form-group" >
    <label for="exampleInputEmail1">E-mail</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">設定密碼</label>
    <input type="password" className="form-control" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">再次輸入密碼</label>
    <input type="password" className="form-control" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">顯示的暱稱</label>
    <input type="text" className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
    )
}

export default Registered