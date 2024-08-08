import Logo from "@/assets/biglogo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-1/4" />
          <p className="my-5">
            I'm a passionate software developer dedicated to creating innovative and efficient solutions. Whether it's building a campaign management system, a client data capturing website, or an adserver, I am committed to delivering top-notch results.
          </p>
          <p>© 2024 Jimmy Sergio Damiao. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5"><a href="#aboutmes">About Me</a></p>
          <p className="my-5"><a href="#experiences">Experience</a></p>
          <p><a href="#contactus">Contact</a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Information</h4>
          <p className="my-5">Feel free to reach out for any inquiries or collaborations.</p>
          <p>Number: +264816927077</p>
          <p>Email: sxrgio.dev@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
