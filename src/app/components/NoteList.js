import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { database } from '../../firebase';
import { connect } from 'react-redux';

import { addNote, deleteNote, getNotes } from '../actions';

class NoteList extends React.Component {

  componentDidMount() {
    this.props.getNotes();
  }

  renderNotes() {
    return Object.entries(this.props.notes).map(([key, value]) => (
      <ListGroupItem key={key}>
        <div>
          <h4>{value.title}</h4>
          <p>{value.body}</p>
        </div>
        <div>
          <Button
            color="danger"
            size="sm"
            onClick={() => this.props.deleteNote(key)}>
            Remover
          </Button>
        </div>
      </ListGroupItem>
    ));
  }

  render() {
    return (
      <ListGroup>
        {this.renderNotes()}
      </ListGroup>
    );
  }
};

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = {
  addNote,
  deleteNote,
  getNotes
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);