import React from 'react'
import { createAvatarComponent } from 'react-avatar'

const body = () => {
    const appRouter = createBrowserRouter(
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/login",
        }
    )
  return (
    <div>body</div>
  )
}

export default body