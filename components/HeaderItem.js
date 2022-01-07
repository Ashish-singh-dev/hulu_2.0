function HeaderItem({ Icon, title }) {
  return (
    <div
      className="flex flex-col items-center justify-center group 
      xs:w-10 sm:w-20 cursor-pointer text-center"
    >
      <Icon className="h-5 text-center group-hover:animate-bounce" />
      <p className="opacity-0 text-center group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
