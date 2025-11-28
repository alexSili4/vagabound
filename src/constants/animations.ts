import { keyframes } from '@emotion/react';

const letter = keyframes`
  0% {
    transform: translateX(0) translateY(0)
  }

  60% {
	  transform: translateX(-60%) translateY(-10%) scale(0.4);

  }

    100% {
	  transform: translateX(-60%) translateY(10%) scale(0.4);
  }
`;

export default { letter };
