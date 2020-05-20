import Contact from './Contact.js';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Contacts extends Component {
    componentDidMount(){
        this.props.getContacts();
    }

    render() {
        const {contacts}=this.props;
        return (
            <div>
                {contacts.map(contact=> (<Contact key={contact.id} contact={contact} />))}
            </div>
        )
    }
}

const mapStatetoProps = (state)=>({
    contacts:state.contact.contacts
})
const mapDispatchtoProps =(dispatch)=>({
    getContacts:()=>dispatch({type:'GET_CONTACTS'})

})
Contacts.propTypes={
contacts:PropTypes.array.isRequired,
getContacts:PropTypes.func.isRequired
}
export default connect(mapStatetoProps,mapDispatchtoProps) (Contacts);
