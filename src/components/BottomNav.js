import * as React from "react";
import "./LeftNav.css";
// core components
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// icons
import { AddCircleOutline } from "@mui/icons-material";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// contexts
import { useMembersContext } from "../contexts/MembersContext";
import Typography from "@mui/material/Typography";

export default function LabelBottomNavigation({id}) {
  const { nav_value, changeNavValue,getMembersId } = useMembersContext();

  const handleEditButton = () => {
    getMembersId(id);
    changeNavValue("EditMembersEntry");
 };

  const handleChange = (event, newValue) => {
    changeNavValue(newValue);
  };

  return (
    <nav className="leftNav">
      <div className="bottomNavContainer">
        <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
          <img
            src="https://static.wixstatic.com/media/36fcbd_820a3328216b4779b4b33d7e93e94692~mv2.png/v1/fill/w_476,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%84%E0%B8%AD%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B9-02.png"
            alt="Mabueang"
            height="30"
          />
        </Typography>

        <BottomNavigation
          showLabels
          value={nav_value}
          onChange={handleChange}
          sx={{ backgroundColor: "rgb(92,117,117)" }}
        >
          <BottomNavigationAction
            label="สมาชิก"
            value="MembersList"
            icon={<ContactPageOutlinedIcon />}
            style={{ color: "RGB(227,220,194)" }}
          />
        </BottomNavigation>
        <BottomNavigation
          showLabels
          value={nav_value}
          onChange={handleChange}
          sx={{ backgroundColor: "rgb(92,117,117)" }}
        >
        <BottomNavigationAction
            label="เพิ่มสมาชิก"
            value="AddMembers"
            icon={<AddCircleOutline />}
            style={{ color: "RGB(227,220,194)" }}
          />
        </BottomNavigation>

        <BottomNavigation
          showLabels
          onChange={handleEditButton}
          sx={{ backgroundColor: "rgb(92,117,117)" }}
        >
        <BottomNavigationAction
            label="ออก"
            icon={<LogoutOutlinedIcon />}
            style={{ color: "RGB(227,220,194)" }}
          />
        </BottomNavigation>
      </div>
    </nav>
  );
}
