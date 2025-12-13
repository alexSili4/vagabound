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
  Error,
  PostboxContainer,
} from './OrderSection.styled';
import { IContactsForm } from '@/types/order';
import { useForm } from 'react-hook-form';
import { contacts, SectionId } from '@/constants';
import successMsgBg from '@/images/order/success-msg.webp';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  type?: HTMLInputTypeAttribute;
  settings: object;
  error?: string;
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
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isError = Boolean(error);

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
        readOnly={isSelect}
        isError={isError}
        {...settings}
      />
      {isError && <Error>{error}</Error>}
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
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IContactsForm>({ mode: 'onBlur' });

  const onOptionChange = (option: string) => {
    setValue('barrel', option, { shouldValidate: true });
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

    setValue('phone', value, { shouldValidate: true });
  };

  return (
    <FormContainer isSuccess={isSuccess}>
      <FormHeader>
        <FormTitle>Надішліть свої контактні дані для передзамовлення</FormTitle>
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrap>
          <Input
            placeholder='ПІБ'
            settings={register('name', { required: 'Вкажіть своє імя' })}
            error={errors.name?.message}
          />
          <Input
            placeholder='Телефон'
            settings={register('phone', {
              required: 'Вкажіть свій телефон',
              onChange: onPhoneChange,
              pattern: {
                value:
                  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                message: 'Вкажіть свій телефон',
              },
            })}
            error={errors.phone?.message}
          />
          <Input
            placeholder='E-mail'
            type='email'
            settings={register('email', {
              required: 'Вкажіть свій email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Вкажіть свій email',
              },
            })}
            error={errors.email?.message}
          />
          <Input
            placeholder='Оберіть бочку'
            options={contacts.barrels}
            onOptionChange={onOptionChange}
            settings={register('barrel', { required: 'Оберіть бажану бочку' })}
            error={errors.barrel?.message}
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
    <Section id={SectionId.contacts}>
      <Container>
        <PostboxWrap isSuccess={isSuccess}>
          <BlackBox></BlackBox>
          <PostboxContainer>
            <Postbox src={postbox} alt='Поштова скринька' />
            <PostboxAlt
              src={postbox}
              alt='Поштова скринька'
              isSuccess={isSuccess}
            />
          </PostboxContainer>
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
