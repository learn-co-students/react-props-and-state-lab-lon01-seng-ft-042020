import React from 'react'
import moduleName from 'module'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    
    fetchAllPets = () => {
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
    .catch(error => console.log(error.message));
  }

  getSpecificPetsData = () => {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
    .catch(error => console.log(error.message));
  }
    
    onChangeType = (event) => {
      this.setState({
        filters: {
          type: event.target.value
        }
      })
    }

    onFindPetsClick = () => {
      this.state.filters.type === "all" ? this.fetchAllPets() : this.getSpecificPetsData()
    }

    onAdoptPet = (id) => {
      const updatedPets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: !pet.isAdopted} : pet )
      this.setState({
        pets: updatedPets
      })
    }

    // handleChange = ({target: {name, value}}) => {
    //   this.setState({
    //     [name]: value
    //   })
    // }
    
    render() {
      return (
        <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
