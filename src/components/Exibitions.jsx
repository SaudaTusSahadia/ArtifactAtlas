import React from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { CalendarCheck } from "lucide-react";

const exhibitions = [
    {
        id: 1,
        title: "Secrets of the Pharaohs",
        date: "Aug 12 - Sep 15, 2025",
        location: "The Grand Museum, Cairo",
        image:
            "ex1.jpeg",
    },
    {
        id: 2,
        title: "Ancient India Unearthed",
        date: "Oct 5 - Nov 3, 2025",
        location: "National Museum, Delhi",
        image:
            "ex2.jpeg",
    },
    {
        id: 3,
        title: "Echoes of Rome",
        date: "Nov 20 - Dec 20, 2025",
        location: "Capitoline Museums, Rome",
        image:
            "ex3.jpeg",
    },
    {
        id: 4,
        title: "Mysteries of Mesopotamia",
        date: "Sep 10 - Oct 10, 2025",
        location: "British Museum, London",
        image:
            "ex4.jpeg",
    },
    {
        id: 5,
        title: "The Viking Age",
        date: "Dec 1 - Jan 15, 2026",
        location: "National History Museum, Stockholm",
        image:
            "ex5.jpeg",
    },
    {
        id: 6,
        title: "Lost Cities of South America",
        date: "Nov 8 - Dec 8, 2025",
        location: "Museo Larco, Lima",
        image:
            "ex6.jpeg",
    },
];


const Exhibitions = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen md:mb-10">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3">
                    <CalendarCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    Recent Exhibitions
                </h2>
                <div className="h-1 w-20 md:w-32 bg-primary/50 rounded-full mx-auto mt-5" />
            </div>

            {/* Exhibition Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {exhibitions.map((exhibition, index) => (
                    <motion.div
                        key={exhibition.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-300"
                    >
                        <img
                            src={exhibition.image}
                            alt={exhibition.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 space-y-2">
                            <h3 className="text-xl font-semibold">{exhibition.title}</h3>
                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                <MdDateRange className="text-primary" />
                                {exhibition.date}
                            </p>
                            <p className="flex items-center gap-2 text-sm text-gray-500">
                                <FaLocationDot className="text-primary" />
                                {exhibition.location}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Exhibitions;
