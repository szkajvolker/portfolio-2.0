import Section from "./Section";

function Footer() {
  return (
    <Section className="!px-0 !py-10" crosses customPadding>
      <div className="container flex sm:justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          <a
            href="https://www.flaticon.com/free-icons/email"
            title="email icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-n-4 hover:text-n-2"
          >
            Email icons created by Freepik - Flaticon
          </a>
        </p>
        <p className="text-n-3">&copy; {new Date().getFullYear()} Szabó István | Author</p>
      </div>
    </Section>
  );
}

export default Footer;
