import { useRef } from "react";
import Navbar from "./components/Navbar";
import BentoBox from "./components/BentoBox";

function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className="min-h-screen">
      <Navbar
        onScrollLeft={() => scrollBy(-420)}
        onScrollRight={() => scrollBy(420)}
      />

      <BentoBox scrollRef={scrollRef} />
      </div>
    </>
  );
}

export default App;
