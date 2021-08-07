function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>News & Info</p>
        <p>Deposit Policy</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Platinum</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Friends</p>
        <p>Family</p>
        <p>Referrals</p>
        <p>Partnerships</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">HOST</h5>
        <p>Start</p>
        <p>Who</p>
        <p>How</p>
        <p>When</p>
        <p>Where</p>
      </div>

      <div className="space-y-4 text-xs text-gray-400">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Customer Support</p>
        <p>Trust & Security</p>
        <p>Email & Phone</p>
        <p>FAQS</p>
      </div>
    </div>
  );
}

export default Footer;
