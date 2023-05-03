function NavbarRight() {
    return (
      <div className="navbar-right">
        <nav className="navbar">
          <div className="profile">
            <img className="pfp" src="hashcoded.jpg" alt="" />
            <h3 className="name">Dhruv bhavsar</h3>
            <h4 className="user-id">@dhruv4real</h4>
          </div>
          <ul>
            <li>Account settings</li>
            <li>Connect socials</li>
          </ul>
        </nav>
      </div>
    );
  }

export default NavbarRight;