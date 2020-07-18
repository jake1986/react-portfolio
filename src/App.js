import React, { Component } from 'react';
import { Layout, Header, Navigation, Content, Drawer, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Jake Rhoads' Portfolio">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Jake Rhoads">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content className="content-color">
            <div className="page-content" />
            <Main />
          </Content>
          <Footer className="footer-color" size="mini">
            <FooterSection type="left" logo="Copyright @ Jake Rhoads 2020">
              {/* <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList> */}
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
