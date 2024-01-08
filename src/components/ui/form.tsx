import React, { PropsWithChildren } from 'react';
type FormGroup = {

};
export const FormGroup: React.FC<FormGroup & PropsWithChildren> = (props) => {
    const { children } = props;
    return <div className="form__form-group">
        {children}
    </div>;
};

type TForm = {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<TForm & PropsWithChildren> = (props) => {
    const { children, onSubmit, ...rest } = props;
    return (
        <form className='form' onSubmit={onSubmit} {...rest}>
            {children}
        </form>
    );
};


export default Form;
