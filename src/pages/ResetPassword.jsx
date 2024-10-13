import ResetPasswordForm from "../sections/ResetPasswordForm";
import SimpleNavbar from "../sections/SimpleNavbar";

const ResetPassword = () => {
  return (
    <section className="bg-[url('/bg-light-2.png')] bg-no-repeat bg-cover ">
      <SimpleNavbar />

      <div className="py-[60px] padding min-h-screen">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[14px] place-items-center">
            <div className="flex-col items-center hidden md:flex">
              <img src="/login.png" alt="" className="w-full max-w-[563px]" />
            </div>

            <div className="w-full grid place-items-center mt-10 lg:mt-0 lg:px-10">
              <ResetPasswordForm type="email" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
