import React, {useEffect} from 'react'
import UserItem from '../../components/UserItem'
import users from '../../store/users'
import {observer} from 'mobx-react-lite'

import './index.scss'

const Users = observer(() => {

  useEffect(() => {
    (async () => {
      await users.getUsers()
    })()
  }, [])

  return (
    <div className="users">
      <div className="users__container container">
        <div className="users__wrapper">
          {
            users.usersData.length ? users.usersData.map(
              (user) => <UserItem user={user} key={user.id} />
            ) : (
              <div className="user-item__loading">
              Loading...
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
})

export default Users
