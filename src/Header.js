import './header.css'

function Header() {
  return (
    <div className="py-10">
      <h1 className="pb-4 text-sm md:text-base"><span className='mr-4'>Lighthouse Talent</span>by Jen Beatty</h1>
      <p className='max-w-3xl py-4'>
        Jen is a Bay Area native. She has spent the last 15+ years working for Tech startups. As a young girl, Jen would spend hours redesigning her bedroom. She started out helping friends design their new apartments and homes and has turned her passion into a business. <a href="mailto:beatty.jennifer@gmail.com">Please email for inquiries</a>.
      </p>
    </div>
  );
}

export default Header;
