import Container from "@components/Container/Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Controls from "./Controls";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-1">
            <div className="lg:hidden md:hidden sm:block">
              <NavMenu />
            </div>
            <Logo />
            <div className="flex flex-row items-center justify-between gap-6">
              <Controls />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
