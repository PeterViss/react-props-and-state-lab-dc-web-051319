import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  getPets = () => {
    let api = '/api/pets' 
    if(this.state.filters.type !== 'all'){
      api = api + `?type=${this.state.filters.type}`
    }
      fetch(api)
      .then(resp => resp.json())
      .then(data => this.setState({pets: data}))
  }

  onAdoptPets = (petId) => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  
  }

  onChangeType = (event) => {
    console.log(event.target.value)
    console.log(this)
    this.setState({
     filters:{
       type: event.target.value 
      }
    })
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets} onAdoptPets={this.onAdoptPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
