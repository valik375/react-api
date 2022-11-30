import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import {api_path} from '../helpers/apiHepler'
import {IUser} from '../types'

class Users {
  usersData: IUser[] = []
  userDetails: IUser | {} = {}

  constructor() {
    makeAutoObservable(this)
  }

  async getUsers() {
    await axios.get(`${api_path}/users`).then(({data}) => {
      this.usersData = data
    })
  }

  async getUserDetails(id: string) {
    await axios.get(`${api_path}/users/${id}`).then(({data}) => {
      this.userDetails = data
    })
  }

}

export default new Users()