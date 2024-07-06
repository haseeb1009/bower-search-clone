import React from 'react'

import {
  Layout,
  Typography,
} from 'antd'

const { Title, Paragraph, Text } = Typography
const { Content } = Layout

const About: React.FC = () => {
  return (
    <Content>
      <Typography>
        <Title level={2}>About This Project</Title>

        <Paragraph>
          This project is built with TypeScript and React, designed to mimic the
          behavior of the Bower search page. It fetches and displays a list of
          modules from the Libraries.io API, providing features like pagination,
          sorting, and searching.
        </Paragraph>

        <Title level={3}>Assumptions</Title>
        <Paragraph>
          <ul>
            <li>
              The API used is <Text code>Libraries.io</Text> and the endpoint is{' '}
              <Text code>{'https://libraries.io/api/search'}</Text>.
            </li>
            <li>Pagination is implemented to display 5 items per page.</li>
            <li>
              The API does not return the total number od pages or records, So I
              have hardcoded the total pages to <Text>20</Text>
            </li>
            <li>
              The search input is debounced with a 300ms delay to minimize API
              calls and improve user experience.
            </li>
            <li>
              <Text code>SWR</Text> is use to cache the response for better
              user experience
            </li>
          </ul>
        </Paragraph>

        <Title level={3}>Setup and Running</Title>
        <Paragraph>
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
        </Paragraph>

        <Paragraph>
          Thank you for reviewing my submission. I look forward to your
          feedback.
        </Paragraph>
      </Typography>
    </Content>
  )
}

export default About
