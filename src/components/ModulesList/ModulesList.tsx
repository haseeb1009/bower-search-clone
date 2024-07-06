import React from 'react'

import { ModuleType } from '../../types/types'

interface ModulesListProps {
  Modules: ModuleType[]
}

const ModulesList: React.FC<ModulesListProps> = ({ Modules }) => (
  <ul>
    {Modules.map((Module: ModuleType) => (
      <li key={Module.repository_url}>
        <span>{Module.name}</span> - <span>{Module.description}</span> -{' '}
        <span>{Module.stars}</span>
      </li>
    ))}
  </ul>
)

export default ModulesList
