import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <h4>Name</h4>
                        <input type="text" className="form-control" id="inputName" placeholder="full name"></input>
                    </div>
                    <br></br>


                    <div>
                        <h4>Age</h4>
                        <input type="number" className="form-control" id="inputAge" placeholder="Age"></input>
                    </div>
                    <br></br>

                    <div>
                        <h4>Email</h4>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <br></br>


                    <div>
                        <h4>Password</h4>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                    <br></br>


                    <button type="submit" className="btn btn-primary">Submit</button>

                </div>
            </form>

        )
    }



}

export default Signup;