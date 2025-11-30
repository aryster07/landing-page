"use client";
import { Layers } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Project } from '@/data/portfolio';

interface DesignerProjectsProps {
    projects: Project[];
}

export function DesignerProjects({ projects }: DesignerProjectsProps) {
    return (
        <section id="work" className="py-32 px-6 md:px-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 text-blue-600">
                            Selected Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 rounded-full border transition-colors interactive border-slate-200 hover:bg-slate-100">
                            <Layers size={24} />
                        </button>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                            A collection of work that defines my approach to digital experiences.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            index={index}
                            mode="designer"
                            title={project.title}
                            category={project.category}
                            img={project.images ? project.images.cover : project.img}
                            skills={'tools' in project ? project.tools : undefined}
                            behanceUrl={'behanceUrl' in project ? project.behanceUrl : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
