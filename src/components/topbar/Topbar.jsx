import React from "react";
import "./topbar.css";
import { NotificationsNone, Language  } from "@material-ui/icons";
import MessageIcon from '@material-ui/icons/Message';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BRImo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MessageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <PowerSettingsNewIcon />
          </div>
          
        </div>
      </div>
    </div>
  );
}
