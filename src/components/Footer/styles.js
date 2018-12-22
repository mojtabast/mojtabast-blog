import styled from "styled-components";

const FooterContainer_ = styled.footer`

  max-width: 560px;
  padding: 0.5rem;
  border-top: 1px solid #eee;
  margin: auto;
  margin-top: 2rem;


  & ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > li{

      & > a{

        display: block;
        padding: 0.5rem;
        color: #777;

        &:hover{

          color: #DC2A2A;
        }
      }
    }
  }
`;

export {FooterContainer_}
