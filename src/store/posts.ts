import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import {api_path} from '../helpers/apiHepler'
import {IComment, IPost} from '../types'

class Posts {
  userPosts: IPost[] = []
  postDetails: IPost | {} = {}
  postComments: IComment[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async getUserPost(id: string) {
    await axios.get(`${api_path}/posts/?userId=${id}`).then(({data}) => {
      this.userPosts = data
    })
  }

  async getPostDetails(id: string) {
    await axios.get(`${api_path}/posts/${id}`).then(({data}) => {
      this.postDetails = data
    })
  }

  async getPostComments(id: string) {
    await axios.get(`${api_path}/comments?postId=${id}`).then(({data}) => {
      this.postComments = data
    })
  }

}

export default new Posts()