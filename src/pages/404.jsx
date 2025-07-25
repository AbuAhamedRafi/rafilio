import { motion } from "framer-motion";
import { HomeIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function NotFound() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const bounceVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 0, -10],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Abu Ahamed Rafi</title>
                <meta name="description" content="The page you're looking for doesn't exist." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-red-50/30 to-blue-50/30 dark:from-zinc-900 dark:via-red-950/20 dark:to-blue-950/20 flex items-center justify-center px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 404 Number */}
                    <motion.div
                        className="mb-8"
                        variants={bounceVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <ExclamationTriangleIcon className="w-24 h-24 mx-auto text-red-500 dark:text-red-400 mb-4" />
                        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-red-600 to-red-800 bg-clip-text">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Oops! Page not found
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                            <br className="hidden sm:block" />
                            Let&apos;s get you back on track!
                        </p>
                    </motion.div>

                    {/* URL Info */}
                    <motion.div
                        className="mb-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 break-all">
                            Requested URL: <span className="font-mono text-red-600 dark:text-red-400">{window.location.pathname}</span>
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <motion.button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <HomeIcon className="w-5 h-5" />
                            Back to Homepage
                        </motion.button>

                        <motion.button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← Go Back
                        </motion.button>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.6, 0.3, 0.6]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </>
    );
}

export default NotFound;