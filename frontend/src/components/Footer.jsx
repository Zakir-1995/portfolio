
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex items-center sm:gap-2 gap-1 justify-center sm:justify-start relative z-10">
      <p className="sm:text-[11px] text-[10px] font-light text-masala font-DM">
        Copyright &copy; {year} by <span className="font-bold ">zakir</span>{" "}
      </p>
      <span className="sm:text-[14px] text-[12px] font-light text-masala font-DM">|</span>
      <p className="sm:text-[11px] text-[10px] fontt-light text-masala font-DM">
        All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
