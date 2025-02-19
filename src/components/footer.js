function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center text-xl font-bold">
      &#169;
      {year}
      Esmael Hussen, All rights reserved.
    </div>
  );
}

export default Footer;
