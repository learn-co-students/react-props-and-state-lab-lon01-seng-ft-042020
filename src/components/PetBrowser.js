import React from 'react'
import Pet from './Pet'



class PetBrowser extends React.Component {
  
  renderPets = () => (this.props.pets.map(pet =>  <Pet pet={pet} adoptPet={this.props.adoptPet} /> ))


  render() {
    return <div className="ui cards">
      {/* {this.props.pets.map(pet =>  < Pet pet={pet} adoptPet={this.props.adoptPet} /> )} */}
      {this.renderPets()}
    </div>
  }
}

export default PetBrowser
