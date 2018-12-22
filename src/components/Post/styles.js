import styled from "styled-components";

const PostContainer_ = styled.section`

  margin: 0 auto 2rem auto;
  max-width: 560px;

  & > a{
    & > h2{

      margin: 0;
      color: #DC2A2A;

      &:hover{

        color: #AA0000;
      }
    }
  }

  .info{

    font-size: 0.9rem;
    color: #555;
    margin: 0.25rem 0;
  }
`;

export {PostContainer_}
