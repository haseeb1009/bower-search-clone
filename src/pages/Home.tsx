// src/pages/SearchPage.tsx
import React, {
  ChangeEvent,
  useRef,
  useState,
} from 'react';

import {
  Checkbox,
  Input,
  Skeleton,
  Table,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import useModules from '../hooks/useModules';
import { ModuleType } from '../types/types';
import { columns } from '../utils/columns';

const { Search } = Input;

const Home: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortByStars, setSortByStars] = useState<boolean>(false);
  
  const { data, loading, error } = useModules(query, currentPage, sortByStars);
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    if (input !== query) {
      debounceTimeoutRef.current = setTimeout(() => {
        setQuery(input);
        setCurrentPage(1);
      }, 300);
    }
  };

  const handleSortChange = (event: CheckboxChangeEvent) => {
    setSortByStars(event.target.checked);
  };

  return (
    <main>
      <Search
        className="search-bar"
        disabled={loading}
        placeholder="Search Packages..."
        onChange={handleChange}
      />
      <Checkbox className="checkbox" onChange={handleSortChange}>
        Sort by Stars
      </Checkbox>
      {loading ? (
        <Skeleton className='skeleton' active />
      ) : (
        <Table
          className="table-container"
          rowKey={(record: ModuleType) => record.package_manager_url}
          columns={columns}
          dataSource={error ? [] : data}
          pagination={{
            position: ['bottomCenter'],
            current: currentPage,
            pageSize: 5,
            total: 100,
            showSizeChanger: false,
            onChange: setCurrentPage,
          }}
        />
      )}
    </main>
  );
};

export default Home;
