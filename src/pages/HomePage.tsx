import { useStore } from "../zustand/useStore";

const HomePage = () => {
  // const { setTheme, theme } = useTheme();
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // useEffect(() => {
  //   if (isTransitioning) {
  //     const timeout = setTimeout(() => setIsTransitioning(false), 500);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [isTransitioning]);

  // const handleThemeChange = () => {
  //   setIsTransitioning(true);
  //   setTheme(theme === "light" ? "dark" : "light");
  //   localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  // };

  const { count, increment, decrement, reset, set } = useStore();

  return (
    <div className="px-10 py-16">
      {/* <GsapAnimation /> */}

      <div className="space-y-2 space-x-2">
        <p>You clicked {count} number of times.</p>

        <button
          className="py-2.5 px-4 rounded-md bg-slate-200"
          onClick={increment}
        >
          increment
        </button>
        <button
          className="py-2.5 px-4 rounded-md bg-slate-200"
          onClick={decrement}
          disabled={count === 0}
        >
          decrement
        </button>
        <button className="py-2.5 px-4 rounded-md bg-slate-200" onClick={reset}>
          reset
        </button>
        <button
          className="py-2.5 px-4 rounded-md bg-slate-200"
          onClick={() => set(count + 10)}
        >
          set
        </button>
      </div>
    </div>
  );
};

export default HomePage;
