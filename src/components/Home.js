import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Character from './Character'
import { getCharacters } from '../utils/api'
import Loading from '../utils/Loading'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            loading: true,
        };
    }
  
    async componentDidMount() {
        this.setState(()=>({loading: true}));

        const results = await getCharacters(this.randomChar(3));
        this.setState(()=>({characters: results, loading: false}));
    }

    // Gets a random character by id, can pass the number of characters to it.. Currently static number { 1-493 }
    randomChar(numberOfRandom) {
        let arr = [];
        while(arr.length < numberOfRandom) {
            const r = Math.floor(Math.random()*493) +1
            if(arr.indexOf(r) === -1) {
                arr.push(r);
            }
        }
        return arr;
    }

    render() {
        const { characters } = this.state;
        return this.state.loading === true
            ? <Loading />
                :<div>
                    <div className='characters-container'>
                        {characters.map(character => {
                            return <Character key={character.id} data={character} />        
                        })}
                    </div>
                    <Link className='button center' to={'/characters'}>
                        VER TODOS
                    </Link>
                </div>
    }
}

export default Home;