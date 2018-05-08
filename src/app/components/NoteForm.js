import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { database } from '../../firebase';
import { connect } from 'react-redux';

import { addNote } from '../actions';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    this.props.addNote({ title, body });

    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <FormGroup>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            required
            value={this.props.title}
            onChange={this.onChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="body"
            id="body"
            placeholder="Body..."
            required
            value={this.props.body}
            onChange={this.onChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Button color="primary" block>Save</Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = { addNote };

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);