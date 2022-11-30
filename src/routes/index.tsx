import {routerHelper} from '../helpers/routerHelper'
import Users from './Users'
import UserDetails from './UserDetails'
import PostDetails from './PostDetails'

const routes = [
  {
    name: routerHelper.users_page_name,
    path: routerHelper.users_page_path,
    element: <Users/>,
  },
  {
    name: routerHelper.user_detail_page_name,
    path: `${routerHelper.user_detail_page_path}/:id`,
    element: <UserDetails/>,
  },
  {
    name: routerHelper.post_details_page_name,
    path: `${routerHelper.post_details_page_path}/:id`,
    element: <PostDetails/>,
  },
]

export default routes