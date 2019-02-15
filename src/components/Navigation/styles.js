import styled from "styled-components";

const NavContainer_ = styled.nav`

  margin: auto;
  max-width: var(--container-width);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 2rem;

  .logoName{

    font-weight: bold;
  }

  & ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;

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

export {NavContainer_}
