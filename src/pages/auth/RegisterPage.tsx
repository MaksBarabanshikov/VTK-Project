import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Link,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AUTH } from '@/app/configuration/routerPaths.ts';
import { ErrorMessage, SlideMotion } from '@/shared/ui';
import { boolean, object, ref, string } from 'yup';
import { confirmPassword, email, required } from '@/app/configuration/yupErrors.ts';
import { yupResolver } from '@hookform/resolvers/yup';

type RegisterInputs = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  isRemember: boolean,
};

const validationSchema = object({
  name: string().required(required),
  email: string().email(email).required(required),
  password: string().required(required),
  confirmPassword: string().oneOf([ref('password'), ''], confirmPassword),
  isRemember: boolean(),
});

const RegisterPage = () => {
  const { colorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    resolver: yupResolver(validationSchema), mode: 'onBlur',
  });

  const { errors } = formState;

  const onSubmit = (data: any | RegisterInputs) => console.log(data);
    
  return (
        <SlideMotion>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={30}>
                    <FormControl>
                        <Input placeholder={'Email'} type={'text'} {...register('name')}/>
                        <ErrorMessage errorMessage={errors.name} />
                    </FormControl>
                    <FormControl>
                        <Input placeholder={'Email'} type={'email'} inputMode={'email'} {...register('email')}/>
                        <ErrorMessage errorMessage={errors.email} />
                    </FormControl>
                    <FormControl>
                        <Input placeholder={'Password'} type={'password'} {...register('password')}/>
                        <ErrorMessage errorMessage={errors.password} />
                    </FormControl>
                    <FormControl>
                        <Input placeholder={'Confirm Password'} type={'password'} {...register('confirmPassword')}/>
                        <ErrorMessage errorMessage={errors.confirmPassword} />
                    </FormControl>
                    <Flex justifyContent={'space-between'}>
                        <Checkbox  {...register('isRemember')}>Remember me</Checkbox>
                        <Link>Forgot password?</Link>
                    </Flex>
                    <Button type={'submit'} colorScheme={colorMode === 'light' ? '#000' : '#fff'} backgroundColor={colorMode === 'light' ? '#000' : '#fff'} color={colorMode === 'light' ? '#fff' : '#000'} borderRadius={'30'} mb={3}>Register</Button>
                </Stack>
            </form>
            <Spacer />
            <Center>
                <Text>
                    Already have an account?
                    {' '}
                    <Link as={RouterLink} color={'red.base'} to={AUTH}>Log in</Link>
                </Text>
            </Center>
        </SlideMotion>
  );
};

export default RegisterPage;