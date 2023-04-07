import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white absolute left-0 right-0 top-0 z-10">
      <nav className="mx-auto flex justify-between items-center p-6 lg:px-8" aria-label="Global">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Profile
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Search
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Discover
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Upload
        </a>
      </nav>
    </header>
  );
};
