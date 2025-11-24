import { FC, MouseEvent, MouseEventHandler, useEffect, useState } from 'react';
import {
  CheckAgeWrap,
  StyledVideo,
  Video,
  CheckAge,
  CheckAgeControls,
  CheckAgeTitle,
  NoBtn,
  YesBtn,
  YesBtnActiveBg,
  YesBtnBg,
  YesBtnTitle,
} from './PreviewVideo.styled';
import preview from '@/video/preview.mp4';
import { usePreviewVideo } from '@/hooks';
import { AnimatePresence, Transition, Variants } from 'framer-motion';

interface IPreviewVideoWindowProps {
  onVideoEnded: () => void;
}

interface ICheckAgeWindowProps {
  isOpen: boolean;
  onAgeCheckBtnClick: MouseEventHandler;
}

const CheckAgeWindow: FC<ICheckAgeWindowProps> = ({
  isOpen,
  onAgeCheckBtnClick,
}) => {
  const onNoBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    window.location.href = 'https://www.google.com';
  };

  const transition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants: Variants = {
    initial: {
      y: 300,
      opacity: 0,
      transition,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: 300,
      opacity: 0,
      transition,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <CheckAgeWrap
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <CheckAge>
            <CheckAgeTitle>Чи є вам 18 років?</CheckAgeTitle>
            <CheckAgeControls>
              <YesBtn type='button' onClick={onAgeCheckBtnClick}>
                <YesBtnBg></YesBtnBg>
                <YesBtnActiveBg></YesBtnActiveBg>
                <YesBtnTitle>Так</YesBtnTitle>
              </YesBtn>
              <NoBtn type='button' onClick={onNoBtnClick}>
                Ні
              </NoBtn>
            </CheckAgeControls>
          </CheckAge>
        </CheckAgeWrap>
      )}
    </AnimatePresence>
  );
};

export const PreviewVideoWindow: FC<IPreviewVideoWindowProps> = ({
  onVideoEnded,
}) => {
  const { videoRef, checkAgeWindowIsOpen, onAgeCheckBtnClick } =
    usePreviewVideo({ onVideoEnded });

  const transition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants: Variants = {
    initial: {
      y: 0,
      opacity: 1,
      transition,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: 300,
      opacity: 0,
      transition,
    },
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Video
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <StyledVideo ref={videoRef} src={preview} muted playsInline />
      </Video>

      <CheckAgeWindow
        onAgeCheckBtnClick={onAgeCheckBtnClick}
        isOpen={checkAgeWindowIsOpen}
      />
    </>
  );
};

const PreviewVideo: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onVideoEnded = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && <PreviewVideoWindow onVideoEnded={onVideoEnded} />}
    </AnimatePresence>
  );
};

export default PreviewVideo;
