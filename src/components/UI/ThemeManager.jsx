import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeManager = ({ children }) => {
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    // Set the theme attribute on the <html> element
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return children;
};

export default ThemeManager;
