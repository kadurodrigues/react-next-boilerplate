import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and React Avancado written beside"
    ></S.Logo>
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReatJS, Next JS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A programmer sitting in front of a computer"
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
