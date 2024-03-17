"use client";
// import { animated, useSpring } from "@react-spring/web";
// import { useState } from "react";

// export default function Home() {
//   // const [dupa, setdupa] = useState(0);
//   const [springs, api] = useSpring(() => ({
//     from: { x: 0 },
//   }));
//   console.log("rerendered");

//   const handleClick = () => {
//     api.start({
//       from: {
//         x: 0,
//       },
//       to: { x: 100 },
//     });
//   };
//   // setTimeout(() => setdupa(dupa + 1), 1000);
//   return (
//     <animated.div
//       onClick={handleClick}
//       style={{
//         width: 80,
//         height: 80,
//         background: "#ff6d6d",
//         borderRadius: 8,
//         ...springs,
//       }}
//     ></animated.div>
//   );
// }

import {
  useScroll,
  animated,
  useSpring,
  useIsomorphicLayoutEffect,
} from "@react-spring/web";

export default function MyComponent() {
  // useIsomorphicLayoutEffect(() => {}, [position]);
  const { scrollYProgress } = useScroll();
  console.log("rerendered");

  return (
    <div className="h-[3000px]">
      <animated.div
        style={{ rotate: scrollYProgress, position: "fixed", top: 0 }}
      >
        Hello World
      </animated.div>
    </div>
  );
}

// import { useTransition, animated } from "@react-spring/web";

// export default function MyComponent({
//   data = [<p>Dupa1</p>, <p>Dupa2</p>, <p>Dupa3</p>],
// }) {
//   const [transitions, api] = useTransition(data, () => ({
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 1 },
//   }));

//   return transitions((style, item) => (
//     <animated.div style={style}>{item}</animated.div>
//   ));
// }
