import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import signupImage from "../../assets/dl.beatsnoop.svg";
import googleIcon from "../../assets/Icon-Google.svg";
const RegisterForm = () => {
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-4">
      <div className="flex flex-wrap items-center text-black">
        {/* Left side with image */}
        <div className="hidden md:block w-full md:w-1/2">
          <Image
            src={signupImage}
            alt="Shopping Illustration"
            width={600}
            height={600}
            layout="responsive"
            objectFit="cover"
            priority={true}
          />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-4">Create an account</h1>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Name" required className="w-auto" />
            <Input
              type="email"
              placeholder="Email or Phone Number"
              required
              className="w-auto"
            />
            <Input
              type="password"
              placeholder="Password"
              required
              className="w-auto"
            />

            <Button className="bg-red-600 text-white py-2 rounded-lg mt-4">
              <Link href={"/"}>Create Account</Link>
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 mt-4"
            >
              <Image
                src={googleIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <Link href={"/"}>Sign up with Google</Link>
            </Button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/" className="text-blue-600 font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
