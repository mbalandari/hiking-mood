import * as Yup from 'yup';
import { Formik, Form, Field, useField } from 'formik';

const InputComponent = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <label>
            {label}: {meta.touched && meta.error && <div>{meta.error}</div>}
            <input {...field} {...props} />
        </label>
    )
}

const FormComponent = ({ handleSuccess }) => {

    const schema = Yup.object().shape({
        name: Yup.string().required('Required field'),
        email: Yup.string().email("Must be a valid email address").required('Required field')
    })

    return (
        <Formik
            initialValues={{
                name: "",
                email: ""
            }}

            onSubmit={handleSuccess}
            validationSchema={schema}
        >
            {() => (
                <Form>
                    <InputComponent name="name" type="text" label="Name" autocomplete="off" />
                    <InputComponent name="email" type="email" label="Email" autocomplete="off" />

                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    )
}

export default FormComponent;
