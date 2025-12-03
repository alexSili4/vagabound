import { MouseEvent, useEffect, useRef, useState } from 'react';

interface UsePreviewVideoProps {
  onVideoEnded: () => void;
}

const usePreviewVideo = ({ onVideoEnded }: UsePreviewVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [checkAgeWindowIsOpen, setCheckAgeWindowIsOpen] =
    useState<boolean>(false);
  const [isCheckAge, setIsCheckAge] = useState<boolean>(false);

  const onAgeCheckBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    setCheckAgeWindowIsOpen(false);
    setIsCheckAge(true);
    videoRef.current?.play();
  };

  useEffect(() => {
    const checkLoading = () => {
      setIsLoading(document.body.classList.contains('loading'));
    };

    checkLoading();

    const observer = new MutationObserver(checkLoading);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      const limit = 3;

      if (video.currentTime >= limit && !isCheckAge) {
        video.pause();
        setCheckAgeWindowIsOpen(true);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', onVideoEnded);

    if (!isLoading && !checkAgeWindowIsOpen) {
      video.play().catch((e) => console.log('Autoplay blocked', e));
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [checkAgeWindowIsOpen, isLoading, onVideoEnded]);

  return { videoRef, checkAgeWindowIsOpen, onAgeCheckBtnClick };
};

export default usePreviewVideo;
