import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store'

import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';
import Footer from './components/Footer';
import FilterDropdown from './components/FilterDropdown';
import PaginationTodo from './components/Pagination';



class App extends Component {

  constructor(props) {
     super(props);
     this.toggleModal = this.toggleModal.bind(this);
   }
   itemModalRef = null
  
   toggleModal() {
    // console.log(this.itemModalRef);
      if (this.itemModalRef) {
      this.itemModalRef.toggle();
      
      }
   }

  render () {
     return (
      <Provider store={store}>  
        <div className="App">
          <AppNavbar />
          <Container>
            <Button 
                color="dark"
                style={{marginBottom: '2rem'}}       
                onClick= {this.toggleModal}                              
              >Add todo</Button>{'  '}
              <FilterDropdown />          

            <TodoModal ref={node => this.itemModalRef = node}/>
            <TodoList />
            <PaginationTodo />
          </Container>
          <Footer />
          
          
        </div>
      </Provider>
    );
  }
 
}

export default App;
