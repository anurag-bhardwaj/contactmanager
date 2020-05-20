import React, { Component } from 'react'
import {connect} from 'react-redux';


class editContact extends Component {
    
    state={
        name:'',
        email:'',
        phone:''
    }

    componentDidMount(){
        const {id}=this.props.match.params;
        console.log(id);
        const {contacts}=this.props;
        console.log(contacts)
        contacts.map(contact=> `${contact.id}` === id ? (this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })) : (console.log(contact.id+id)))
    }

    onChange=(e)=>
        this.setState({
        [e.target.name]:[e.target.value]
    })
    onSubmit =(e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const {id}=this.props.match.params;
        const newContact = {
            id,
            name,
            email,
            phone
        }
        this.props.editContact(newContact);
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
        this.props.history.push("/");
    };


    render() {
        const {name,email,phone}=this.state;
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-body" style={{ padding: '0', textAlign: 'left' }}>
                        <div className="card-header h6">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.OnSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name </label>
                                    <input name="name" type="text" className="form-control" id="exampleInputName1" aria-describedby="namelHelp" value={name} onChange={this.onChange}/>
                                    <label htmlFor="Email1" className="mt-2">Email </label>
                                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={this.onChange} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    <label htmlFor="Phone" className="m-2">Phone </label>
                                    <input name="phone" type="text" className="form-control" id="exampleInputPhone1" aria-describedby="PhoneHelp" value={phone} onChange={this.onChange}/>
                                    <button type="submit" className="btn btn-primary mt-3" onClick={this.onSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}


const mapDispatchtoProps =(dispatch)=>({
    editContact:(updContact)=>dispatch({type:'UPDATE_CONTACT',payload:updContact})
})

const mapStatetoProps = (state)=>({
    contacts:state.contact.contacts
})
export default connect(mapStatetoProps,mapDispatchtoProps)(editContact);
