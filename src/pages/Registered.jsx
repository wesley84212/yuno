import React from 'react'

function Registered(){

    return(<>

<form className="col-10 reg-form">
  <div className="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
    )
}

export default Registered