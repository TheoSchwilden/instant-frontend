import DropdownAvatar from "./DropdownAvatar";
import NotificationButton from "./NotifictionButton";
import ThemeSwapButton from "./ThemeSwapButton";

function Header() {
  return (
    <header className="header flex justify-between items-center">
      <DropdownAvatar />
      <div className="flex items-center">
        <ThemeSwapButton />
        <NotificationButton />
      </div>
    </header>
  );
}

export default Header;
