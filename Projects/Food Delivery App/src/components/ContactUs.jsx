const Contact = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 p-5 max-w-[500px] mx-auto shadow-xl mt-12"
    >
      <h1 className="text-center text-3xl mb-6">Contact Us</h1>
      <input
        type="text"
        className="border border-blue-300 p-2"
        name="usename"
        id="username"
        placeholder="Enter your username"
      />
      <input
        type="text"
        className="border border-blue-300 p-2"
        name="message"
        id="message"
        placeholder="Enter your message"
      />
      <button
        type="submit"
        className="border border-blue-300 p-2 bg-slate-500 text-white font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
