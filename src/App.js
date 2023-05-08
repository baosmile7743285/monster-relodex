import React, { Component } from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
      SearchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')    
    .then(response => response.json())
    .then(users => this.setState({monster: users}))
  }
  render() {
    const {monster, SearchField} = this.state;
    const filterdMonster = monster.filter(
      monster => monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className="App">  
      <h1>Monster Relodex</h1>
      <SearchBox
      placeholder={this.state.filterdMonster}
      handleChange={e =>this.setState({
        SearchField: e.target.value
   })}
      ></SearchBox>
      <CardList monster={filterdMonster }/>
    </div>
    )
  }
}


export default App;
