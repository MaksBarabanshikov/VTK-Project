import {
  Button,
  Checkbox,
  Flex,
  Input,
  Link,
  Spacer,
  Stack,
  Text,
  Center, FormControl,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage, SlideMotion } from '@/shared/ui';
import { string, object, boolean } from 'yup';
import { required, email } from '@/app/configuration/yupErrors.ts';
import { yupResolver } from '@hookform/resolvers/yup';

type AuthInputs = {
  email: string,
  password: string,
  isRemember: boolean,
};

const validationSchema = object({
  email: string().email(email).required(required),
  password: string().required(required),
  isRemember: boolean(),
});
const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({ resolver: yupResolver(validationSchema), mode: 'onBlur' });

  const { errors } = formState;

  const onSubmit = (data: any | AuthInputs) => console.log(data);

  return (
      <SlideMotion>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={30}>
                  <FormControl>
                      <Input placeholder={'Email'} type={'email'} inputMode={'email'} {...register('email')}/>
                      <ErrorMessage errorMessage={errors.email} />
                  </FormControl>
                  <FormControl>
                      <Input placeholder={'Password'} type={'password'} {...register('password')}/>
                      { errors.password && <ErrorMessage errorMessage={errors.password} /> }
                  </FormControl>
                  <Flex justifyContent={'space-between'}>
                      <Checkbox  {...register('isRemember')}>Remember me</Checkbox>
                      <Link>Forgot password?</Link>
                  </Flex>
                  <Button type={'submit'} colorScheme={'#000'} backgroundColor={'#000'} color={'white'} borderRadius={'30'} mb={3}>Login</Button>
              </Stack>
          </form>
          <Spacer />
          <Center>
              <Text>
                  Don’t have an Account?
                  {' '}
                  <Link as={RouterLink} color={'red.base'} to={'/register'}>Register</Link>
              </Text>
          </Center>
      </SlideMotion>

  );
};

export default AuthPage;