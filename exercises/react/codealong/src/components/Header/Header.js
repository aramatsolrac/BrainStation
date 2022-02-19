import "./Header.scss";

function Header() {
  const cohortNickName = "Mountain";
  return (
    <header className="header">
      <div className="header__links header__links--left">
        <div className="header__logo">{cohortNickName} Cohort Directory</div>
      </div>
      <nav className="header__links header__links--right">
        <a href="/">Home</a>
      </nav>
    </header>
  );
}

export default Header;
