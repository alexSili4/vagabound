import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  MouseEvent,
  useState,
} from 'react';
import postbox from '@/images/order/postbox.png';
import letter from '@/images/order/letter.png';
import letterPart from '@/images/order/letter-part.png';
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
} from './OrderSection.styled';
import { IContactsForm } from '@/types/order';
import { useForm } from 'react-hook-form';
import { contacts } from '@/constants';

interface IInputProps {
  placeholder: string;
  options?: string[];
  isSelect?: boolean;
  onOptionChange?: (option: string) => void;
  type?: HTMLInputTypeAttribute;
  settings: object;
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

const OrderForm: FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<IContactsForm>();

  const onOptionChange = (option: string) => {
    setValue('barrel', option);
  };

  const onSubmit = (data: IContactsForm) => {
    console.log(data);
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
    <FormContainer>
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
            settings={register('email', {
              required: true,
              onChange: onPhoneChange,
            })}
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
  return (
    <Section>
      <Container>
        <Postbox src={postbox} alt='' />

        <FormWrap>
          <Letter src={letter} alt='' />
          <OrderForm />
          <LetterPart src={letterPart} alt='' />
        </FormWrap>
      </Container>
    </Section>
  );
};

export default OrderSection;
