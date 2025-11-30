"use client";
import { PenTool, Users, Palette, Target, Code } from 'lucide-react';
import { SkillBadge } from '@/components/ui/SkillBadge';

export function DesignerSkills() {
    return (
        <section className="py-12 px-6 border-t bg-white border-slate-200">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <SkillBadge mode="designer" icon={PenTool} label="UI Design" />
                    <SkillBadge mode="designer" icon={Users} label="UX Research" />
                    <SkillBadge mode="designer" icon={Palette} label="Figma" />
                    <SkillBadge mode="designer" icon={Target} label="User Testing" />
                    <SkillBadge mode="designer" icon={Code} label="Design Systems" />
                </div>
            </div>
        </section>
    );
}
