import { memo } from 'react';
import Button from './ui/button';
type TPageActions = {
    signinButtonHandler: (e: React.SyntheticEvent) => void;
    signupButtonHandler: (e: React.SyntheticEvent) => void;
    signup: boolean;
};
export default memo(function PageActions(props: TPageActions) {
    const { signup, signinButtonHandler, signupButtonHandler } = props;
    return (
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
    );
});
