import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>Profile</Link>,
      key: "profile",
      icon: <ProfileOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/user-management`}>User Management</Link>,
      key: "user-management",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/tutor-management`}>Tutor Management</Link>,
      key: "tutor-management",
      icon: <TableOutlined />,
    },
    {
      label: (
        <Link href={`/${role}/booking-management`}>Booking Management</Link>
      ),
      key: "booking-management",
      icon: <TableOutlined />,
    },
    {
      label: "Content Management",
      key: "content-management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/content-management/blogs`}>Blogs</Link>,
          key: `/${role}/content-management/blogs`,
        },
        {
          label: <Link href={`/${role}/content-management/FAQ`}>FAQ</Link>,
          key: `/${role}/content-management/FAQ`,
        },
        {
          label: (
            <Link href={`/${role}/content-management/feedbacks`}>
              Feedbacks
            </Link>
          ),
          key: `/${role}/content-management/feedback`,
        },
        {
          label: (
            <Link href={`/${role}/content-management/latest-news`}>
              Latest News
            </Link>
          ),
          key: `/${role}/content-management/latest-news`,
        },
        {
          label: (
            <Link href={`/${role}/content-management/upcoming-services`}>
              Upcoming Services
            </Link>
          ),
          key: `/${role}/content-management/upcoming-services`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-admin`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/my_bookings`}>My Bookings</Link>,
      icon: <TableOutlined />,
      key: `/${role}/my_bookings`,
    },
    {
      label: <Link href={`/${role}/notifications`}>Notifications</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/notifications`,
    },
    {
      label: <Link href={`/${role}/feedback`}>Feedback</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/feedback`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
