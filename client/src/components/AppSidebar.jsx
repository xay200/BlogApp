import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import logo from '@/assets/images/logo-white.png'
import { FiHome } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { TbBrandBlogger } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import Footer from "./Footer";
import { RouteBlog, RouteCategoryDetails } from "@/helpers/RouteName";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src={logo} width={120} />
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup />
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FiHome />
                        <Link to="">Trang chủ</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BiCategoryAlt />
                        <Link to={RouteCategoryDetails}>Danh mục</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <TbBrandBlogger />
                        <Link to={RouteBlog}>Blog</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FaRegCommentDots />
                        <Link to="">Bình luận</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FaRegUser />
                        <Link to="">Người dùng</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>            
        <SidebarGroup />


        <SidebarGroup />
         <SidebarGroupLabel>
            Danh mục
         </SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <GoDot />
                        <Link to="">Category item</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>              
            </SidebarMenu>            
        <SidebarGroup />
      </SidebarContent>
      
    </Sidebar>
  )
}

export default AppSidebar