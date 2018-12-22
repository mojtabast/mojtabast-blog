// @flow
import React from "react";

import Post from '../Post'
import {ListContainer_} from './styles';

type PropType = {
  edges: *
};

const PostsList = ({edges} : PropType) => {

  return <ListContainer_>
    {
      edges.map(edge =>
        <Post
          key={edge.node.id}
          isFull={false}
          data={{...edge.node.frontmatter, timeToRead: edge.node.timeToRead}}
        />
      )
    }
  </ListContainer_>
}

export default PostsList;
