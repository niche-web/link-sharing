import Image from "next/image";
import logo from "@/assets/images/logo-devlinks-large.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <Image src={logo} alt="Devlinks logo" width={183} height={40} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
