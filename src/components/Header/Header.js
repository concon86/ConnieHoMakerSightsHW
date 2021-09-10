// Component.
import { Search } from './Search'
// Styles.
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Search />
      <div className="avatar"></div>
    </div>
  )
}

export default Header;