import styled from "styled-components";

export const FooterContent = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: whitesmoke;
  width: 100%;
  margin: auto 0 0 0;
  min-height: 3rem;
`;

export const FooterText = styled.div`
  text-transform: uppercase;
  > a {
    padding: 0.25rem;
    text-decoration: underline rgba(0, 0, 0, 0);
    transition: text-decoration-color 400ms ease-in-out;
  }
  > a:hover {
    text-decoration: underline rgba(0, 0, 0, 1);
  }
`;
