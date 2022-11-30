import React, {FC} from 'react'
import {IUser} from '../../types'
import {Link} from 'react-router-dom'
import {routerHelper} from '../../helpers/routerHelper'

import './index.scss'

interface UserItemProps {
  user: IUser,
}

const UserItem: FC<UserItemProps> = ({user}) => {

  return (
    <Link to={`${routerHelper.user_detail_page_path}/${user.id}`} className="user-item card">
      <div className="user-item__wrapper">
        <div className="user-item__name">{user.name}</div>
        <div className="user-item__username">{user.username}</div>
      </div>
    </Link>
  )
}

export default UserItem
