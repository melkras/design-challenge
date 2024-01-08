// SignUpIn component.
// This component renders the form, it allows to fill the signin form & singup form.
// It also validates the fields.
// Relevant styles can be found in: src\sass\pages\_sign-in-up.scss
// Im using a custom hook ( useFormState ) to keep the form state logic separate from the presentational components.

import Container from "../components/container";
import Checkbox from "../components/ui/checkbox";
import CheckboxGroup from "../components/ui/checkbox-group";
import Input from "../components/ui/input";
import Form, { FormGroup } from "../components/ui/form";
import useFormState from "../hooks/use-formState";
import PageTitle from "../components/page-title";
import PageActions from "../components/page-actions";

export default function SignUpIn() {
    const { signup, errors, register, handleSubmit, onSubmit, signinButtonHandler, signupButtonHandler } = useFormState();
    return (
        <Container className="signup">
            <PageTitle />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    {signup &&
                        <div className="form__form-group__row">
                            <Input
                                label="First name"
                                invalid={errors.name ? true : false}
                                helpLabel={errors?.name?.message}
                                name="name"
                                inputRef={{ ...register("name") }.ref}
                                onChange={{ ...register("name") }.onChange}
                            />
                            <Input
                                label="Last name"
                                invalid={errors.surName ? true : false}
                                helpLabel={errors?.surName?.message}
                                name="surName"
                                inputRef={{ ...register("surName") }.ref}
                                onChange={{ ...register("surName") }.onChange}
                            />
                        </div>
                    }
                    <Input
                        label="Email"
                        type="email"
                        invalid={errors.email ? true : false}
                        helpLabel={errors?.email?.message}
                        name="email"
                        inputRef={{ ...register("email") }.ref}
                        onChange={{ ...register("email") }.onChange}
                    />
                    <Input
                        label="Password"
                        type="password"
                        invalid={errors.password ? true : false}
                        helpLabel={errors?.password?.message || 'Create a strong password with a mix of letters, numbers and symbols'}
                        name="password"
                        inputRef={{ ...register("password") }.ref}
                        onChange={{ ...register("password") }.onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <CheckboxGroup
                        label={'Additional'}
                        infoLabel={'Group information text'}
                        invalid={errors.terms ? true : false}
                        errorText={errors?.terms?.message}
                    >
                        <Checkbox
                            label={'Send me useless newsletters please'}
                            name="newsletter"
                            helpLabel={'Our marketers will thank you, every day'}
                            showHelp={true}
                            inputRef={{ ...register("newsletter") }.ref}
                            onChange={{ ...register("newsletter") }.onChange}
                        />
                        <Checkbox
                            label={'I agree with terms and conditions'}
                            name="terms"
                            helpLabel={'Contextual help message'}
                            showHelp={true}
                            inputRef={{ ...register("terms") }.ref}
                            onChange={{ ...register("terms") }.onChange}
                        />
                    </CheckboxGroup>
                </FormGroup>
                <PageActions
                    signup={signup}
                    signinButtonHandler={signinButtonHandler}
                    signupButtonHandler={signupButtonHandler}
                />
            </Form>
        </Container>
    );
}
