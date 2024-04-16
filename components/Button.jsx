function Button({ title }) {
  return (
    <>
      <button className="bg-primarycolor p-4 rounded-lg font-bold transition-transform duration-300 transform hover:scale-110">
        {title}
      </button>
    </>
  );
}

export default Button;
