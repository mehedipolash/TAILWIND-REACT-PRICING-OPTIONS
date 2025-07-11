import React from 'react';

const Link = ({ route }) => {
  return (
    <li className="px-4 mr-10 hover:bg-amber-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
