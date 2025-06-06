import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarCheck, ExternalLink, ClipboardPen } from 'lucide-react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';

const exhibitions = [
  {
    img: img1,
    location: 'California, USA',
    museum: 'Christian Central Museum',
    date: '27 July 2016 - 29 August 2016',
    title: 'A New Classical Art for Christian Central Museum',
    description:
      "Explore timeless beauty through a curated classical collection. This exhibit reimagines traditional art in a contemporary museum setting.",
  },
  {
    img: img2,
    location: 'California, USA',
    museum: 'Christian Central Museum',
    date: '15 Sept 2016 - 30 Oct 2016',
    title: 'The Artifacts That Defined Civilization',
    description:
      "Witness rare artifacts that shaped early societies. Discover tools, scrolls, and treasures dating back to 2000 BC in this limited-time exhibition.",
  },
];

const Extrasection2 = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-flex items-center gap-2">
            <CalendarCheck className="w-8 h-8 text-primary" />
            Upcoming Exhibitions
          </h2>
          <div className="h-1 w-24 mx-auto mt-2 rounded-full" />
        </div>

        {/* Exhibitions List */}
        <div className="space-y-10">
          {exhibitions.map((exhibit, index) => (
            <motion.div
              key={index}
              className="border-2 border-accent rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={exhibit.img}
                alt={exhibit.title}
                className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-[250px]"
              />
              <div className="flex-1 space-y-4">
                <div className="flex justify-between text-sm text-accent">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 " />
                    <span>{exhibit.location}</span> · <span>{exhibit.museum}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 " />
                    <span>{exhibit.date}</span>
                  </div>
                </div>
                <h3 className="text-xl text-primary font-semibold">{exhibit.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{exhibit.description}</p>
                <div className="flex gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn bg-amber-600 text-white hover:bg-amber-700 px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    See Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <ClipboardPen size={16} />
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extrasection2;
