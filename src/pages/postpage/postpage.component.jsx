import React from 'react';
import './postpage.styles.scss';
import { withRouter, Link } from 'react-router-dom';

const PostPage = ({location}) => (
    <div>
        <h1>User Detail:</h1>
        <table>
            <tr>
                <th>Name</th>
                <td>{location.state.data.name}</td>
            </tr>
            <tr>
                <th>Username</th>
                <td>{location.state.data.username}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{location.state.data.email}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{location.state.data.phone}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{location.state.data.address.street}, {location.state.data.address.suite}, {location.state.data.address.city}, {location.state.data.address.zipcode}</td>
            </tr>
            <tr>
                <th>Website</th>
                <td>{location.state.data.website}</td>
            </tr>
            <tr>
                <th>Company</th>
                <td>{location.state.data.company.name}</td>
            </tr>
        </table>
        <Link to='/'><h6>Go to User Listing Page</h6></Link>
    </div>
);

export default withRouter(PostPage);