import React from 'react';

import {
  Layout,
  Typography,
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const About: React.FC = () => {
  return (

      <Content style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Typography>
          <Title level={2}>About This Project</Title>

          <Paragraph>
            This project is a responsive web application built with TypeScript and React, designed to mimic the behavior of the Bower search page. It fetches and displays a list of modules from the Libraries.io API, providing features like pagination, sorting, and searching.
          </Paragraph>

          <Title level={3}>Assumptions</Title>
          <Paragraph>
            <ul>
              <li>
                The API used is <Text code>Libraries.io</Text> and the endpoint is <Text code>{'https://libraries.io/api/search'}</Text>.
              </li>
              <li>
                Pagination is implemented to display 5 items per page.
              </li>
              <li>
                The sorting feature is implemented using the API's <Text code>sort</Text> parameter which supports sorting by various fields like <Text code>rank</Text>, <Text code>stars</Text>, <Text code>dependents_count</Text>, and others.
              </li>
              <li>
                The search input is debounced with a 300ms delay to minimize API calls and improve user experience.
              </li>
              <li>
                Axios was replaced with the native fetch API to fetch data.
              </li>
            </ul>
          </Paragraph>

          <Title level={3}>Setup and Running</Title>
          <Paragraph>
            <Text strong>To run this project locally:</Text>
            <ul>
              <li>Clone the repository</li>
              <li>Install dependencies with <Text code>yarn install</Text></li>
              <li>Start the development server with <Text code>yarn start</Text></li>
              <li>Run tests with <Text code>yarn test</Text></li>
            </ul>
          </Paragraph>

          <Paragraph>
            Thank you for reviewing my submission. I look forward to your feedback.
          </Paragraph>
        </Typography>
      </Content>
  );
};

export default About;
