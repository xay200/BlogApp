import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout' 
import { RouteAddCategory, RouteBlog, RouteBlogAdd, RouteBlogEdit, RouteCategoryDetails, RouteEditCategory, RouteIndex, RouteProfile, RouteSignIn, RouteSignUp } from './helpers/RouteName'
import Index from './pages/Index' 
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import AddCategory from './pages/Category/AddCategory'
import CategoryDetails from './pages/Category/CategoryDetails'
import EditCategory from './pages/Category/EditCategory'
import AddBlog from './pages/Blog/AddBlog'
import BlogDetails from './pages/Blog/BlogDetails'
import EditBlog from './pages/Blog/EditBlog'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={RouteIndex} element={<Layout />}>
            <Route index element={<Index />} />

            <Route path={RouteProfile} element={<Profile />} />

            <Route path={RouteAddCategory} element={<AddCategory />} />
            <Route path={RouteCategoryDetails} element={<CategoryDetails />} />
            <Route path={RouteEditCategory()} element={<EditCategory />} />

            <Route path={RouteBlogAdd} element={<AddBlog />} />
            <Route path={RouteBlog} element={<BlogDetails />} />
            <Route path={RouteBlogEdit()} element={<EditBlog />} />
            
          </Route>

          <Route path={RouteSignIn} element={<SignIn/>} />
          <Route path={RouteSignUp} element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App