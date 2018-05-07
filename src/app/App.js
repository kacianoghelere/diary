import React, { Component } from 'react';
import { database } from '../firebase';
import { connect } from 'react-redux';

import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

class App extends Component{
  const teste;

  render() {
    return (
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <NoteForm />
            <NoteList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
