import { useState } from "react";
import Form from "../Form";
import { Container, H3, H4, P, Socials, SuccessContainer } from "./styles";
import { ReactComponent as Happy } from './happy.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Github } from './github.svg';

const Input = ({ handleSuccess }) => (
    <Container>
        <H3>Sign Up</H3>
        <P>Join our newsletter to be notified of when pre-release tickets for our first ever world tour go on sale.</P>
        <Form handleSuccess={handleSuccess} />
    </Container>
)

const Success = () => (
    <SuccessContainer>
        <Happy />
        <H4>Yay! We're so excited!</H4>
        <P>We hope you are too. In the meantime you can follow us on social media to keep up to do date:</P>
        <Socials>
            <Twitter />
            <Linkedin />
            <Github />
        </Socials>
    </SuccessContainer>
)

const ModalInner = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSuccess = () => {
        setShowSuccess(true);
    }

    return (
        showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
    )
}

export default ModalInner;
