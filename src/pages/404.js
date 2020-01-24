import React from 'react';
import { Heading, Text, TextContainer } from '../components/shared/Typography';

const NotFoundPage = () => (
  <TextContainer>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Heading>Whoops - That Page Doesn’t Exist (404)</Heading>
      <Text>
        Looks like the page you requested either doesn’t exist or has been
        moved.
      </Text>
    </div>
  </TextContainer>
);

export default NotFoundPage;
