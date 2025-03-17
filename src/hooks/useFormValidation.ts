import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValues, useForm } from 'react-hook-form';

export const useFormValidation = <T extends Yup.AnyObjectSchema>(
  schema: T,
  defaultValues?: DefaultValues<Yup.InferType<T>>
) => {
  type FormData = Yup.InferType<T>;

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
    mode: 'onBlur',
  });
  return methods;
};
