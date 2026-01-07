function Navbar({
  onScrollLeft,
  onScrollRight,
}: {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}) {
  return (
    <div>
      <div className="bg-[#0A0A0A] h-2"></div>

      <nav className="flex justify-between mx-4 text-white mt-2 items-center">
        <a href="/" className="font-medium">
          kathir maarikarthykeyan
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1AfmYjcTvuFE0ADUK1XvcVtE_ADWjElx5/view?usp=sharing"
            className="hover:opacity-80 transition-opacity"
          >
            resume
          </a>
          <div className="flex gap-2">
            <button
              onClick={onScrollLeft}
              className="
                bg-[#27272A] h-8 w-8 rounded-lg
                flex items-center justify-center
                transition-all duration-200
                hover:bg-[#3F3F46] hover:scale-105
                active:scale-95
              "
              aria-label="Scroll left"
            >
              ←
            </button>

            <button
              onClick={onScrollRight}
              className="
                bg-[#27272A] h-8 w-8 rounded-lg
                flex items-center justify-center
                transition-all duration-200
                hover:bg-[#3F3F46] hover:scale-105
                active:scale-95
              "
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
