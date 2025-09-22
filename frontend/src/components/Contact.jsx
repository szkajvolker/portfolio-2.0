import Button from "./Button";
import { contactIcons } from "../constants";

const Contact = () => {
  return (
    <div className="flex min-h-screen justify-center items-center" id="contact">
      <div className="bg-n-7 rounded-xl font-bold flex flex-col items-center justify-center max-w-xs lg:max-w-xl mx-auto mt-10 px-[2rem] gap-2">
        <h2 className="text-color-2 animate-pulse">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row p-2 gap-[2rem]">
          {contactIcons.map((item) => (
            <Button
              key={item.id}
              className="bg-transparent border-2 border-n-3 rounded-2xl hover:bg-n-2"
              href={item.url || item.href}
            >
              <p onClick={() => (window.location.href = item.url)}>{item.title}</p>
            </Button>
          ))}
        </div>
        <p className="text-n-3">Feel free to reach me out</p>
      </div>
    </div>
  );
};

export default Contact;
