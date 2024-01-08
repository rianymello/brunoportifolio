import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const DecorativeCard = ({ backgroundColor, text }) => {
  return (
    <div
      className={`flex justify-center text-center items-center p-10 ${backgroundColor}
        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold`}
    >
      {text}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* ... (código anterior) */}

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <DecorativeCard
            backgroundColor="bg-red"
            text="DESIGN ORIGINAL E CRIATIVO"
          />
          <Project title="Project 1" description="Sua descrição para o Projeto 1 aqui." />

          <Project title="Project 2" description="Sua descrição para o Projeto 2 aqui." />
          

          {/* ROW 2 */}
          <Project title="Project 3" description="Sua descrição para o Projeto 3 aqui." />
          <Project title="Project 4" description="Sua descrição para o Projeto 4 aqui." />
          <Project title="Project 5" description="Sua descrição para o Projeto 5 aqui." />

          {/* ROW 3 */}
          <Project title="Project 6" description="Sua descrição para o Projeto 6 aqui." />
          <Project title="Project 7" description="Sua descrição para o Projeto 7 aqui." />
 
          <DecorativeCard
            backgroundColor="bg-blue"
            text="DESIGN ORIGINAL E CRIATIVO"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;