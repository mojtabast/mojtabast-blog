import styled from 'styled-components'

const PostContainer_ = styled.section`
  margin: 0 auto 2rem auto;
  max-width: var(--container-width);

  & a {
    color: #dc2a2a;

    & > h2 {
      margin: 0;
      color: #dc2a2a;
    }

    &:hover,
    & h2:hover {
      color: #aa0000;
    }
  }

  .info {
    font-size: 0.9rem;
    color: #555;
    margin: 0.25rem 0;
  }

  img {
    max-width: 100%;
  }
`

const ShareContainer_ = styled.div`
  margin-top: 1rem;

  & > a {
    margin-right: 8px;
  }
`
export { PostContainer_, ShareContainer_ }
