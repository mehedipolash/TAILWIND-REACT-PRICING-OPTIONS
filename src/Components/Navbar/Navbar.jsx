import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map(route => (
    <Link route={route} key={route.id}></Link>
  ));

  return (
    <nav className="flex justify-between items-center mx-10 relative mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <h3 className="ml-4">My Navbar</h3>
      </span>

      <ul
        className={`md:hidden absolute duration-1000 text-black bg-amber-200 ${
          open ? 'top-8' : '-top-40'
        }`}
      >
        {links}
      </ul>

      {/* ✅ Add this for large screens */}

      <ul className="hidden md:flex">{links}</ul>

      {/* <ul className="flex">
        {navigationData.map(route => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul>
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}

      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
