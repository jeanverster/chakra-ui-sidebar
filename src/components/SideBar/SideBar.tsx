import {
  Flex,
  FlexProps,
  forwardRef,
  HStack,
  StylesProvider,
  useMediaQuery,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimation, Variants } from 'framer-motion';
import * as React from 'react';
import { useSideBarContext } from '../../context/SideBarContext';
import { MotionDiv } from '../MotionDiv';
import { SideBarItem } from '../SideBarItem';
import { SideBarToggle } from '../SideBarToggle';

type SideBarProps = FlexProps & {
  borderColor?: string;
  closeOnNavigate?: boolean;
  navItems: any[];
  tooltipBg?: string;
  tooltipColor?: string;
};

export const SideBar = forwardRef<SideBarProps, 'div'>(
  ({ children, navItems, ...rest }) => {
    const { sideBarOpen, toggleSideBar } = useSideBarContext();
    console.log('sideBarOpen', sideBarOpen);

    const controls = useAnimation();

    const isTabletOrMobile = useMediaQuery('(max-width: 40em)');

    const styles = useMultiStyleConfig('SideBar', rest);
    console.log('styles', styles);

    React.useEffect(() => {
      if (sideBarOpen) {
        controls.start('open');
      } else {
        controls.start('closed');
      }
    }, [isTabletOrMobile, sideBarOpen, controls]);

    const variants: Variants = {
      open: {
        x: 0,
        width: 250,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.05,
          stiffness: 10,
          damping: 5,
        },
      },
      closed: {
        // x: isTabletOrMobile ? -250 : 0,
        // width: isTabletOrMobile ? 250 : 64,
        transition: {
          stiffness: 80,
          staggerDirection: -1,
          staggerChildren: 0.1,
        },
      },
    };

    return (
      <StylesProvider value={styles}>
        <HStack height="100vh" width="100vw">
          <MotionDiv
            animate={controls}
            variants={variants}
            __css={styles.sideBar}
            // Calculate offset based on icon size
            initial={{ width: sideBarOpen ? 250 : 64 }}
          >
            <Flex
              pl="20px"
              width="100%"
              height="64px"
              alignItems="center"
              borderBottomWidth={1}
              justifyContent="flex-start"
            >
              <SideBarToggle
                color="black"
                open={sideBarOpen}
                onClick={toggleSideBar}
              />
              <Flex pr={2} flex={1} justifyContent="flex-end">
                <AnimatePresence>
                  {sideBarOpen && (
                    <motion.img
                      width="60%"
                      height="auto"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ alignSelf: 'flex-start' }}
                    />
                  )}
                </AnimatePresence>
              </Flex>
            </Flex>

            {navItems.map((props) => (
              <SideBarItem {...props} />
            ))}
          </MotionDiv>
          {children}
          {/* {isTabletOrMobile && (
          <Overlay
            onClick={toggleSideBar}
            initial={{ opacity: 0 }}
            pointerEvents={sideBarOpen ? 'auto' : 'none'}
            animate={sideBarOpen ? { opacity: 1 } : { opacity: 0 }}
          />
        )} */}
        </HStack>
      </StylesProvider>
    );
  }
);

SideBar.defaultProps = {
  color: 'white',
  bg: 'gray.900',
  hoverColor: 'gray.800',
  borderColor: 'gray.700',
  accentColor: 'cyan.500',
};
