import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';
import axios from 'axios';

export class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card card-body mb-3">
          <h4 className="animated bounceIn">
            <i
              className="fa fa-arrow-circle-down text-secondary"
              aria-hidden="true"
              onClick={this.onShowClick}
              style={{ cursor: 'pointer' }}
            />{' '}
            {name}
            <i
              className="fa fa-times float-right"
              aria-hidden="true"
              onClick={this.onDeleteClick.bind(this, id)}
              style={{ cursor: 'pointer' }}
            />
            <Link to={`/edit/${id}`}>
              <i
                className="fa fa-pencil-square-o float-right pr-3 pt-1"
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </h4>
          <ul
            className={
              showContactInfo ? 'list-group animated bounceIn' : 'd-none'
            }
          >
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-phone-square" aria-hidden="true" /> Phone:
              </strong>{' '}
              {phone}
            </li>
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-envelope" aria-hidden="true" /> Email:
              </strong>{' '}
              {email}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteContact }
)(Contact);
