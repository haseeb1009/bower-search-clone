import React from 'react'

import { ModuleType } from '../../types/types'

interface LibrariesListProps {
  libraries: ModuleType[];
}

const LibrariesList: React.FC<LibrariesListProps> = ({ libraries }) => (
  <ul>
    {libraries.map((library: ModuleType) => (
      <li key={library.repository_url}>
        <span>{library.name}</span> - <span>{library.description}</span> -{' '}
        <span>{library.stars}</span>
      </li>
    ))}
  </ul>
);

export default LibrariesList;
