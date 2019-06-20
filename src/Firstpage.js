import React from 'react';

function Firstpage(){

        return (

            <div>

                <h1>Welcome {} </h1>
                <h2>Let's get started !</h2>

                <div className="form-group">

                    <h2>upload your first picture</h2>
                    <input type="file" className="form-control" name="file"></input>

                </div>

                <div className="form-group">

                    <button type="submit" className="btn btn-danger form-control">upload</button>

                </div>


            </div>

        )
    }




export default Firstpage;