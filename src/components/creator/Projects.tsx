"use client";
import { Layers } from 'lucide-react';
import { useState } from 'react';

interface GallerySection {
    title: string;
    images: { coverUrl?: string; imageUrl?: string }[];
}

interface CreatorProjectsProps {
    photographySections: GallerySection[];
}

function GalleryCard({ section, index }: { section: GallerySection; index: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const firstImage = section.images[0];
    const coverUrl = firstImage.coverUrl || firstImage.imageUrl || '';

    return (
        <a
            href={`/gallery/${section.title}`}
            className="group relative overflow-hidden rounded-xl interactive w-full cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300"
            style={{ aspectRatio: '4/5' }}
        >
            {/* Loading Skeleton */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                        <div className="h-6 bg-neutral-700 rounded w-2/3 animate-pulse" />
                        <div className="h-4 bg-neutral-700 rounded w-1/3 animate-pulse" />
                    </div>
                </div>
            )}

            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={coverUrl}
                    alt={section.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:from-black/90 transition-all duration-300"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
                    {section.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium">
                    {section.images.length} {section.images.length === 1 ? 'photo' : 'photos'}
                </p>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
}

export function CreatorProjects({ photographySections }: CreatorProjectsProps) {
    return (
        <section id="work" className="py-32 px-6 md:px-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-purple-900/20 text-purple-400">
                            Selected Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-100">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 rounded-full border transition-colors interactive border-neutral-800 hover:bg-neutral-800 text-white">
                            <Layers size={24} />
                        </button>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                            A collection of work that defines my approach to digital experiences.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {photographySections.map((section, sectionIndex) => {
                        if (!section || !section.images || section.images.length === 0) return null;
                        return (
                            <GalleryCard 
                                key={section.title} 
                                section={section} 
                                index={sectionIndex} 
                            />
                        );
                    })}
                    {photographySections.length === 0 && (
                        <>
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="rounded-xl bg-neutral-800 animate-pulse"
                                    style={{ aspectRatio: '4/5' }}
                                >
                                    <div className="h-full w-full relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4 space-y-2">
                                            <div className="h-6 bg-neutral-700 rounded w-2/3" />
                                            <div className="h-4 bg-neutral-700 rounded w-1/3" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
