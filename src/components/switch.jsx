import React, { createFactory } from 'react'
function Modeswitch(props) {
    return(
    <>
        <div className="form-check form-switch" >
        <label className="form-check-label col text-nowrap " style={{color:"white", marginLeft:"5px", marginRight:"7px"}} htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </>
      );
}

export default Modeswitch;
