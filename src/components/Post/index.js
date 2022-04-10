import * as React from 'react'
import { Link } from 'gatsby'

import { PostContainer_, ShareContainer_ } from './styles'

/**
 *  Post Data Type
 *
 *  @typedef  {Object} PostData
 *  @property {string} title
 *  @property {string} summary
 *  @property {string} date
 *  @property {string} content
 *  @property {string} path
 *  @property {number} timeToRead
 *
 */

/**
 *  Post PropTypes
 *
 *  @typedef  {Object} PropType
 *  @property {boolean} isFull
 *  @property {PostData} data
 *
 */

/**
 * @param {PropType} props
 */
const Post = ({ data, isFull = true, children }) => {
  const date = new Date(data.date).toLocaleDateString('fa-IR')
  const { timeToRead, path } = data
  const title = data.title
  const postLink = 'https://01.mojtabast.com' + path
  const share = {
    twitter: `https://twitter.com/intent/tweet?url=${postLink}&text=${title}&via=mojtabast_fa`,
    facebook: `https://www.facebook.com/sharer.php?u=${postLink}`,
    telegram: `tg://msg_url?url=${postLink}&text=${title}`,
  }

  return (
    <PostContainer_>
      <Link to={path}>
        {isFull ? (
          <h1 class="post-title">{title}</h1>
        ) : (
          <h2 class="post-title">{title}</h2>
        )}
      </Link>
      <div className="info">
        {timeToRead} دقیقه مطالعه - منتشر شده در {date}
      </div>
      {isFull ? (
        <React.Fragment>
          {children}
          <ShareContainer_>
            <i>
              اگر این پست براتون مفید بوده می‌تونید با دوستانتون هم‌رسانی کنید:
            </i>
            <a href={share.twitter} target="_blank" rel="noopener noreferrer">
              توییتر
            </a>
            <a href={share.telegram} target="_blank" rel="noopener noreferrer">
              تلگرام
            </a>
            <a href={share.facebook} target="_blank" rel="noopener noreferrer">
              فیسبوک
            </a>
          </ShareContainer_>
        </React.Fragment>
      ) : (
        <p>{data.summary}</p>
      )}
    </PostContainer_>
  )
}

export default Post
