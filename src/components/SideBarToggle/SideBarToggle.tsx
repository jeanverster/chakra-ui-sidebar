import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

type SideBarToggleProps = {
  open: boolean;
  color: string;
  onClick?: () => void;
};

// .menu-icon {
// 	position: relative;
// 	width: 50px;
// 	height: 50px;
// 	cursor: pointer;

// 	.menu-icon__cheeckbox {
// 		display: block;
// 		width: 100%;
// 		height: 100%;
// 		position: relative;
// 		cursor: pointer;
// 		z-index: 2;
// 		-webkit-touch-callout: none;
// 		position: absolute;
// 		opacity: 0;
// 	}
// 	div {
// 		margin: auto;
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		left: 0;
// 		bottom: 0;
// 		width: 22px;
// 		height: 12px;
// 	}
// 	span {
// 		position: absolute;
// 		display: block;
// 		width: 100%;
// 		height: 2px;
// 		background-color: var(--bar-bg, #000);
// 		border-radius: 1px;
// 		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

// 		&:first-of-type {
// 			top: 0;
// 		}
// 		&:last-of-type {
// 			bottom: 0;
// 		}
// 	}
// 	&.active,
// 	.menu-icon__cheeckbox:checked + div {
// 		span {
// 			&:first-of-type {
// 				transform: rotate(45deg);
// 				top: 5px;
// 			}
// 			&:last-of-type {
// 				transform: rotate(-45deg);
// 				bottom: 5px;
// 			}
// 		}
// 	}

// 	&.active:hover span:first-of-type,
// 	&.active:hover span:last-of-type,
// 	&:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
// 	&:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
// 		width: 22px;
// 	}

// 	&:hover {
// 		// no need hover effect on mobile.
// 		@media (min-width: 1024px) {
// 			span:first-of-type {
// 				width: 26px;
// 			}

// 			span:last-of-type {
// 				width: 12px;
// 			}
// 		}
// 	}
// }

const width = 32;
const height = 32;

const SvgWrap = styled(MotionDiv)`
  width: 64px;
  &:hover {
    cursor: pointer;
  }
`;

const MotionSvg = styled(motion.svg)`
  &:hover {
    cursor: pointer;
  }
`;

export const SideBarToggle: React.FC<SideBarToggleProps> = ({
  open = false,
  onClick,
  color,
  ...props
}) => {
  const variant = open ? 'opened' : 'closed';

  const top = {
    closed: {
      rotate: 0,
      translateY: 1,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: -1,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };

  const lineProps: any = {
    stroke: color,
    strokeWidth: 2,
    animate: variant,
    initial: 'closed',
    vectorEffect: 'non-scaling-stroke',
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <SvgWrap>
      <MotionSvg
        width={24}
        height={24}
        onClick={onClick}
        overflow="visible"
        preserveAspectRatio="none"
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="4"
          y2="4"
          variants={bottom}
          {...lineProps}
        />
      </MotionSvg>
    </SvgWrap>
  );
};
