import React from 'react'

class Pet extends React.Component {



  clickHandler = (event) => {
    event.target.disabled = true 
    event.target.style.display = "none"
    event.target.previousElementSibling.style.display = "block" 
    this.props.onAdoptPets(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" style={{display: "none"}}>Already adopted</button>
          <button className="ui primary button" onClick={this.clickHandler}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
