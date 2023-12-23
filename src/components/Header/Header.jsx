import DropdownAvatar from "./DropdownAvatar";
import NotificationButton from "./NotifictionButton";
import ThemeSwapButton from "./ThemeSwapButton";

function Header() {
  return (
    <header className="header py-3 px-5 fixed w-full z-50 bg-base-100 flex justify-between border-b-2 border-primary items-center pb-3">
      <DropdownAvatar />
      <div className="flex items-center">
        <ThemeSwapButton />
        <NotificationButton />
      </div>
    </header>
  );
}

export default Header;
