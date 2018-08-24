import React, { Component } from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CONTACTS } from '../../actions/types';

export class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <div className="home-page pt-5">
        <h1 className="text-center mb-4">Contact List</h1>
        <div className="row">
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  contacts: state.contactR.contacts
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
