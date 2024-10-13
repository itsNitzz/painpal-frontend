import ChangePasswordForm from "../sections/ChangePasswordForm";
import SimpleNavbar from "../sections/SimpleNavbar";

const ChangePassword = () => {
  return (
    <section className="bg-[url('/bg.png')] bg-no-repeat bg-cover ">
      <SimpleNavbar />

      <div className="py-[60px] padding min-h-screen">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[14px] place-items-center">
            <div className="flex flex-col items-center">
              <img src="/login.png" alt="" className="w-full max-w-[563px]" />
            </div>

            <div className="w-full grid place-items-center">
              <ChangePasswordForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
