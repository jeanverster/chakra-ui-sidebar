import { Flex, FlexProps } from '@chakra-ui/react';
import * as React from 'react';

type SideBarContentProps = FlexProps & {
  children?: React.ReactNode;
};

export const SideBarContent = ({
  children,
  ...rest
}: SideBarContentProps): JSX.Element => {
  return <Flex {...rest}>{children}</Flex>;
};

SideBarContent.defaultProps = {
  width: '100%',
  maxWidth: '100%',
  minHeight: '100vh',
  overflowX: 'hidden',
  boxSizing: 'border-box',
  flexDirection: 'column',
  transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
};
