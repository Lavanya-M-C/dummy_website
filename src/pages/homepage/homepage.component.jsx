import React from 'react';
import './homepage.styles.scss';

import UserContainer from '../../components/user-container/user-container.component';

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => this.setState({ users: json }));
    }

    render() {
        const {users} = this.state;

        return (
            <div>
                <h1>User Listing:</h1>
                <div className='homepage'>
                    {users.map( (user) => (
                        <UserContainer data={user} />
                    ))}
                </div>
            </div>
        );
    }
}

export default HomePage;