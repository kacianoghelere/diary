import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { database } from './firebase';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    const note = {...this.state};

    database.push(note);

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mx-auto">
            <Form onSubmit={this.onSubmitHandler}>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title..."
                  required
                  value={this.state.title}
                  onChange={this.onChangeHandler} />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="body"
                  id="body"
                  placeholder="Body..."
                  required
                  value={this.state.body}
                  onChange={this.onChangeHandler} />
              </FormGroup>
              <FormGroup>
                <Button color="primary" block>Save</Button>
              </FormGroup>
            </Form>
            <code>{JSON.stringify(this.state)}</code>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
