import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.webp";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <motion.img
                src={heroImg}
                alt="Wearly Fashion"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 10, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
                className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-400-300/70 to-yellow-800/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="p-6 text-center text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-gray-600 rounded-full shadow-md"
                    >
                        New Collection
                    </motion.div>

                    <motion.h1
                        className="mb-6 text-4xl font-bold tracking-tighter uppercase md:text-7xl lg:text-9xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                    >
                        Style{" "}
                        <span className="text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text">
                            Redefined
                        </span>
                    </motion.h1>

                    <motion.p
                        className="max-w-xl mx-auto mb-8 text-sm tracking-wide text-white md:text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        Express yourself with Wearly's premium collection. Designed for comfort, crafted for style.
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center justify-center gap-4 md:flex-row"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <Link
                            to="/collection/all/?gender=Men"
                            className="px-8 py-3 text-lg font-medium text-white transition duration-300 ease-in-out border-2 border-white rounded-md hover:bg-white hover:text-orange-900 hover:scale-105 shadow-lg"
                        >
                            Shop Men
                        </Link>
                        <Link
                            to="/collection/all/?gender=Women"
                            className="px-8 py-3 text-lg font-medium text-white transition duration-300 ease-in-out bg-orange-600 rounded-md hover:bg-white hover:text-orange-900 hover:scale-105 shadow-lg"
                        >
                            Shop Women
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
