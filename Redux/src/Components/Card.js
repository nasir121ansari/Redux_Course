import React, {Fragment} from "react";


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            employees : [
            {
                id : 101,
                name : 'Rajan',
                age : 25,
            },
            {
                id : 102,
                name : 'Nasir',
                age : 28,
            }
        ]
            
        }
    }
    render(){
        return(
            <Fragment>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p>Employee Info</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map((emp) => {
                                        return(
                                            <tr>
                                                <td>{emp.id}</td>
                                                <td>{emp.name}</td>
                                                <td>{emp.age}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
               
            </Fragment>
        )
    }
}
export default Card;