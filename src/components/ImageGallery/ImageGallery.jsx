import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data, onItemClick }) => {
  return (
    <StyledImageGallery>
      {data.map(element => {
        return (
          <ImageGalleryItem
            key={element.id}
            imageUrl={element.webformatURL}
            altText={element.tags}
            clickHandler={onItemClick}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  onItemClick: PropTypes.func.isRequired,
};

const StyledImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
