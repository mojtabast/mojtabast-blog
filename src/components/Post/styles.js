import styled from 'styled-components'

const PostContainer_ = styled.section`
  margin: 0 auto 42px auto;
  max-width: var(--container-width);

  .post-title {
    margin: 0;
  }

  & a {
    color: #dc2a2a;
    display: inline-block;

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
    margin: 0.5rem 0 1rem 0;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin-bottom: 32px;
    
    li {
      margin-bottom: 16px;
    }
  }
`

const ShareContainer_ = styled.div`
  margin-top: 42px;

  & > a {
    margin-right: 8px;
  }
`
export { PostContainer_, ShareContainer_ }
