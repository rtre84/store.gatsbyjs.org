import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Logo from './Logo';

import { breakpoints, colors, dimensions, spacing } from '../../utils/styles';

const HeaderRoot = styled('header')`
  align-items: center;
  background-color: ${colors.lightest};
  border-bottom: 1px solid ${colors.brandLight};
  box-sizing: border-box;
  display: ${props => (props.isCovered ? 'none' : 'flex')};
  height: ${dimensions.headerHeight};
  justify-content: space-between;
  left: 0;
  padding-left: ${spacing.md}px;
  padding-right: ${spacing['3xl']}px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 1000;

  @media (min-width: ${breakpoints.desktop}px) {
    &.covered {
      display: none;
    }
  }
`;

const HomeLink = styled(Link)`
  display: block;
  flex-shrink: 0;
  line-height: 1;
  margin-right: auto;
`;

class Header extends Component {
  state = {
    className: ''
  };

  componentDidMount() {
    // Segment Analytics Tracking
    const segmentScript = document.createElement('script');
    segmentScript.innerText = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
            analytics.load("BSylwAlKVD059DhWuu2TuVkkUMiWBM3Z");
            analytics.page();
        }}();`;
    document.body.appendChild(segmentScript);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isDesktopViewport) {
      const imageBrowserStatusChanged =
        this.props.productImagesBrowserStatus !==
        prevProps.productImagesBrowserStatus;

      if (imageBrowserStatusChanged) {
        if (this.props.productImagesBrowserStatus === 'open') {
          setTimeout(() => {
            this.setState({
              className: 'covered'
            });
          }, 500);
        } else {
          this.setState({
            className: ''
          });
        }
      }
    }
  }

  render() {
    const { className } = this.state;

    return (
      <HeaderRoot className={className}>
        <HomeLink to="/" aria-label="Home page">
          <Logo />
        </HomeLink>
      </HeaderRoot>
    );
  }
}

Header.propTypes = {
  productImagesBrowserStatus: PropTypes.string.isRequired,
  isDesktopViewport: PropTypes.bool
};

export default Header;
