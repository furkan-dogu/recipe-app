import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const MainContainer = styled(Flex)`
    flex-direction: row;
`

export const Card = styled(Flex)`
    flex-direction: column;
    height: 20rem;
    width: 20rem;
    background: ${({ theme }) => theme.colors.navbarBgColor};
    padding: .5rem;
    margin: .7rem;
    border-radius: 3px;
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow: none;
        transition: all 0.3s ease-in;
    }
`

export const Image = styled.img`
    height: 10rem;
    border-radius: 10px;
`

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.mainColor};
    border: none;
    outline: none;
    padding: .7rem;
    margin: .5rem;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        opacity: .6;
    }
`

export const Header = styled.h1`
    font-size: 1.5rem;
    text-align: center;
`