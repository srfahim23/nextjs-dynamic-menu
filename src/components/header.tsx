const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h2 className="bg-headerBg text-white px-4 py-2 text-xl font-medium rounded-lg">
        {title}
      </h2>
    </header>
  );
};

export default Header;
