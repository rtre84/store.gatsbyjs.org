import React from 'react';
import styled from '@emotion/styled';
import { GoMarkGithub } from 'react-icons/go';

import { login } from '../../utils/auth';
import { Button as BaseButton } from '../shared/Buttons';
import { Heading, SectionHeading, Text } from './AreaTypography';
import { spacing, animations } from '../../utils/styles';

const ContentForGuestRoot = styled(`div`)`
  animation: ${animations.simpleEntry};
  position: relative;
`;

const FirstHeading = styled(Heading)`
  padding-right: ${spacing.lg}px;
  margin-right: 15px;
`;

const Button = styled(BaseButton)`
  margin: ${spacing.lg}px 0 ${spacing.xl}px 0;
`;

const ContentForGuest = () => (
  <ContentForGuestRoot>
    <SectionHeading>For Our New Visitors</SectionHeading>
    <FirstHeading>
      Get Our Awesome Pet Supplies at a <strong>DISCOUNT!</strong>
    </FirstHeading>
    <Text>
      We truly believe we have some of the most innovative products in the
      world, and we want to make sure we back that up with a risk-free ironclad
      30 day guarantee.
      <br />
      <br />
      Buying items online can be a daunting task, so we want you to realize that
      there is absolutely ZERO risk in buying something and trying it out. If
      you don't like it, no hard feelings, we'll make it right.
    </Text>
    {/*<Button inverse onClick={e => login()}>*/}
    {/*Log in with GitHub <GoMarkGithub />*/}
    {/*</Button>*/}
    <Button
      inverse
      href="//cutepetsuppliesstore.com/product/breathable-nylon-cat-muzzle-anti-bite-kitten-mouse-muzzles-for-bitting-bath-beauty-travel-tool-with-hole-cats-grooming-supplies"
    >
      Featured Product of the Week
    </Button>

    <SectionHeading>For Existing Customers</SectionHeading>
    <Heading>Miss our old site?</Heading>
    <Text>
      Worry Not. The older site is still very much functional. Click on the
      button below to visit the old Pet Supplies Store.
    </Text>

    <Button inverse href="https://petsuppliesstore.co?from_new=true">
      Explore Old Site
    </Button>
  </ContentForGuestRoot>
);

export default ContentForGuest;
