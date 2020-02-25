import React from 'react';
import { withRouter } from 'react-router-dom';

import './user-container.styles.scss';

const UserContainer = ({data, history}) => (
    <div id={data.id} className='user-container' onClick={() => history.push(`/post`,{data: data})}>
        {/* <img alt='user' src={`https://robohash.org/${data.id}?set=set1&size=180x180`} /> */}
        <h3 className='user-name'>{data.name}</h3>
        <span className='user-email'>{data.email}</span>
    </div>
);

export default withRouter(UserContainer);