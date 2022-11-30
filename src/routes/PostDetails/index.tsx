import React, {FC, useEffect} from 'react'
import posts from '../../store/posts'
import {useParams} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import CommentItem from '../../components/CommentItem'
import {IComment} from '../../types'

import './index.scss'

const PostDetails:FC = observer(() => {

  const {id} = useParams()
  const postDetails: any = posts.postDetails
  const postComments: any = posts.postComments

  useEffect(() => {
    (async () => {
      await posts.getPostDetails(id ? id : '')
      await posts.getPostComments(id ? id : '')
    })()
  }, [])

  return (
    <div className="post-details">
      <div className="post-details__container container">
        <div className="post-details__post">
          <div className="post-details__title">{postDetails.title}</div>
          <div className="post-details__text">{postDetails.body}</div>
        </div>

        <div className="post-details__comments">
          <h2 className="post-details__comments-title">Comments</h2>
          <div className="post-details__comments-wrapper">
            {
              postComments.length ? postComments.map((comment: IComment) => <CommentItem key={comment.id} comment={comment}/>
              ) : <div className="post-details__loading">Loading...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
})

export default PostDetails
