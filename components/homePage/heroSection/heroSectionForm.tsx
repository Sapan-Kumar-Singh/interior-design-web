"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import { rotateRevealRight} from "@/lib/animation";


export default function HeroSectionForm() {
    return (
        <motion.div
            variants={rotateRevealRight}
            initial="hidden"
            animate="show"
            className="w-full lg:self-end"
        >
            <Card className="bg-white/96 backdrop-blur-md 
                  border border-white/20 rounded-sm p-4">
                <CardHeader className="pb-2">
                    <CardTitle className="font-serif font-semibold text-2xl text-obsidian">
                        Get A Free Quote
                    </CardTitle>
                    <CardDescription className="font-sans text-[13px] text-obsidian/80 leading-relaxed">
                        Start your journey today — quick, easy, no obligation.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                    <Input
                        placeholder="Your Name"
                        className="border-0 border-b border-cream-dark rounded-none
                        focus-visible:ring-0 focus-visible:border-obsidian
                        font-sans text-[13px] px-0 bg-transparent
                        placeholder:text-text-hint transition-colors duration-200"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            placeholder="Email"
                            type="email"
                            className="border-0 border-b border-cream-dark rounded-none
                          focus-visible:ring-0 focus-visible:border-obsidian
                          font-sans text-[13px] px-0 bg-transparent
                          placeholder:text-text-hint transition-colors duration-200"
                        />
                        <Input
                            placeholder="Phone"
                            type="tel"
                            className="border-0 border-b border-cream-dark rounded-none
                          focus-visible:ring-0 focus-visible:border-obsidian
                          font-sans text-[13px] px-0 bg-transparent
                          placeholder:text-text-hint transition-colors duration-200"
                        />
                    </div>

                    <Input
                        placeholder="Service Type"
                        className="border-0 border-b border-cream-dark rounded-none
                        focus-visible:ring-0 focus-visible:border-obsidian
                        font-sans text-[13px] px-0 bg-transparent
                        placeholder:text-text-hint transition-colors duration-200"
                    />

                    <Textarea
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="border-0 border-b border-cream-dark rounded-none
                        focus-visible:ring-0 focus-visible:border-obsidian
                        font-sans text-[13px] px-0 bg-transparent 
                        placeholder:text-text-hint transition-colors duration-200"
                    />

                    <Button>
                        Request Free Estimate <ArrowUpRight size={12} />
                    </Button>

                    <p className="text-[12px] text-text-muted-brand font-sans
                      flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 fill-gold stroke-gold shrink-0" />
                        Rated 5 Stars by Homeowners
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
