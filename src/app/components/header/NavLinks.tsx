const NavLinks: React.FC = () => {
  return (
    <div className="hidden lg:flex space-x-8 font-medium text-lg dark:text-gray-200">
      {["Home", "About", "Services", "Contact"].map((item) => (
        <a
          key={item}
          href={item === "Home" ? "/" : "#"} // Redirect "Home" to "/"
          className="hover:-translate-y-1 duration-200"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
