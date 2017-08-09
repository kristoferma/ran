import PropTypes from 'prop-types';
import LinkList from '../../components/LinkList';
import { StyledHeader } from './styles';

const Header = ({ pathname, authenticated, actions: { logout } }) =>
  <StyledHeader>
    <LinkList
      pathname={pathname}
      authenticated={authenticated}
      logout={logout}
    />
  </StyledHeader>;

Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default Header;
