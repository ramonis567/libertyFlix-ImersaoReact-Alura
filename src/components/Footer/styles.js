import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  display: flex;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Space = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: 65px;
  width: 2px;
  background: yellow;
`;
