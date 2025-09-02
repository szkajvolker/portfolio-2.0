import Section from "./Section";

function Footer() {
  return (
    <Section className="!px-0 !py-10" crosses customPadding>
      <div className="container flex justify-center w-full">
        <p className="text-n-3">&copy; {new Date().getFullYear()} Szabó István | Author</p>
      </div>
    </Section>
  );
}

export default Footer;
