function Footer() {
  return (
    <div className="flex justify-center w-full p-5 border-t-2 dark:border-n-6 border-n-2">
      <p className="text-n-3">&copy; {new Date().getFullYear()} Szabó István | Author</p>
    </div>
  );
}

export default Footer;
