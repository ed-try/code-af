export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white  border-t border-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-white">code.af</span>
            <span className="text-sm text-gray-400">Premium Domain For Sale</span>
          </div>
          <div className="text-sm text-gray-400">© 2025 • All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
