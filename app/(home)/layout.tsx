import MainHeader from "@/components/layout/main-header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
