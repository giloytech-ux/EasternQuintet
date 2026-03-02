export function Footer() {
  return (
    <footer className="bg-maroon px-6 py-16 text-center">
      <h2 className="font-heading text-2xl font-bold text-white">
        EASTERN <span className="text-ruby-light">QUINTET</span>
      </h2>
      <p className="mt-4 text-sm text-white/40">
        &copy; {new Date().getFullYear()} Eastern Quintet. All Rights Reserved.
      </p>
      <div className="mt-8 flex justify-center gap-8">
        <a href="#" className="text-sm text-white/40 transition-colors duration-300 hover:text-white">
          Instagram
        </a>
        <a href="#" className="text-sm text-white/40 transition-colors duration-300 hover:text-white">
          Facebook
        </a>
        <a href="#" className="text-sm text-white/40 transition-colors duration-300 hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}
