const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-4 mt-8">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} Nishanth Kalluri. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
