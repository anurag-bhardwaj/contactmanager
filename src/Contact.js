import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Contact extends Component {
    state={
        showinfo:false
    };
    myfunc=e=>{
        this.setState({
        showinfo:!this.state.showinfo
    });
    }

    OnDeleteClick=(id)=>{
        this.props.deleteContact(id);
    }

    render() {
        const {showinfo}=this.state;
        const {id, name,email,phone}=this.props.contact;
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-body" style={{padding:'0', textAlign:'left'}}>
                        <div className="card-header h5">{name}
                        <span style={{cursor:'pointer'}} onClick={this.myfunc}> &#9207;</span>
                        <span className="mr-5" style={{float:'right', cursor:'pointer'}} onClick={this.OnDeleteClick.bind(this,id)}>&#9986;</span>
                        <Link className="mr-5" style={{float:'right', cursor:'pointer'}} to={`/edit/${id}`}>	&#9999;</Link>
                        </div>
        {showinfo ? (<ul className="list-group list-group-flush"><li className="list-group-item">Email: {email}</li><li className="list-group-item">Phone: {phone}</li></ul>) : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchtoProps =(dispatch)=>({
    deleteContact:(id)=>dispatch({type:'DELETE_CONTACT',payload:id})

})

export default connect(null,mapDispatchtoProps)(Contact);


