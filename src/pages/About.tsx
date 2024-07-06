import React from 'react';

import {
  Layout,
  Typography,
} from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout;

const About: React.FC = () => {
  return (
    <Content>
      <Typography>
        <Title level={3}>About This Project</Title>
        <p>
          This project is built with TypeScript and React, designed to mimic the
          behavior of the Bower search page. It fetches and displays a list of
          modules from the Libraries.io API, providing features like pagination,
          sorting, and searching.
        </p>

        <Title level={3}>Assumptions</Title>
        <p>
          <ul>
            <li>
              The API used is <Text code>Libraries.io</Text> and the endpoint is{' '}
              <Text code>{'https://libraries.io/api/search'}</Text>.
            </li>
            <li>
              The API does not return the total number od pages or records, So I
              have hardcoded the total pages to <Text>20</Text>
            </li>
            <li>
              The search input is debounced with a 300ms delay to minimize API
              calls and improve user experience.
            </li>
            <li>
              <Text code>SWR</Text> is used to cache the response for better UX
            </li>
          </ul>
        </p>

        <Title level={4}>Setup and Running</Title>
        <p>
          <Text strong>To run this project locally:</Text>
          <ul>
            <li>Clone the repository</li>
            <li>
              Install dependencies with <Text code>yarn install</Text>
            </li>
            <li>
              Start the development server with <Text code>yarn start</Text>
            </li>
            <li>
              Run tests with <Text code>yarn test</Text>
            </li>
          </ul>
        </p>

        <p>
          Thank you for reviewing my submission. I look forward to your
          feedback.
        </p>
      </Typography>
    </Content>
  );
};

export default About;
