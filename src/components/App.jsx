import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { getPictures } from 'utils/pixabayAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export class App extends Component {
  state = {
    modalShown: false,
    images: [],
    searchQuery: '',
    totalImageCount: 0,
    page: 1,
    perPage: 12,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getData();
    }
    if (prevState.totalImageCount !== this.state.totalImageCount) {
    }
    if (prevState.totalImageCount !== this.state.totalImageCount) {
      toast(`Wow! We found ${this.state.totalImageCount} images for you 😍`);
    }
  }
  /**
   * Own functions
   */
  getData = () => {
    const { page, perPage, searchQuery } = this.state;
    getPictures(searchQuery, page, perPage).then(({ data }) => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
      this.setState({ totalImageCount: data.totalHits });
    });
  };
  onSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value;
    this.setState({
      searchQuery,
      images: [],
    });
  };
  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = () => {
    this.setState(prevState => ({ modalShown: !prevState.modalShown }));
  };
  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar formSubmitHandler={this.onSearchSubmit} />
        <StyledSection>
          {/* <button
          type="button"
          onClick={this.toggleModal}
          disabled={this.state.modalShown ? true : false}
        >
          Open modal
        </button> */}
          {this.state.images.length > 0 && (
            <>
              <ImageGallery
                data={this.state.images}
                onItemClick={this.toggleModal}
              />
              <Button clickHandler={this.onLoadMoreBtnClick} />
            </>
          )}
          {this.state.modalShown && (
            <Modal onClose={this.toggleModal}>
              <img src="" alt="" />
            </Modal>
          )}
        </StyledSection>
        <ToastContainer />
      </div>
    );
  }
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
