import React, {FC, useEffect} from 'react'
import users from '../../store/users'
import posts from '../../store/posts'
import {useParams} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import PostItem from '../../components/PostItem'
import {IPost} from '../../types'

import './index.scss'

const UserDetails:FC = observer(() => {

  const {id} = useParams()
  const user: any = users.userDetails
  const userPosts: any = posts.userPosts

  useEffect(() => {
    (async () => {
      await users.getUserDetails(id ? id : '')
      await posts.getUserPost(id ? id : '')
    })()
  }, [])

  return (
    user.phone ? (
    <div className="user-details">
      <div className="user-details__container container">
        <div className="user-details__header">
          <h1 className="user-details__header-item">{user.name}</h1>
          <div className="user-details__header-item">{user.username}</div>
          <div className="user-details__header-item"><strong>Email: </strong> {user.email}</div>
          <div className="user-details__header-item"><strong>Phone: </strong> {user.phone}</div>
          <div className="user-details__header-item"><strong>Website: </strong>{user.website}</div>
          <hr/>
          <div className="user-details__header-item"><strong>City: </strong>{user.address.city}</div>
          <div className="user-details__header-item"><strong>Street: </strong>{user.address.street}</div>
          <div className="user-details__header-item"><strong>Suite: </strong>{user.address.suite}</div>
          <div className="user-details__header-item"><strong>Zipcode: </strong>{user.address.zipcode}</div>
        </div>
        <div className="user-details__body">
          <h2 className="user-details__posts">Posts</h2>
          {
            userPosts.length ? userPosts.map((post: IPost) => <PostItem key={post.id} post={post}/>
            ) : ''
          }
        </div>
      </div>
    </div>
    ) : (<div className="user-details__loading">Loading...</div>)
  )
})

export default UserDetails
