// @flow
import * as React from "react";
import { Link } from "gatsby"

import {PostContainer_, ShareContainer_} from './styles';

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
  const title = data.title;
  const postLink = "https://01.mojtabast.com"+path;
  const share = {

    twitter: `https://twitter.com/intent/tweet?url=${postLink}&text=${title}&via=mojtabast_fa`,
    facebook: `https://www.facebook.com/sharer.php?u=${postLink}`,
    telegram: `tg://msg_url?url=${postLink}&text=${title}`
  }

  return <PostContainer_>
    <Link to={path}>
      <h2>{title}</h2>
    </Link>
    <div className="info">
    {timeToRead} دقیقه مطالعه
    -
      منتشر شده در {date}
    </div>
    { isFull ? <React.Fragment>
      {children}
      <ShareContainer_>
        <i>اگر این پست براتون مفید بوده می‌تونید با دوستانتون هم‌رسانی کنید:</i>
        <a href={share.twitter} target="_blank" rel="noopener noreferrer">توییتر</a>
        <a href={share.telegram} target="_blank" rel="noopener noreferrer">تلگرام</a>
        <a href={share.facebook} target="_blank" rel="noopener noreferrer">فیسبوک</a>
      </ShareContainer_>
    </React.Fragment> : <p>{data.summary}</p> }

  </PostContainer_>

}

export default Post;
