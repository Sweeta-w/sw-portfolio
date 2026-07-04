import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Sweeta
              <span className="text-cyan-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="text-gray-400 mt-4 tracking-[0.3em] uppercase text-sm"
            >
              CS Graduate 2027
            </motion.p>
          </div>

          {/* Progress Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 h-[3px] bg-cyan-400"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Loader({ onFinish }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       onFinish();
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="fixed inset-0 bg-black flex items-center justify-center z-999"
//         >
//           <motion.h1
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-white text-4xl md:text-6xl font-bold"
//           >
//             Sweeta<span className="text-cyan-400">.</span>
//           </motion.h1>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }