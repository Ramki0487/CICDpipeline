/* istanbul ignore file */
import ContentLoader from 'react-content-loader';

const PlaceHolder = () => {
  return (
    <ContentLoader width="100%" height="200">
      <rect x="0" y="10%" width="180" height="180" />
      <rect x="30%" y="10%" width="40%" height="20" />
      <rect x="30%" y="30%" width="30%" height="20" />
      <rect x="30%" y="50%" width="20%" height="20" />
      <rect x="90%" y="20%" width="40%" height="20" />
      <rect x="90%" y="88%" width="10%" height="20" />
    </ContentLoader>
  );
};

export default PlaceHolder;
