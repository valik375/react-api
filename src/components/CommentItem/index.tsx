import React, {FC} from 'react'
import {IComment} from '../../types'

import './index.scss'

interface CommentItem {
  comment: IComment
}

const CommentItem:FC<CommentItem> = ({comment}) => {
  return (
    <div className="comment-item card">
      <div className="comment-item__wrapper">
        <div className="comment-item__name">{comment.name}</div>
        <div className="comment-item__email">{comment.email}</div>
        <div className="comment-item__body">{comment.body}</div>
      </div>
    </div>
  )
}

export default CommentItem
