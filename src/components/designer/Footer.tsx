"use client";
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function DesignerFooter() {
    return (
        <footer className="py-16 px-6 border-t border-slate-200 bg-slate-100">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">7Frames Aryan.</h3>
                    <p className="text-slate-500">
                        Crafted with ❤️ and ☕
                    </p>
                    <p className="text-sm mt-2 text-slate-500">
                        © 2025 Aryan Rana. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/7Frames_Aryan/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-white text-slate-800 hover:text-blue-600 shadow-sm">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/aryanrana007/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-white text-slate-800 hover:text-blue-600 shadow-sm">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:aryanrana762@gmail.com" className="p-3 rounded-full interactive transition-all duration-300 hover:-translate-y-1 bg-white text-slate-800 hover:text-blue-600 shadow-sm">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
