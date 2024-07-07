import React from 'react';

import {
  Layout,
  Menu,
} from 'antd';
import { Link } from 'react-router-dom';

import {
  ApiOutlined,
  AppstoreOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LinkedinOutlined,
  MailOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export const sideNavMenuItems = [
  { label: <Link to="/">Home</Link>, key: 'home', icon: <HomeOutlined /> },
  {
    label: (
      <a
        href="https://bower.io/docs/api/"
        target="_blank"
        rel="noopener noreferrer"
      >
        APIs
      </a>
    ),
    key: 'app',
    icon: <ApiOutlined />,
  },
  {
    label: (
      <a
        href="https://bower.io/docs/config/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Configuration
      </a>
    ),
    key: 'mail',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <a
        href="https://bower.io/docs/tools"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tools
      </a>
    ),
    key: 'tools',
    icon: <ToolOutlined />,
  },
  {
    label: (
      <a
        href="https://www.linkedin.com/in/haseeb1009"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    ),
    key: 'linkedin',
    icon: <LinkedinOutlined />,
  },
  {
    label: (
      <a
        href="https://bower.io/docs/api/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    ),
    key: 'contact',
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/about">About</Link>,
    key: 'about',
    icon: <InfoCircleOutlined />,
  },
];

const SideNav: React.FC = () => (
  <Sider width={200}>
    <Menu items={sideNavMenuItems} />
  </Sider>
);

export default SideNav;
