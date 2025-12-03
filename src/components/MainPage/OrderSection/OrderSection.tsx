import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  MouseEvent,
  useState,
} from 'react';
import postbox from '@/images/order/postbox.webp';
import letter from '@/images/order/letter.webp';
import letterPartTop from '@/images/order/letter-part-top.webp';
import letterPartTopGreen from '@/images/order/letter-part-top-green.webp';
import letterPart from '@/images/order/letter-part.webp';
import {
  Section,
  Container,
  Postbox,
  FormWrap,
  Letter,
  LetterPart,
  FormContainer,
  Form,
  InputWrap,
  ListItem,
  OpenSelectBtn,
  OptionBtn,
  OptionsContainer,
  OptionsList,
  StyledInput,
  InputsWrap,
  SubmitBtn,
  FormHeader,
  FormText,
  FormTitle,
  LetterPartTop,
  LetterPartTopGreen,
  LetterPartTopWrap,
  PostboxAlt,
  PostboxWrap,
  BlackBox,
  SuccessMsgWrap,
  SuccessMsgBg,
  SuccessMsgText,
  SuccessMsgTextWrap,
  SuccessMsgTitle,
} from './OrderSection.styled';
import { IContactsForm } from '@/types/order';
import { useForm } from 'react-hook-form';
import { contacts } from '@/constants';
import successMsgBg from '@/images/order/success-msg.webp';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  type?: HTMLInputTypeAttribute;
  settings: object;
}

interface IOrderFormProps {
  updateIsSuccess: (data: boolean) => void;
  isSuccess: boolean;
}

const Input: FC<IInputProps> = ({
  placeholder,
  isSelect = false,
  options,
  onOptionChange,
  settings,
  type = 'text',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    toggleIsOpen();
  };

  return (
    <InputWrap>
      <StyledInput
        type={type}
        placeholder={placeholder}
        disabled={isSelect}
        {...settings}
      />
      {isSelect && (
        <>
          <OpenSelectBtn type='button' onClick={onBtnClick}></OpenSelectBtn>

          {isOpen && options && onOptionChange && (
            <OptionsContainer>
              <OptionsList>
                {options.map((option) => {
                  const onBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.blur();

                    onOptionChange(option);
                    toggleIsOpen();
                  };

                  return (
                    <ListItem key={option}>
                      <OptionBtn type='button' onClick={onBtnClick}>
                        {option}
                      </OptionBtn>
                    </ListItem>
                  );
                })}
              </OptionsList>
            </OptionsContainer>
          )}
        </>
      )}
    </InputWrap>
  );
};

const OrderForm: FC<IOrderFormProps> = ({ updateIsSuccess, isSuccess }) => {
  const { register, handleSubmit, reset, setValue } = useForm<IContactsForm>();

  const onOptionChange = (option: string) => {
    setValue('barrel', option);
  };

  const onSubmit = (data: IContactsForm) => {
    console.log(data);
    updateIsSuccess(true);
    reset();
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;

    value = value.replace(/[^\d+\s]/g, '');

    if (value.includes('+') && value.indexOf('+') > 0) {
      value = value.replace(/\+/g, '');
    }

    value = value.replace(/^(\++)/, '+');

    setValue('phone', value);
  };

  return (
    <FormContainer isSuccess={isSuccess}>
      <FormHeader>
        <FormTitle>Надішліть свої контактні дані для передзамовлення</FormTitle>
        <FormText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum
        </FormText>
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrap>
          <Input
            placeholder='ПІБ'
            settings={register('name', { required: true })}
          />
          <Input
            placeholder='Телефон'
            settings={register('phone', {
              required: true,
              onChange: onPhoneChange,
            })}
          />
          <Input
            placeholder='E-mail'
            type='email'
            settings={register('email', { required: true })}
          />
          <Input
            placeholder='Оберіть бочку'
            options={contacts.barrels}
            onOptionChange={onOptionChange}
            settings={register('barrel', { required: true })}
            isSelect
          />
        </InputsWrap>
        <SubmitBtn>надіслати</SubmitBtn>
      </Form>
    </FormContainer>
  );
};

const OrderSection: FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <Section>
      <Container>
        <PostboxWrap>
          <BlackBox></BlackBox>
          <Postbox src={postbox} alt='Поштова скринька' />
          <PostboxAlt
            src={postbox}
            alt='Поштова скринька'
            isSuccess={isSuccess}
          />
        </PostboxWrap>

        <FormWrap isSuccess={isSuccess}>
          <Letter src={letter} alt='Конверт' />
          <OrderForm updateIsSuccess={setIsSuccess} isSuccess={isSuccess} />
          <LetterPart src={letterPart} alt='Конверт' />
          <LetterPartTopWrap isSuccess={isSuccess}>
            <LetterPartTopGreen src={letterPartTopGreen} alt='Конверт' />
            <LetterPartTop
              src={letterPartTop}
              alt='Конверт'
              isSuccess={isSuccess}
            />
          </LetterPartTopWrap>
        </FormWrap>

        <SuccessMsgWrap isSuccess={isSuccess}>
          <SuccessMsgBg src={successMsgBg} alt='Конверт' />
          <SuccessMsgTextWrap>
            <SuccessMsgTitle>дякуємо за замовлення!</SuccessMsgTitle>
            <SuccessMsgText>
              Очікуйте на нашу відповідь незабаром
            </SuccessMsgText>
          </SuccessMsgTextWrap>
        </SuccessMsgWrap>
      </Container>
    </Section>
  );
};

export default OrderSection;
