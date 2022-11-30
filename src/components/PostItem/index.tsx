import React, {FC} from 'react'
import {IPost} from '../../types'
import {Link} from 'react-router-dom'
import {routerHelper} from '../../helpers/routerHelper'

import './index.scss'

interface PostItemProps {
  post: IPost
}

const PostItem:FC<PostItemProps> = ({post}) => {
  return (
    <Link to={`${routerHelper.post_details_page_path}/${post.id}`} className="post-item card">
      <div className="post-item__wrapper">
        <div className="post-item__title">{post.title}</div>
        <div className="post-item__body">{post.body}</div>
      </div>
    </Link>
  )
}

export default PostItem
