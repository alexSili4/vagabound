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

const letterMob = keyframes`
  0% {
    transform: translateX(0) translateY(0)
  }

  50% {
	   transform: translateX(0) translateY(-35%) scale(0.4);
  }

    100% {
	  transform: translateX(0) translateY(-20%) scale(0.4);
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

const successMsgMob = keyframes`
0% {
  transform: translateX(0) translateY(20%) scale(0.4);
}

30% {
  transform: translateX(0) translateY(-50%) scale(0.4);
}

45% {
  transform: translateX(0) translateY(-90%) scale(0.4);
}

60% {
  transform: translateX(0) translateY(-70%) scale(0.4);
}

100% {
  transform: translateX(0) translateY(-50%) scale(1)
}
`;

export default { letter, successMsg, letterMob, successMsgMob };
