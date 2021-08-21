import { Flex, Text, useMediaQuery, useStyles } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { useSideBarContext } from '../../context';
import { MotionDiv } from '../MotionDiv';

type SideBarItemProps = {
  title: string;
  icon?: React.ComponentType<any>;
  closeOnNavigate?: boolean;
};

export const SideBarItem: React.FC<SideBarItemProps> = ({
  icon: CustomIcon,
  title,
  closeOnNavigate,
}) => {
  const { sideBarOpen, toggleSideBar } = useSideBarContext();

  const { sideBarItem } = useStyles();

  const Icon = React.useMemo(() => (CustomIcon ? motion(CustomIcon) : null), [
    CustomIcon,
  ]);

  const isTabletOrMobile = useMediaQuery('(max-width: 40em)');

  const variants = {
    open: {
      x: 0,
      transition: {
        x: { stiffness: 200, velocity: -100 },
      },
    },
    closed: {
      x: isTabletOrMobile ? -50 : 0,
      transition: {
        x: { stiffness: 200 },
      },
    },
  };

  return (
    <MotionDiv
      variants={variants}
      onClick={() => {
        if (closeOnNavigate && sideBarOpen) {
          toggleSideBar();
        }
      }}
      _css={{ ...sideBarItem }}
    >
      <Flex
        height="50px"
        alignItems="center"
        justifyContent="center"
        className="sidebar-nav-item-wrapper"
      >
        {Icon && (
          <Flex className="icon-wrap">
            <Icon />
          </Flex>
        )}
        <AnimatePresence>
          {sideBarOpen && (
            <Text
              ml={4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
            >
              {title}
            </Text>
          )}
        </AnimatePresence>
        {/* {!sideBarOpen && !isTabletOrMobile && (
          <Tooltip bg={tooltipBg || 'gray.800'} className="sidebar-tooltip">
            <Text fontSize={13} color={tooltipColor || 'white'}>
              {title}
            </Text>
          </Tooltip>
        )} */}
      </Flex>
    </MotionDiv>
  );
};
