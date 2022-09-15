import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

import {
  RiInstallFill,
  RiInstallLine,
  RiUninstallFill,
  RiBarChart2Fill,
  RiBarChart2Line,
  RiUser3Fill,
  RiDashboardLine,
  RiUserLine,
  RiVidiconLine,
  RiAlertLine,
  RiFileList3Line,
  RiInformationLine,
  RiQuestionnaireLine,
  RiNotification2Line,
  RiUserAddLine,
  RiAppleFill,
  RiAndroidFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMenuLine,
} from "react-icons/ri";

function App() {
  // const [dashboard, setDashboard] = useState({});
  const [dashboardData, setDashboardData] = useState([]);
  const [statistics, setStatistics] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [fromDate, setFromDate] = useState("2022-06-01");
  const [toDate, setToDate] = useState("2022-07-01");

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // fetch(
    //   `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${fromDate}&todate=${toDate}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDashboard(data.data);
    //   });

    fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${fromDate}&todate=${toDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDashboardData(data.data.data);
      });

    fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${fromDate}&todate=${toDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        setStatistics(data.data);
      });
  }, [fromDate, toDate]);

  return (
    <div className="bg">
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <button className="ham-menu" onClick={handleNav}>
            {menuOpen ? (
              <RiArrowLeftSLine size={35} className="ham-menu-icon" />
            ) : (
              <RiMenuLine size={35} className="ham-menu-icon" />
            )}
          </button>
          <img src={logo} alt="logo" className="logo-image" />
          <h1>WOW</h1>
        </div>
        <div
          style={
            !menuOpen
              ? { display: "none" }
              : {
                  display: "block",
                  position: "absolute",
                  top: "0",
                  backgroundColor: "#161d30",
                  paddingRight: "20px",
                  borderRadius: "0 0 5px 0",
                }
          }
        >
          <div className="mobile-nav-header">
            <button className="ham-menu" onClick={handleNav}>
              {menuOpen ? (
                <RiArrowLeftSLine size={35} className="ham-menu-icon" />
              ) : (
                <RiMenuLine size={35} className="ham-menu-icon" />
              )}
            </button>
            <img src={logo} alt="logo" className="logo-image" />
            <h1>WOW</h1>
          </div>
          <ul>
            <li className="active-li">
              <RiDashboardLine />
              Dashboard
            </li>
            <li>
              <RiUserLine />
              WOW Users
            </li>
            <li>
              <RiVidiconLine />
              Video Clips
            </li>
            <li>
              <RiAlertLine />
              Reported Content
            </li>
            <li>
              <RiFileList3Line />
              Category
            </li>
            <li>
              <RiInformationLine />
              Info Page
            </li>
            <li>
              <RiQuestionnaireLine />
              FAQ
            </li>
            <li>
              <RiNotification2Line />
              Push Notification
            </li>
            <li>
              <RiUserAddLine />
              Internal User
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo-image" />
          <h1>WOW</h1>
        </div>
        <ul className="sidebar-list">
          <li className="active-li">
            <RiDashboardLine />
            Dashboard
          </li>
          <li>
            <RiUserLine />
            WOW Users
          </li>
          <li>
            <RiVidiconLine />
            Video Clips
          </li>
          <li>
            <RiAlertLine />
            Reported Content
          </li>
          <li>
            <RiFileList3Line />
            Category
          </li>
          <li>
            <RiInformationLine />
            Info Page
          </li>
          <li>
            <RiQuestionnaireLine />
            FAQ
          </li>
          <li>
            <RiNotification2Line />
            Push Notification
          </li>
          <li>
            <RiUserAddLine />
            Internal User
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="stats-container">
          <div className="stats">
            <div className="stat-icon">
              <RiInstallFill size={25} />
            </div>
            <div>
              <p>{statistics.totalInstall}</p>
              <p>App Installed</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-icon">
              <RiInstallLine size={25} />
            </div>
            <div>
              {statistics.activeinstall}
              <p>Active Installs</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-icon">
              <RiBarChart2Fill size={25} />
            </div>
            <div>
              {statistics.churn}%<p>Churn Rate</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-icon">
              <RiUninstallFill size={25} />
            </div>
            <div>
              {statistics.totaluninstall}
              <p>App Un-Installed</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-icon">
              <RiUser3Fill size={25} />
            </div>
            <div>
              {statistics.aliveappusers}
              <p>Active Apps Users</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat-icon">
              <RiBarChart2Line size={25} />
            </div>
            <div>
              {statistics.alivechurn}%<p>Alive Churn Rate</p>
            </div>
          </div>
        </div>
        <div className="results-container">
          <div className="results-header">
            <div className="date-container">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={(e) => {
                  setFromDate(e);
                }}
              />
            </div>
            <div className="date-container">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={(e) => {
                  setToDate(e);
                }}
              />
            </div>
          </div>
          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day Installs</th>
                  <th>Platform</th>
                  <th>Day Uninstalls</th>
                  <th>Platform</th>
                  <th>Churn Rate</th>
                  <th>Churn Platform</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.map((item, i) => (
                  <tr key={i}>
                    <td className="date">{item.created_At.substr(0, 10)}</td>
                    <td>{item.totalinstall}</td>
                    <td className="platform">
                      <p className="platform-text">
                        <RiAndroidFill />
                        {item.android_install}
                      </p>
                      <p className="platform-text">
                        <RiAppleFill />
                        {item.ios_install}
                      </p>
                    </td>
                    <td>{item.totaluninstall}</td>
                    <td className="platform">
                      <p className="platform-text">
                        <RiAndroidFill />
                        {item.android_uninstall}
                      </p>
                      <p className="platform-text">
                        <RiAppleFill />
                        {item.ios_uninstall}
                      </p>
                    </td>
                    <td>
                      {parseFloat(
                        (item.totaluninstall / statistics.totalInstall) * 100
                      ).toFixed(2)}{" "}
                      %
                    </td>
                    <td className="platform">
                      <p className="platform-text">
                        <RiAndroidFill />
                        {parseFloat(
                          (item.android_uninstall / statistics.totalInstall) *
                            100
                        ).toFixed(2)}{" "}
                        %
                      </p>
                      <p className="platform-text">
                        <RiAppleFill />
                        {parseFloat(
                          (item.ios_uninstall / statistics.totalInstall) * 100
                        ).toFixed(2)}{" "}
                        %
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="results-footer">
            <div className="pagination">
              <RiArrowLeftSLine />
              <p className="pagination-page active-page">1</p>
              <p className="pagination-page">2</p>
              <p className="pagination-page">3</p>
              <p className="pagination-page">4</p>
              <RiArrowRightSLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
