import { CgProfile } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPersonStandingDress } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";

const sidebarData = [
  {
    icon: CgProfile,
    content: 'My Profile'
  },
  {
    icon: RiGroupLine,
    content: 'New Groups'
  },
  {
    icon: FiUser,
    content: 'Contact'
  },
  {
    icon: MdOutlineLocalPhone,
    content: 'Calls'
  },
  {
    icon: BsPersonStandingDress,
    content: 'People Nearby'
  },
  {
    icon: CiBookmark,
    content: 'Saved Messages'
  },
  {
    icon: IoSettingsOutline,
    content: 'Settings'
  },
  {
    icon: FiUserPlus,
    content: 'Invite Friends'
  },
  {
    icon: GoQuestion,
    content: 'Telegram Features'
  },
];

export default sidebarData;
