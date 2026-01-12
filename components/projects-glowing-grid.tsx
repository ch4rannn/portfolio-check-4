"use client";

import { Globe, Code, Gamepad2, User, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
// Removed unused cn import

export function ProjectsGlowingGrid() {
    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            <GridItem
                icon={<Globe className="h-5 w-5 text-[#4DA3FF]" />}
                title="Mamta Tapri Udyog"
                description="Business website with a custom admin dashboard, simplified operations for the client."
                tags={["PHP", "MySQL", "CSS3", "JavaScript"]}
                link="https://mamtatapriudyog.com.np"
                linkText="Live Site"
            />
            <GridItem
                icon={<Code className="h-5 w-5 text-[#00FF9C]" />}
                title="Student Management System"
                description="Used by teachers to manage students, attendance, and performance reports."
                tags={["Python", "Streamlit", "SQLite", "Pandas"]}
                link="https://github.com/ch4rannn/Student-Management-System"
                linkText="View Code"
            />
            <GridItem
                icon={<Gamepad2 className="h-5 w-5 text-[#4DA3FF]" />}
                title="GameHub - All-in-One"
                description="Engaging gaming platform with user profiles, XP system, and leaderboards."
                tags={["Python", "Game Logic", "Streamlit"]}
                link="https://github.com/ch4rannn/GameHub---All-in-One"
                linkText="View Code"
            />
            <GridItem
                icon={<User className="h-5 w-5 text-[#00FF9C]" />}
                title="Personal Portfolio"
                description="High-performance modern portfolio featuring WebGL shaders and glassmorphism."
                tags={["Next.js", "Tailwind", "WebGL"]}
                link="https://chiranjivisah.com.np"
                linkText="Live Demo"
            />
        </ul>
    );
}

interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
    link: string;
    linkText: string;
}

const GridItem = ({ icon, title, description, tags, link, linkText }: GridItemProps) => {
    return (
        <motion.li
            className="min-h-[14rem] list-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:p-3 transition-colors hover:border-[#4DA3FF]/50 hover:shadow-[0_0_20px_rgba(77,163,255,0.1)]">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-transparent backdrop-blur-sm p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="flex items-start justify-between">
                            <div className="w-fit p-2">
                                {icon}
                            </div>
                            <div className="flex gap-2 flex-wrap justify-end max-w-[70%]">
                                {tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-[#4DA3FF]/10 text-[#4DA3FF] border border-[#4DA3FF]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-300">
                                {description}
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link href={link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#4DA3FF] transition-colors group">
                            {linkText} <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};
