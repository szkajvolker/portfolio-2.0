import Button from "./Button";
import Section from "./Section";

const Contact = () => {
  return (
    <Section className="-mt-[6.25rem]" crosses crossesOffset custompaddings id="contact">
      <div className="bg-n-7 rounded-xl p-6 font-bold flex flex-col items-center max-w-2xl mx-auto mt-[6rem] pt-[3rem]">
        <h2 className="text-color-2 animate-pulse">Get In Touch</h2>
        <p className="text-n-3">Feel free to reach me out</p>
        <Button className="bg-transparent border-2 border-n-3 rounded-2xl hover:bg-n-2 ">
          <p onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}>Email me</p>
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
