import { useLocation } from 'react-router-dom';
import './Navigation.css'

const Navigation = ({ t, getRoute, Link }) => {
  const location = useLocation();
  
  const navigationItems = [
    { key: 'architecture', route: 'architecture' },
    { key: 'management', route: 'management' },
    { key: 'aboutUs', route: 'aboutUs' },
    { key: 'contact', route: 'contact' }
  ];

  const isHome = location.pathname === getRoute('home');

  return (
    <div>
      <nav>
        {navigationItems.map(item => (
          <Link
            key={item.key}
            to={getRoute(item.route)}
            className={`${location.pathname === getRoute(item.route) ? 'active' : ''} ${isHome ? 'home-page' : ''}`}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;