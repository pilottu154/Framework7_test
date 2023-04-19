import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
} from 'framework7-react';
import Form from './Form'
import UserList from './UserList';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>My App</NavTitle>
      <NavTitleLarge>My App</NavTitleLarge>
    </Navbar>
    <>
      <Form/>
      <UserList/>
    </>

  </Page>
);
export default HomePage;