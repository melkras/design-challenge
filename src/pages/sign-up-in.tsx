import { useCallback, useState } from "react";
import Container from "../components/container";
import Checkbox from "../components/ui/checkbox";
import CheckboxGroup from "../components/ui/checkbox-group";
import Input from "../components/ui/input";
import Form, { FormGroup } from "../components/ui/form";
import Button from "../components/ui/button";

export default function SignUpIn() {
    const [signup, setSignup] = useState(false);
    const [values, setValues] = useState({
        checkbox1: false,
        checkbox2: false,
        name: '',
        surname: '',
        email: '',
        password: '',
        newsletter: undefined,
        terms: undefined,
    });
    const checkboxHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.checked
            };
        });
    }, []);
    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    }, []);
    const signupButtonHandler = () => {
        setSignup(true);
    };
    const signinButtonHandler = () => {
        setSignup(false);
    };
    return (
        <Container className="signup">
            <div className="intro">
                <h1 className="intro__title">Welcome to componento!</h1>
                <p className="intro__subtitle">Give us your credentials and we shall let you pass.</p>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    {signup &&
                        <div className="form__form-group__row">
                            <Input
                                label="First name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={inputHandler}
                            />
                            <Input
                                label="Last name"
                                name="surname"
                                type="text"
                                value={values.surname}
                                onChange={inputHandler}
                                showHelp={true}
                            />
                        </div>
                    }
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={inputHandler}
                        helpLabel={'Top-level domain is either missing or incorrect'}
                        showHelp={true}
                        invalid={true}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={inputHandler}
                        helpLabel={'Create a strong password with a mix of letters, numbers and symbols'}
                        showHelp={true}
                    />
                </FormGroup>
                <FormGroup>
                    <CheckboxGroup
                        label={'Additional'}
                        infoLabel={'Group information text'}
                        invalid={true}
                        errorText={"You need to agree with terms and conditions"}
                    >
                        <Checkbox
                            name={'newsletter'}
                            checked={values.newsletter || false}
                            onChange={checkboxHandler}
                            label={'Send me useless newsletters please'}
                            helpLabel={'Our marketers will thank you, every day'}
                        />
                        <Checkbox
                            name={'terms'}
                            checked={values.terms || false}
                            onChange={checkboxHandler}
                            label={'I agree with terms and conditions'}
                            helpLabel={'Agree with everything'}
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
