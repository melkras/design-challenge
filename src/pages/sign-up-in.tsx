import Container from "../components/container";
import Checkbox from "../components/ui/checkbox";
import CheckboxGroup from "../components/ui/checkbox-group";
import Input from "../components/ui/input";
import Form, { FormGroup } from "../components/ui/form";
import Button from "../components/ui/button";
import useFormState from "../hooks/use-formState";

export default function SignUpIn() {
    const { signup, errors, register, handleSubmit, onSubmit, signinButtonHandler, signupButtonHandler } = useFormState();
    return (
        <Container className="signup">
            <div className="intro">
                <h1 className="intro__title">Welcome to componento!</h1>
                <p className="intro__subtitle">Give us your credentials and we shall let you pass.</p>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    {signup &&
                        <div className="form__form-group__row">
                            <Input
                                label="First name"
                                invalid={errors.name ? true : false}
                                helpLabel={errors?.name?.message}
                                {...register("name")}
                            />
                            <Input
                                label="Last name"
                                invalid={errors.surName ? true : false}
                                helpLabel={errors?.surName?.message}
                                {...register("surName")}
                            />
                        </div>
                    }
                    <Input
                        label="Email"
                        type="email"
                        invalid={errors.email ? true : false}
                        helpLabel={errors?.email?.message}
                        {...register("email")}
                    />
                    <Input
                        label="Password"
                        type="password"
                        invalid={errors.password ? true : false}
                        helpLabel={errors?.password?.message}
                        {...register("password")}
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
                            {...register("newsletter")}
                        />
                        <Checkbox
                            label={'I agree with terms and conditions'}
                            {...register("terms")}
                        />
                    </CheckboxGroup>
                </FormGroup>
                <div className={`actions ${signup ? 'reverse-order' : ''}`}>
                    <Button
                        onClick={signinButtonHandler}
                        label={"Sign in"}
                        priority={`${signup ? 'tertiary' : 'primary'}`}
                    />
                    <div className="actions__spacer">or</div>
                    <Button
                        onClick={signupButtonHandler}
                        label={"Create account"}
                        priority={`${!signup ? 'tertiary' : 'primary'}`}
                    />
                </div>
            </Form>
        </Container>
    );
}
