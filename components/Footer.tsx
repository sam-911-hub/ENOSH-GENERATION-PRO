const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>© Enosh Generation</p>
      <p className="muted">info@enosh.org • +123 456 7890</p>
    </div>
  </footer>
);

export default Footer;
          </div>
          <div>
            <h3 className="text-xl font-heading text-brand-accent mb-3">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              {SocialLinks.map((link) => (
                <SocialLinkIcon key={link.name} name={link.name} url={link.url} iconClass={link.iconClass} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-brand-secondary pt-8">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {AppName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
