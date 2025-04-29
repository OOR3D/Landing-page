import DiscordCTA from './DiscordCTA';
import { motion } from 'framer-motion';

const PrelaunchMission = () => {
  return (
    <section className="w-full bg-[#0A0C13] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400"
          >
            Prelaunch Mission
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-300"
          >
            <p>
              We're in the building phase of OOR3D. 
              A platform designed to make creating effortless, and to give creators powerful new systems to push their ideas further.
            </p>
            <p>
              We're building in public so creators like you can get involved early.
            </p>
            <p>
              Whether you're just starting out or you're a seasoned pro, you're in the right place.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <DiscordCTA />
        </motion.div>
      </div>
    </section>
  );
};

export default PrelaunchMission; 