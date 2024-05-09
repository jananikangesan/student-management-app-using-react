import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            name:'',
            address:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    saveStudent=(e)=>{
        e.preventDefault();

        let student={name:this.state.name, address:this.state.address};
        console.log("student => " + JSON.stringify(student));

        StudentService.createStudent(student).then(res=>{
           
            this.setState({
                name: '',
                address: ''
            });
            console.log("res:" + res);
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error, if needed
        });
    
    }

    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }

    handleCancel = () => {
        this.setState({ name:'',
                        address:''
                     });

      };

    render() {
        return (
            <div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Student</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input placeholder='name'  name="name" className='form-control' value={this.state.name} onChange={this.changeNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <input placeholder='address'  name="address" className='form-control' value={this.state.address} onChange={this.changeAddressHandler}/>

                                    </div>
                                    <div className='pt-2'>
                                        <button className='btn btn-success' onClick={this.saveStudent}>Save</button>
                                        <button className='btn btn-danger' onClick={this.handleCancel} style={{marginLeft:"10px"}}>Cancel</button>
                                    </div>
                                   

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default CreateStudentComponent;