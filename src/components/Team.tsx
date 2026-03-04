import { motion } from 'motion/react';

const team = [
  {
    name: "Alvaro De Maria",
    role: "Desde 1992 trabalhando com Filmagem e Fotografia",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" // Placeholder for older professional male
  },
  {
    name: "Samanta Savordelli",
    role: "Fotografando desde 2008",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" // Placeholder for professional female
  },
  {
    name: "Yann De Maria",
    role: "Fotógrafo e Editor", // Assumed role based on context
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" // Placeholder for younger professional male
  }
];

export default function Team() {
  return (
    <section id="quem-somos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight"
          >
            Quem Somos
          </motion.h2>
          <div className="w-24 h-1 bg-brand-purple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-lg group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 tracking-wide">
                {member.name}
              </h3>
              <p className="text-brand-grey font-light text-lg max-w-xs mx-auto leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
