const Contact = () => {
  return (
    <div className="container mx-auto w-6/12 bg-gray-200">
      <h1>Contact Us page</h1>
      <form className="flex row-auto gap-3 p-2">
        <input type="text" placeholder="Your Name" className="rounded-lg" />
        <input type="text" placeholder="Your Email" className="rounded-lg" />
        <textarea placeholder="Your Message" className="rounded-lg" />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
