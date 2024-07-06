import React from 'react';

import { ColumnsType } from 'antd/es/table';

import { ModuleType } from '../types/types';
import { formatDateToDistance } from './utils';

export const columns: ColumnsType<ModuleType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: ModuleType) => (
      <a
        href={record.package_manager_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    ),
    ellipsis: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true,
  },
  {
    title: 'Owner',
    dataIndex: 'platform',
    key: 'platform',
  },
  {
    title: 'Stars',
    dataIndex: 'stars',
    key: 'stars',
    sorter: (a, b) => a.stars - b.stars,
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks',
    sorter: (a, b) => a.forks - b.forks,
  },
  {
    title: 'Update',
    dataIndex: 'latest_release_published_at',
    key: 'latest_release_published_at',
    render: (text: string) => <div>{formatDateToDistance(text)}</div>,
  },
];
