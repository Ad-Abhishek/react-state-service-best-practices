import React from 'react';
import UserList from '../users/components/UserList';
import PostTable from '../posts/components/PostTable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabView = () => {
  return (
    <div className="container mt-5 shadow-lg">
      <div className="row justify-content-center">
        <div className="col">
          <>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>
              <Tab eventKey="users" title="Users">
                <UserList />
              </Tab>
              <Tab eventKey="posts" title="Posts">
                <PostTable />
              </Tab>
            </Tabs>
          </>
        </div>
      </div>
    </div>
  );
};

export default TabView;
