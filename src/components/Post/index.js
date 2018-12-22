// @flow
import * as React from "react";
import { Link } from "gatsby"

import {PostContainer_} from './styles';

type PostType = {
  isFull: boolean,
  data: {
    title: string,
    summary: string,
    date: string,
    content: string,
    path: string,
    timeToRead: number
  },
  children?: React.Node
};

const Post = ({data, isFull = true, children}: PostType) => {

  const date = new Date(data.date).toLocaleDateString('fa-IR');
  const {timeToRead, path} = data;

  return <PostContainer_>
    <Link to={path}>
      <h2>{data.title}</h2>
    </Link>
    <div className="info">
    {timeToRead} دقیقه مطالعه
    -
      منتشر شده در {date}
    </div>
    { isFull ? children : <p>{data.summary}</p> }
  </PostContainer_>

}

export default Post;
