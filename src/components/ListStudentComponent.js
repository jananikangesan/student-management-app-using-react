import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            students:[]
        }
    }
    componentDidMount(){
        StudentService.getStudents().then((res)=>{
            this.setState({
                students:res.data
            });
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Students List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student=>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.address}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>           
             </div>
        );
    }
}

export default ListStudentComponent;


