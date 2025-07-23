// import { motion } from 'framer-motion';

// const partners = [
//   {
//     name: "Nama Mitra Kerjasama",
//     logo: PartnerLogo1,
//     link: "https://website-mitra.com"
//   },
// ];

// const PartnersSection = () => {
//   return (
//     <section id="mitra-kami" className="py-20 bg-zinc-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-white">
//             Dipercaya oleh Mitra Kami
//           </h2>
//           <p className="mt-3 text-lg text-gray-400">
//             Kami membangun kemitraan strategis untuk memperkuat layanan kami.
//           </p>
//         </motion.div>
        
//         <div className="mt-10 flex justify-center items-center gap-12 md:gap-16 flex-wrap">
//           {partners.map((partner, index) => (
//             <motion.a
//               key={index}
//               href={partner.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
//                 <img 
//                   src={partner.logo} 
//                   alt={`Logo ${partner.name}`}
//                   className="h-28 w-auto "
//                   loading="lazy"
//                 />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;