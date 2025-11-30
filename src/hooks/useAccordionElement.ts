import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IUseAccordionElement {
  isShowElement: boolean;
  elementRef: RefObject<HTMLDivElement>;
  elementScrollHeight: number | null;
  onAccordionBtnClick: MouseEventHandler;
}

const useAccordionElement = (): IUseAccordionElement => {
  const [isShowElement, setIsShowElement] = useState<boolean>(false);
  const [elementScrollHeight, setElementScrollHeight] = useState<number | null>(
    null
  );
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHeight = elementRef.current?.scrollHeight;

    if (scrollHeight) {
      setElementScrollHeight(scrollHeight);
    }
  }, []);

  const toggleIsShowElement = () => {
    setIsShowElement((prevState) => !prevState);
  };

  const onAccordionBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleIsShowElement();
  };

  return {
    isShowElement,
    elementRef,
    elementScrollHeight,
    onAccordionBtnClick,
  };
};

export default useAccordionElement;
