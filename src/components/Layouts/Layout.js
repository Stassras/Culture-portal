import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../Header/Header";
import Main from "../Main/Main";

import footerStyles from './layout.module.less';

import "./layout.less";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

			<footer>
        <Container className={footerStyles.footer_container}>
          <Row>
            <Col col='1'>
            </Col>
            <Col col='10' className={footerStyles.gatsby}>
              <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </Col>
            <Col col='1'>
            </Col>
          </Row>
        </Container>
			</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
