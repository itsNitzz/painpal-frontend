import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../sections/Navbar";



const TestResult = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSaveAndView = () => {
    // Logic for saving test results can go here if needed

    // Navigate to the Profile page
    navigate("/profile");
  };

  return (
    <section className="bg-[url('/bg-light-2.png')] bg-no-repeat bg-cover py-[30px] min-h-screen ">
      <Navbar />

      <div className="container">
        <div className="padding flex flex-col items-center">
          <span className="text-center block text-3xl font-bold mb-3">
            Test Result
          </span>
          <p className="text-lg mb-5">
            Save this test results to manage your pain
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 mb-20 w-full">
            <p className="text-xl font-medium whitespace-nowrap">
              Enter a unique test ID{" "}
            </p>
            <div className="relative w-full">
              <input
                name="name"
                type="name"
                placeholder="Ex: Test taker name & Pain location"
                className="w-full p-[15px] border border-[#1935CA] rounded-lg lg:min-w-[400px]"
              />
              <p className="text-lg text-[#FF0000] absolute whitespace-nowrap">
                ! This test ID exists. Use a different test ID
              </p>
            </div>
            <button
              className="px-10 py-3 rounded-lg text-2xl whitespace-nowrap lg:ml-10 w-full border border-[#1935CA] bg-primary-100 text-white mt-10 lg:mt-0"
              onClick={handleSaveAndView} // Add onClick to navigate to Profile
            >
              Save & View
            </button>
          </div>

          <div className="bg-white/50 backdrop-blur-md p-10 rounded-2xl border border-[#1935CA]">
            <p className="text-center block text-xl font-medium">
              Based on your answers to video tests, the pain is most likely to
              be:
            </p>
            <span className="text-center block text-2xl font-medium underline my-4">
              Diagnosis name
            </span>
            <p>
              True joint pain (arthralgia) may or not be accompanied by joint
              inflammation (arthritis). The most common symptom of joint
              inflammation is pain. Inflamed joints may also be warm and
              swollen, and less often the overlying skin may be red. Arthritis
              may involve only joints of the limbs or also joints of the central
              part of the skeleton, such as the spine or pelvis. Pain may occur
              only when a joint is moved or may be present at rest. Other
              symptoms, such as rash, fever, eye pain, or mouth sores, may be
              present depending on the cause of the joint pain. In most cases,
              the cause of pain originating inside multiple joints is arthritis.
              Disorders that cause arthritis may differ from each other in
              certain tendencies, such as the following:
            </p>
            <ul>
              <li>How many and which joints they usually involve</li>
              <li>
                Whether the central part of the skeleton, such as the spine or
                pelvis, is typically involved
              </li>
            </ul>
            <button className="px-10 py-3 rounded-lg text-2xl whitespace-nowrap   w-fit border border-[#1935CA] bg-primary-100 text-white mx-auto block mt-10">
              Manage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestResult;
