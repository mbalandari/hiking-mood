

const FormComponent = ({ handleSuccess }) => {
    return (
        <form onSubmit={handleSuccess}>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" required autoComplete="off" />

            <label htmlFor="email">Email address: </label>
            <input name="email" type="email" required autoComplete="off" />

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent;
