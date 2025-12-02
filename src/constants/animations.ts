import { keyframes } from '@emotion/react';

const letter = keyframes`
  0% {
    transform: translateX(0) translateY(0)
  }

    30% {
	  transform: translateX(0) translateY(0) scale(0.4);
  }

  60% {
	  transform: translateX(-60%) translateY(-10%) scale(0.4);
  }

    100% {
	  transform: translateX(-60%) translateY(10%) scale(0.4);
  }
`;

const successMsg = keyframes`
0% {
  transform: translateX(-60%) translateY(10%) scale(0.4);
}

30% {
  transform: translateX(-60%) translateY(-50%) scale(0.4);
}

45% {
  transform: translateX(-30%) translateY(-50%) scale(0.4);
}

60% {
  transform: translateX(0) translateY(0) scale(0.4);
}

100% {
  transform: translateX(0) translateY(0)
}
`;

export default { letter, successMsg };
