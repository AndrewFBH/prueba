import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Character extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }
    render() {
        const { data } = this.props;
        return (
            <div className='fig-ctr'>
                <figure className='character'>
                    <Link to ={{
                        pathname: `/characters/details`,
                        search: `id=${data.id}`
                        }} >
                    <img id={data.id} className='character-avatar' src={data.image} alt={data.name}></img>
                    </Link>
                </figure>
            </div>
        )
    }
} 

export default Character; 