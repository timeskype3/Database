import React from 'react';
import logo from './logo.svg';
import Head from './Head.png';
import './App.css';
import Login from './Login';
import { Layout,Row, Col } from 'antd';

import "antd/dist/antd.css";

const {
  Header, Footer, Sider, Content,
} = Layout;

function App() {
  return (
    
    <div className="Head">
     <Layout>
      <Header>Header</Header>
       <header className="App-header">
      
      
      <Content>
      <Row>
      <Col span={24}>
      <body className="App-header">
      <img src={Head} />
          <Login/>
        </body>
      </Col>
    </Row>
      
       </Content> 
      </header>
      <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
