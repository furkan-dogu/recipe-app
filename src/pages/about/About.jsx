import { AboutContainer, InfoContainer, StyledImage } from './About.style';
import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Frontend Developer <span>Furkan Doğu</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Furkan</h2>
        <h3>I’m currently learning Frontend Development Languages.</h3>
        <h4>
          I've already known JavaScript and React.
        </h4>
        <h2>
          <a href="mailto:furkandogu2018@gmail.com">Send email</a> :
          furkandogu2018@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
