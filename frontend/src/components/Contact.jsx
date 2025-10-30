import Button from "./Button";
import { contactIcons } from "../constants";
import LocalTime from "./LocalTime";

const Contact = () => {
  return (
    <div className="flex min-h-screen justify-center items-center w-full" id="contact">
      <div className="dark:bg-black/40 bg-n-1 lg:max-w-2xl rounded-xl font-bold flex flex-col items-center justify-center mx-auto mt-10 p-5 gap-2 shadow-xl dark:shadow-purple-800/70 shadow-black/30 dark:text-color-1 text-n-4">
        <LocalTime/>
        <h2 className="dark:text-color-1 text-n-5 animate-pulse">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row p-2 gap-[2rem]">
          {contactIcons.map((item) => (
            <Button
              key={item.id}
              className="bg-transparent shadow-md shadow-black/60 hover:dark:shadow-purple-800/70  rounded-2xl text-n-5 dark:text-n-3 bg-n-4 dark:bg-n-6"
              href={item.url || item.href}
            >
              <p onClick={() => (window.location.href = item.url)}>{item.title}</p>
            </Button>
          ))}
        </div>
        <p className="dark:text-n-3 text-n-5">Feel free to reach me out</p>
      </div>
    </div>
  );
};

export default Contact;
