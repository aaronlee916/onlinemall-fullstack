'use client'

import { useDispatch } from "react-redux";
import { switchIoT, switchMisc, switchPC, switchPhone, switchSupport } from "../store/navigationReducer";
import "./NavBar.css";
import RegLog from "./RegLog";

export default function NavBar() {
  const dispatch=useDispatch()
  return (
    <div className="NavBarWrapper">
      <div className="content phone" onClick={()=>dispatch(switchPhone())}>手机</div>
      <div className="content separator">|</div>
      <div className="content pc" onClick={()=>dispatch(switchPC())}>电脑平板</div>
      <div className="content separator">|</div>
      <div className="content misc" onClick={()=>dispatch(switchMisc())}>智能周边</div>
      <div className="content separator">|</div>
      <div className="content IoT" onClick={()=>dispatch(switchIoT())}>生态链产品</div>
      <div className="content separator">|</div>
      <div className="content support" onClick={()=>dispatch(switchSupport())}>技术支持</div>
      <div className="RegLog">
        <RegLog />
      </div>
    </div>
  );
}
