import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    modalShown: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({ modalShown: !prevState.modalShown }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.modalShown && (
          <Modal onClose={this.toggleModal}>
            <h1>yo sucker</h1>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
