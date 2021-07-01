import React from 'react';

import appleSvg from '../../assets/apple.svg';
import googleSvg from '../../assets/google.svg';
import SignInSocialButton from '../../components/SignInSocialButton';

import { 
  Container,
  Header,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';

function SignIn() {
  return (
    <Container>
      <Header>
        <Title>
          Controle suas {'\n'}
          finanças de forma {'\n'}
          muito Simples {'\n'}
        </Title>
        <SignInTitle>
          Faça seu login com
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com google"
            svg={googleSvg}
          />
          <SignInSocialButton
            title="Entrar com apple"
            svg={appleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;