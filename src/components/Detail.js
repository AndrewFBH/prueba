import React, { Component } from 'react';
import Loading from  '../utils/Loading';
import { getCategoryPage } from '../utils/api';

const CharacterInfo = ({ name, species, image, gender })=> (
  <div className='characterinfo-container'>
    <div className='fig-ctr'>
      <figure className='character'>
          <img  className='character-avatar' src={image} alt={name}></img>
      </figure>
    </div>
    
    <ul>
      <li>
        <h4>Nombre: {name}</h4>
      </li>
      <li>
        <h4>Especie: {species}</h4>
      </li>
      <li>
        <h4>Genero: {gender}</h4>
      </li>
    </ul> 

    
  </div>
)

export default class Detail extends Component {
  state = {
    character: {},
    loading: true,
  } 
 
  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  
  async componentDidMount() {
    this.setState(()=>({loading: true}));
    var id = this.getUrlParameter('id');
    const results = await getCategoryPage('character/', id);
    this.setState(()=>({character: results, loading: false}));
  }

  render() {
    const { name, species, image, gender} = this.state.character
        return this.state.loading === true
            ? <Loading />
                :<div>
                    <CharacterInfo
                      name={name}
                      species={species}
                      image={image}
                      gender={gender}
                    />
                </div>
    } 
}
