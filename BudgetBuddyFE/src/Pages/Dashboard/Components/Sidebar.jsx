import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/Sidebar.css";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <>

      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="sidebar-header d-flex align-items-center">
          <button
            className="btn close-btn me-2 d-lg-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <h3 className="text-center mb-0">BudgetBuddy</h3>
        </div>

        <nav className="sidebar-nav">
          <Link
            to="/dashboard"
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.75 3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V9.75C3.75 10.1478 3.90804 10.5294 4.18934 10.8107C4.47064 11.092 4.85218 11.25 5.25 11.25H9.75C10.1478 11.25 10.5294 11.092 10.8107 10.8107C11.092 10.5294 11.25 10.1478 11.25 9.75V5.25C11.25 4.85218 11.092 4.47064 10.8107 4.18934C10.5294 3.90804 10.1478 3.75 9.75 3.75ZM9.75 9.75H5.25V5.25H9.75V9.75ZM18.75 3.75H14.25C13.8522 3.75 13.4706 3.90804 13.1893 4.18934C12.908 4.47064 12.75 4.85218 12.75 5.25V9.75C12.75 10.1478 12.908 10.5294 13.1893 10.8107C13.4706 11.092 13.8522 11.25 14.25 11.25H18.75C19.1478 11.25 19.5294 11.092 19.8107 10.8107C20.092 10.5294 20.25 10.1478 20.25 9.75V5.25C20.25 4.85218 20.092 4.47064 19.8107 4.18934C19.5294 3.90804 19.1478 3.75 18.75 3.75ZM18.75 9.75H14.25V5.25H18.75V9.75ZM9.75 12.75H5.25C4.85218 12.75 4.47064 12.908 4.18934 13.1893C3.90804 13.4706 3.75 13.8522 3.75 14.25V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H9.75C10.1478 20.25 10.5294 20.092 10.8107 19.8107C11.092 19.5294 11.25 19.1478 11.25 18.75V14.25C11.25 13.8522 11.092 13.4706 10.8107 13.1893C10.5294 12.908 10.1478 12.75 9.75 12.75ZM9.75 18.75H5.25V14.25H9.75V18.75ZM18.75 12.75H14.25C13.8522 12.75 13.4706 12.908 13.1893 13.1893C12.908 13.4706 12.75 13.8522 12.75 14.25V18.75C12.75 19.1478 12.908 19.5294 13.1893 19.8107C13.4706 20.092 13.8522 20.25 14.25 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V14.25C20.25 13.8522 20.092 13.4706 19.8107 13.1893C19.5294 12.908 19.1478 12.75 18.75 12.75ZM18.75 18.75H14.25V14.25H18.75V18.75Z"
                fill="white"
              />
            </svg>
            <span>Dashboard</span>
          </Link>

          <Link
            to="/dashboard/budgets"
            className={`nav-link ${isActive("/dashboard/budgets") ? "active" : ""}`}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 10.875C18 11.0975 17.934 11.315 17.8104 11.5C17.6868 11.685 17.5111 11.8292 17.3055 11.9144C17.1 11.9995 16.8738 12.0218 16.6555 11.9784C16.4373 11.935 16.2368 11.8278 16.0795 11.6705C15.9222 11.5132 15.815 11.3127 15.7716 11.0945C15.7282 10.8762 15.7505 10.65 15.8356 10.4445C15.9208 10.2389 16.065 10.0632 16.25 9.9396C16.435 9.81598 16.6525 9.75 16.875 9.75C17.1734 9.75 17.4595 9.86853 17.6705 10.0795C17.8815 10.2905 18 10.5766 18 10.875ZM14.25 6H10.5C10.3011 6 10.1103 6.07902 9.96967 6.21967C9.82902 6.36032 9.75 6.55109 9.75 6.75C9.75 6.94891 9.82902 7.13968 9.96967 7.28033C10.1103 7.42098 10.3011 7.5 10.5 7.5H14.25C14.4489 7.5 14.6397 7.42098 14.7803 7.28033C14.921 7.13968 15 6.94891 15 6.75C15 6.55109 14.921 6.36032 14.7803 6.21967C14.6397 6.07902 14.4489 6 14.25 6ZM23.25 10.5V13.5C23.25 14.0967 23.0129 14.669 22.591 15.091C22.169 15.5129 21.5967 15.75 21 15.75H20.7788L19.2591 20.0044C19.155 20.2958 18.9634 20.5479 18.7105 20.7261C18.4575 20.9044 18.1557 21 17.8463 21H16.6538C16.3443 21 16.0425 20.9044 15.7895 20.7261C15.5366 20.5479 15.345 20.2958 15.2409 20.0044L15.0609 19.5H9.68906L9.50906 20.0044C9.40502 20.2958 9.2134 20.5479 8.96047 20.7261C8.70754 20.9044 8.40568 21 8.09625 21H6.90375C6.59433 21 6.29246 20.9044 6.03953 20.7261C5.7866 20.5479 5.59498 20.2958 5.49094 20.0044L4.3125 16.7081C3.19142 15.4393 2.48945 13.8553 2.3025 12.1725C2.06046 12.2996 1.85777 12.4905 1.71633 12.7245C1.57489 12.9584 1.50009 13.2266 1.5 13.5C1.5 13.6989 1.42098 13.8897 1.28033 14.0303C1.13968 14.171 0.948912 14.25 0.75 14.25C0.551088 14.25 0.360322 14.171 0.21967 14.0303C0.0790176 13.8897 0 13.6989 0 13.5C0.00114598 12.8312 0.225771 12.1819 0.638188 11.6553C1.05061 11.1287 1.62716 10.7551 2.27625 10.5938C2.4438 8.52687 3.38252 6.59859 4.90601 5.1918C6.42951 3.78502 8.42634 3.00263 10.5 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75C21 3.94891 20.921 4.13968 20.7803 4.28033C20.6397 4.42098 20.4489 4.5 20.25 4.5H18.2447C19.4894 5.37328 20.4683 6.57378 21.0731 7.96875C21.1134 8.0625 21.1528 8.15625 21.1903 8.25C21.7535 8.2978 22.278 8.5558 22.6596 8.97268C23.0413 9.38957 23.252 9.93482 23.25 10.5ZM21.75 10.5C21.75 10.3011 21.671 10.1103 21.5303 9.96967C21.3897 9.82902 21.1989 9.75 21 9.75H20.6569C20.4971 9.75017 20.3415 9.69934 20.2127 9.6049C20.0839 9.51047 19.9885 9.37738 19.9406 9.225C19.5109 7.85375 18.6542 6.65571 17.4956 5.8057C16.337 4.95569 14.937 4.49821 13.5 4.5H10.5C9.19005 4.49993 7.90838 4.88103 6.81128 5.59682C5.71419 6.31261 4.84907 7.33217 4.32143 8.53115C3.79379 9.73014 3.62643 11.0568 3.83975 12.3492C4.05308 13.6417 4.63787 14.8442 5.52281 15.81C5.59048 15.8836 5.64276 15.97 5.67656 16.0641L6.90375 19.5H8.09625L8.45438 18.4978C8.50637 18.3522 8.60211 18.2262 8.72848 18.1371C8.85485 18.048 9.00568 18.0001 9.16031 18H15.5897C15.7443 18.0001 15.8951 18.048 16.0215 18.1371C16.1479 18.2262 16.2436 18.3522 16.2956 18.4978L16.6538 19.5H17.8463L19.5441 14.7478C19.5961 14.6022 19.6918 14.4762 19.8182 14.3871C19.9445 14.298 20.0954 14.2501 20.25 14.25H21C21.1989 14.25 21.3897 14.171 21.5303 14.0303C21.671 13.8897 21.75 13.6989 21.75 13.5V10.5Z"
                fill="white"
              />
            </svg>
            <span>Budgets</span>
          </Link>

          <Link
            to="/dashboard/recurring-expenses"
            className={`nav-link ${isActive("/dashboard/recurring-expenses") ? "active" : ""
              }`}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.25 8.39719V7.875C17.25 5.52375 13.7034 3.75 9 3.75C4.29656 3.75 0.75 5.52375 0.75 7.875V11.625C0.75 13.5834 3.21094 15.1397 6.75 15.6056V16.125C6.75 18.4762 10.2966 20.25 15 20.25C19.7034 20.25 23.25 18.4762 23.25 16.125V12.375C23.25 10.4344 20.8669 8.87625 17.25 8.39719ZM21.75 12.375C21.75 13.6144 18.8634 15 15 15C14.6503 15 14.3034 14.9878 13.9613 14.9653C15.9834 14.2284 17.25 13.0312 17.25 11.625V9.91313C20.0503 10.3303 21.75 11.4628 21.75 12.375ZM6.75 14.0859V11.8556C7.49604 11.9528 8.24765 12.0011 9 12C9.75235 12.0011 10.504 11.9528 11.25 11.8556V14.0859C10.5051 14.196 9.75302 14.2508 9 14.25C8.24698 14.2508 7.49493 14.196 6.75 14.0859ZM15.75 10.3059V11.625C15.75 12.4116 14.5866 13.2562 12.75 13.7691V11.5781C13.9603 11.2847 14.985 10.8478 15.75 10.3059ZM9 5.25C12.8634 5.25 15.75 6.63562 15.75 7.875C15.75 9.11438 12.8634 10.5 9 10.5C5.13656 10.5 2.25 9.11438 2.25 7.875C2.25 6.63562 5.13656 5.25 9 5.25ZM2.25 11.625V10.3059C3.015 10.8478 4.03969 11.2847 5.25 11.5781V13.7691C3.41344 13.2562 2.25 12.4116 2.25 11.625ZM8.25 16.125V15.7341C8.49656 15.7434 8.74594 15.75 9 15.75C9.36375 15.75 9.71906 15.7378 10.0678 15.7172C10.4552 15.8559 10.8499 15.9736 11.25 16.0697V18.2691C9.41344 17.7562 8.25 16.9116 8.25 16.125ZM12.75 18.5859V16.35C13.4958 16.4503 14.2475 16.5004 15 16.5C15.7523 16.5011 16.504 16.4528 17.25 16.3556V18.5859C15.758 18.8047 14.242 18.8047 12.75 18.5859ZM18.75 18.2691V16.0781C19.9603 15.7847 20.985 15.3478 21.75 14.8059V16.125C21.75 16.9116 20.5866 17.7562 18.75 18.2691Z"
                fill="white"
              />
            </svg>
            <span>Recurring Expenses</span>
          </Link>

          <div className="divider"></div>

          <Link
            to="/dashboard/settings"
            className={`nav-link ${isActive("/dashboard/settings") ? "active" : ""}`}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.75 8.25002H6.84375C7.00898 8.89533 7.38428 9.4673 7.91048 9.87575C8.43669 10.2842 9.08387 10.5059 9.75 10.5059C10.4161 10.5059 11.0633 10.2842 11.5895 9.87575C12.1157 9.4673 12.491 8.89533 12.6562 8.25002H20.25C20.4489 8.25002 20.6397 8.17101 20.7803 8.03035C20.921 7.8897 21 7.69894 21 7.50002C21 7.30111 20.921 7.11035 20.7803 6.96969C20.6397 6.82904 20.4489 6.75002 20.25 6.75002H12.6562C12.491 6.10471 12.1157 5.53274 11.5895 5.12429C11.0633 4.71584 10.4161 4.49414 9.75 4.49414C9.08387 4.49414 8.43669 4.71584 7.91048 5.12429C7.38428 5.53274 7.00898 6.10471 6.84375 6.75002H3.75C3.55109 6.75002 3.36032 6.82904 3.21967 6.96969C3.07902 7.11035 3 7.30111 3 7.50002C3 7.69894 3.07902 7.8897 3.21967 8.03035C3.36032 8.17101 3.55109 8.25002 3.75 8.25002ZM9.75 6.00002C10.0467 6.00002 10.3367 6.088 10.5834 6.25282C10.83 6.41764 11.0223 6.65191 11.1358 6.926C11.2494 7.20009 11.2791 7.50169 11.2212 7.79266C11.1633 8.08363 11.0204 8.3509 10.8107 8.56068C10.6009 8.77046 10.3336 8.91332 10.0426 8.9712C9.75166 9.02908 9.45006 8.99937 9.17597 8.88584C8.90189 8.77231 8.66762 8.58005 8.5028 8.33338C8.33797 8.0867 8.25 7.7967 8.25 7.50002C8.25 7.1022 8.40804 6.72067 8.68934 6.43936C8.97064 6.15806 9.35218 6.00002 9.75 6.00002ZM20.25 15.75H18.6562C18.491 15.1047 18.1157 14.5327 17.5895 14.1243C17.0633 13.7158 16.4161 13.4941 15.75 13.4941C15.0839 13.4941 14.4367 13.7158 13.9105 14.1243C13.3843 14.5327 13.009 15.1047 12.8438 15.75H3.75C3.55109 15.75 3.36032 15.829 3.21967 15.9697C3.07902 16.1103 3 16.3011 3 16.5C3 16.6989 3.07902 16.8897 3.21967 17.0304C3.36032 17.171 3.55109 17.25 3.75 17.25H12.8438C13.009 17.8953 13.3843 18.4673 13.9105 18.8758C14.4367 19.2842 15.0839 19.5059 15.75 19.5059C16.4161 19.5059 17.0633 19.2842 17.5895 18.8758C18.1157 18.4673 18.491 17.8953 18.6562 17.25H20.25C20.4489 17.25 20.6397 17.171 20.7803 17.0304C20.921 16.8897 21 16.6989 21 16.5C21 16.3011 20.921 16.1103 20.7803 15.9697C20.6397 15.829 20.4489 15.75 20.25 15.75ZM15.75 18C15.4533 18 15.1633 17.912 14.9166 17.7472C14.67 17.5824 14.4777 17.3481 14.3642 17.074C14.2506 16.8 14.2209 16.4984 14.2788 16.2074C14.3367 15.9164 14.4796 15.6491 14.6893 15.4394C14.8991 15.2296 15.1664 15.0867 15.4574 15.0288C15.7483 14.971 16.0499 15.0007 16.324 15.1142C16.5981 15.2277 16.8324 15.42 16.9972 15.6667C17.162 15.9133 17.25 16.2034 17.25 16.5C17.25 16.8978 17.092 17.2794 16.8107 17.5607C16.5294 17.842 16.1478 18 15.75 18Z"
                fill="white"
              />
            </svg>
            <span>Settings</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-outline-light w-100">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.75 9V5.25C15.75 4.00736 14.7426 3 13.5 3L7.5 3C6.25736 3 5.25 4.00736 5.25 5.25L5.25 18.75C5.25 19.9926 6.25736 21 7.5 21H13.5C14.7426 21 15.75 19.9926 15.75 18.75V15M18.75 15L21.75 12M21.75 12L18.75 9M21.75 12L9 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
