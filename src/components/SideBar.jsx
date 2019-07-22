import React from 'react';


const SideBar =({children}) =>(
    <div className="SideBar">
        <div className="SideBar__container">
            {children}
        </div>
    </div>
);

export default SideBar;