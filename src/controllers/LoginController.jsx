import { useForm } from 'react-hook-form';

export default function LoginController() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (errors, e) => {
    console.log(errors);
    // Aquí podrías manejar los errores de validación.
    // Los errores de validación se proporcionan como el primer argumento.
  };


  return { register, handleSubmit, errors, onSubmit, onError };
}