import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import firebase from "firebase";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          href="/"
        />
        <Menu.Item
          name="prayer list"
          active={activeItem === "prayer list"}
          onClick={handleItemClick}
          href="/prayers"
        />
        <Menu.Item
          name="new prayer request"
          active={activeItem === "new prayer request"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={() => firebase.auth().signOut()}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
