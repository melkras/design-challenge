// This component is used for keeping the parent component clean.
// All the form and validation logic is handled here

import { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useFormState() {
  const [signup, setSignup] = useState(false);
  // Dynamic form schema, depending on wether 
  // the user wants to sign-in or sign-up.
  const SignUpSchema = z.object({
    ...(signup && {
      name: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters' })
        .max(20, { message: 'Name must be up to 20 characters' }),
      surName: z
        .string()
        .min(3, { message: 'Surname must be at least 3 characters' })
        .max(20, { message: 'Surname must be up to 20 characters' }),
    }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must be atleast 6 characters' }),
    newsletter: z.boolean().optional(),
    terms: z.boolean().refine((data) => data, {
      message: "Bend a knee and accept our terms!",
    }),
  });

  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }

  } = useForm<SignUpSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(SignUpSchema)

  });
  // Here should be handled future actions with the form data.
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };
  // Signup button handler - if not on signup form, switch to , else validate form.
  const signupButtonHandler = useCallback((e: React.SyntheticEvent) => {
    if (!signup) { e.preventDefault(); }
    setSignup(true);
  }, [signup]);
  // Singin button handler - if not on signin form, switch to , else validate form.
  const signinButtonHandler = useCallback((e: React.SyntheticEvent) => {
    if (signup) { e.preventDefault(); }
    setSignup(false);
  }, [signup]);
  return {
    signup, errors, register, handleSubmit, onSubmit, signinButtonHandler, signupButtonHandler
  };
}
