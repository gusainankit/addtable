import React from "react";
import "./remove.css"
function Remove(props) {
    const {setOpenRemove} = props;
    
   
    return (<div className="remove-container">
        <form className="form-remove">
            <h1 className="header-remove">Remove student</h1>
            <p className="para-remove">
                Are you sure you want to remove the current student from the list?
            </p>
            <div>
                <h3 className="student">STUDENT NAME</h3>
                <p className="name"></p>
            </div>
            <div>
                <h3 className="student">CLASS</h3>
                <p className="grade"></p>
            </div>
            <div className="button-remove">
                <button className="cancel-btn" type="button"
                    onClick={() => setOpenRemove(false)}
                >Cancel</button>
                <button className="remove-btn" type='button'>REMOVE</button>
            </div>

        </form>


    </div>
    )
}
export default Remove;