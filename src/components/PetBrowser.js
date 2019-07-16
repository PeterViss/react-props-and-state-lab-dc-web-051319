import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    
    let petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPets={this.props.onAdoptPets} />
    ))
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
