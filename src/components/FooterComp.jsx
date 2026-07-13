import { Typography } from "@material-tailwind/react";

const FooterComp = () => {
  return (
    <div>
      <footer className="w-full bg-blue-gray-900 p-8">
        <div className="">
          <div className="flex flex-wrap">
            <div className="w-full px-4 font-medium text-blue-gray-100">
              <div className="flex flex-row flex-wrap items-center justify-center gap-10 gap-y-6 bg-blue-gray-900 text-center md:justify-between">
                <img src="weblogo(dm).png" alt="logo-ct" className="w-20" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="font-normal transition-colors hover:text-teal-400 focus:text-teal-400"
                    >
                      About Us
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="font-normal transition-colors hover:text-teal-400 focus:text-teal-400"
                    >
                      License
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="font-normal transition-colors hover:text-teal-400 focus:text-teal-400"
                    >
                      Contribute
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      as="a"
                      href="mailto:trice.it.studio@gmail.com"
                      color="white"
                      className="font-normal transition-colors hover:text-teal-400 focus:text-teal-400"
                    >
                      Contact Us
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <hr className="my-8 border-teal-600 w-4/5" />
        </div>
        <Typography color="white" className="text-center font-normal">
          &copy; 2025 Trice
        </Typography>
      </footer>
    </div>
  );
};
export default FooterComp;
