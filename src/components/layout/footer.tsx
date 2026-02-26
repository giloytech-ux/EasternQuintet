export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-onyx-900 px-6 py-12 text-center">
      <h2 className="mb-4 font-heading text-2xl font-bold text-white">
        EASTERN <span className="text-ruby">QUINTET</span>
      </h2>
      <p className="mb-8 text-sm text-muted">
        &copy; {new Date().getFullYear()} Eastern Quintet. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 text-smoke">
        <a href="#" className="text-sm transition-colors duration-300 hover:text-white">
          Instagram
        </a>
        <a href="#" className="text-sm transition-colors duration-300 hover:text-white">
          Facebook
        </a>
        <a href="#" className="text-sm transition-colors duration-300 hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}
