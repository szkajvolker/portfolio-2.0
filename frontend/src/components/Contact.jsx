import imageMsg from "../assets/images/msg.png";
import Section from "./Section";

const Contact = () => {
  return (
    <Section
      className="-mt-[6.25rem]"
      crosses
      crossesOffset
      custompaddings
      crossesSide
      id="contact"
    >
      <div className="bg-n-7 rounded-xl p-6 font-bold flex flex-col items-center max-w-2xl mx-auto mt-[6rem]">
        <h2 className="text-color-2 animate-pulse">Get In Touch</h2>
        <p className="text-n-3">Feel free to reach me out</p>
        <span
          onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}
          className=""
        >
          <img src={imageMsg} alt="Email contact" width={200} height={200} className="" />
        </span>

        <p className="text-n-3">Click the icon above to send me an email</p>
      </div>
    </Section>
  );
};

export default Contact;
