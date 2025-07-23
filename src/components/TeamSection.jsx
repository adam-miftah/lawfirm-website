// import { motion } from 'framer-motion';
// import Profil1 from '../assets/profil-1.webp';
// import Profil2 from '../assets/profil-2.webp';
// import Profil3 from '../assets/profil-3.webp';
// const teamMembers = [
//   {
//     name: "Abdul Kodir Batubara S.H.,M.H., CCL., CMLC.",
//     title: "Founder & Pengacara Utama",
//     bio: "Dengan pengalaman lebih dari 15 tahun, Abdul Kodir Batubara fokus pada strategi litigasi yang efektif dan penyelesaian kasus yang menguntungkan klien.",
//     image: Profil1
//   },
//   {
//     name: "Naufal Hidayat Natakusuma, S.H.",
//     title: "Spesialis Hukum Keluarga & Mediasi",
//     bio: "Memiliki keahlian khusus dalam mediasi, Sarah berdedikasi untuk menemukan solusi damai yang melindungi hak anak dan klien.",
//     image: Profil2
//   },
//   {
//     name: "Budi Santoso, S.H.",
//     title: "Pengacara Litigasi",
//     bio: "Seorang advokat yang gigih di ruang sidang, Budi memiliki rekam jejak yang solid dalam memperjuangkan hak-hak klien hingga tuntas.",
//     image: Profil3 
//   }
// ];

// const TeamSection = () => {
//   return (
//     <section id="tim-kami" className="py-20 bg-zinc-800">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}>
//           <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
//             Tim Ahli Hukum Kami
//           </h2>
//           <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto text-center">
//             Dipimpin oleh para profesional berpengalaman yang berdedikasi untuk kemenangan Anda.
//           </p>
//         </motion.div>
        
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-zinc-900 p-8 rounded-lg shadow-2xl text-center flex flex-col items-center"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}>

//               <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-brand-gold/50 bg-zinc-700">
//                 <img 
//                   src={member.image} 
//                   alt={`Foto ${member.name}`}
//                   className="w-full h-full object-contain mt-3"
//                   loading="lazy"/>
//               </div>

//               <h3 className="text-lg font-bold text-brand-gold">{member.name}</h3>
//               <p className="text-gray-400 font-medium my-1 text-sm">{member.title}</p>
//               <p className="text-gray-300 mt-4 flex-grow text-xs">{member.bio}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;