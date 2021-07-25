/* istanbul ignore file */
import ContentLoader from 'react-content-loader';

const PlaceHolder = () => {
  return (
    <ContentLoader width="100%" height="200" backgroundColor="#d8d5d2">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default PlaceHolder;
