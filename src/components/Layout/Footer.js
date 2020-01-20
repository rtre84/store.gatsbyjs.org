import React, { Component } from 'react';
import styled from '@emotion/styled';

import { breakpoints, colors, spacing } from '../../utils/styles';

const FooterRoot = styled('footer')`
  align-items: center;
  color: ${colors.textMild};
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  padding: ${spacing.md}px;
  padding-bottom: calc(${spacing.xl}px + 50px);

  a {
    color: ${colors.brand};
  }

  @media (min-width: ${breakpoints.desktop}px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50px;
    padding: 0 ${spacing.xl}px 10px;
  }
`;

const Row = styled(`span`)`
  display: inline-block;
  flex-shrink: 0;
  line-height: 1.3;
  padding-bottom: ${spacing['2xs']}px;
  text-align: center;

  @media (min-width: ${breakpoints.desktop}px) {
    line-height: 1.4;
    padding-bottom: 0;
  }
`;

const Spacer = styled(`span`)`
  display: none;

  @media (min-width: ${breakpoints.desktop}px) {
    display: inline-block;
    padding: 0 ${spacing.sm}px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterRoot>
        <Row>
          <b>Got questions?&nbsp;</b>
        </Row>
        <Row>
          Talk to us on Facebook{' '}
          <a href="https://facebook.com/petsuppliestoreco/">
            @petsuppliestoreco
          </a>
        </Row>
        <Row>
          &nbsp;or follow us on Instagram{' '}
          <a href="https://www.instagram.com/petsuppliesstoreco/">
            @petsuppliesstoreco
          </a>
        </Row>
        <Row>
          &nbsp;or send an email to{' '}
          <a href="mailto:support@petsuppliesstore.co">
            support@petsuppliesstore.co
          </a>
        </Row>
        <Spacer>•</Spacer>
        <Row>
          Built with 💜 by{' '}
          <a href="https://servingniches.org/">Serving Niches LLC.</a>
        </Row>
        {/*<Spacer>•</Spacer>*/}
        {/*<Row>*/}
        {/*See the source code on{' '}*/}
        {/*<a href="https://github.com/gatsbyjs/store.gatsbyjs.org">GitHub</a>*/}
        {/*</Row>*/}
      </FooterRoot>
    );
  }
}

export default Footer;
