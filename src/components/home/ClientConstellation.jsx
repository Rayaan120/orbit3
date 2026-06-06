import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
    "1016 City_PRIMARY logo.png",
    "28 Forty Four.png",
    "AFZA Logo.jpg",
    "AHMED AL MAGHRIBI.jpg",
    "Al Ain Farms_logo.png",
    "Al Ain LOGO master_NEW-2.png",
    "Al Ansari Exchange.png",
    "Al Baker Logo English with Tagline TM-01.jpg",
    "Al Fardan Jewellery.jpg",
    "Al Haramain.jpg",
    "Al Islami.png",
    "AL RAWABI.jpg",
    "ALLEN OVERSEAS.jpg",
    "Almarai.png",
    "AMARON.jpg",
    "Apparel Group.png",
    "autotek.png",
    "Aw Rostamani Trading Logo.png",
    "B&BW.jpg",
    "BABYSHOP.jpg",
    "Barbie.png",
    "BUSINESSBAY.jpg",
    "Castrol Edge logo.jpg",
    "CCA.jpg",
    "CCME Logo Green-01.jpg",
    "CS Horizantal Logo.png",
    "Dabur_Logo.svg.png",
    "deiz.jpg.jpeg",
    "DETTOL.jpg",
    "DFC.jpg",
    "DSCLogo.png",
    "DSO_New_Branding_2021-01.png",
    "DUBAI DIGITAL PARK.jpg",
    "Dubai Ice Rink.png",
    "DUBAI POLICE.jpg",
    "DUBAI SILICON OASIS.jpg",
    "DWTC.jpg",
    "EDC.jpg",
    "EEG.jpg",
    "EMAMI.jpg",
    "EMC.png",
    "EMF.png",
    "EMSO.jpg",
    "Fit N Glam.png",
    "FITNESS FIRST.jpg",
    "flormar-logo png.png",
    "FNP.jpg",
    "FUH logo-01.jpg",
    "GMC Clinics.jpeg",
    "Gold FM.jpg",
    "Govt of Ajman.jpg",
    "Grand Centrale Logo.jpg",
    "GWR_OfficialAttempt-FullColour-TM-CMYK.jpg",
    "Halwani-01.png",
    "HANAYEN.jpg",
    "Hotpack Logo_-1.png",
    "Hotwheels.png",
    "HUNTER FOODS.jpg",
    "Hunter%27s Gourmet 2020.png",
    "Hyundai_Logo_Vertical_FullColour_Pantone.jpg",
    "Jotun.png",
    "KHALEEJ TIMES.jpg",
    "kiko.png",
    "Kinder.png",
    "Lattafa gold Logo-01.png",
    "LIFESTYLE FINE JEWELRY english logo.png",
    "logo mirror.png",
    "MAI DUBAI.jpg",
    "Malabar Gold & Diamonds.jpg",
    "Mattel Logo.png",
    "Mercedes Benz.png",
    "Museum_of_the_Future_logo.jpg",
    "NOOR.png",
    "PAN HOME.jpg",
    "Patchi Logo- 10109C .jpg",
    "Peace Homes Development.png",
    "Pediasure.png",
    "QUANTA.jpg",
    "radio4.jpg",
    "Rituals_Cosmetics_logo.png",
    "Sadia.jpg",
    "Saha Arabian Farms.png",
    "SKECHERS.jpg",
    "Sobha Realty Logo Black.png",
    "Tag 91.1.jpg",
    "TIFFANY BREAK.jpg",
    "Tilda Blue PNG.png",
    "tips and toes.png",
    "Tm logo just vegan.png",
    "tw3d-logo-vertical-red.png",
    "Vatika New Bubble Logo.png",
    "VLCC Logo E&A-01.jpg",
    "Yas Marina.jpg",
    "YVES ROCHER.jpg",
    "Zee Keralam MIDDLEAST-Color.png",
    "Zee5 logo White.png",
    "ZEEKR.jpg",
    "Zee_TV_RGB.png"
];

const row1 = partnerLogos.filter((_, idx) => idx % 2 === 0);
const row2 = partnerLogos.filter((_, idx) => idx % 2 !== 0);

export default function ClientConstellation() {
    const doubledRow1 = [...row1, ...row1];
    const doubledRow2 = [...row2, ...row2];

    return (
        <section className="pt-12 pb-24 relative bg-deep-space overflow-hidden">
            {/* Background Starfield specifically for this section */}
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tighter">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-blue to-starlight italic">Partners</span>
                        </h2>
                        <p className="text-starlight/50 font-mono text-sm tracking-[0.2em] max-w-2xl mx-auto">Collaborating with industry pioneers to orchestrate high-impact experiences and unmissable brand momentum.</p>
                    </motion.div>
                </div>

                {/* Infinite Marquee Container */}
                <div className="flex flex-col gap-6 relative overflow-hidden group">
                    {/* Fade overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-space to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-space to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Scrolls Left */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap py-2"
                            animate={{
                                x: [0, "-50%"],
                            }}
                            transition={{
                                x: {
                                    duration: 120,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {doubledRow1.map((logo, index) => (
                                <div
                                    key={`row1-${logo}-${index}`}
                                    className="inline-flex items-center justify-center min-w-[200px] md:min-w-[220px] h-24 px-6 rounded-2xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(79,209,255,0.2)] hover:border-cosmic-blue/20 transition-all duration-300 group/item relative overflow-hidden"
                                >
                                    {/* Subtle Glow on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue/0 via-transparent to-cosmic-blue/0 group-hover/item:from-cosmic-blue/5 group-hover/item:to-transparent transition-all duration-500" />
                                    
                                    {/* Corner Star */}
                                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-cosmic-blue/20 group-hover/item:bg-cosmic-blue group-hover/item:shadow-[0_0_8px_#4FD1FF] transition-all" />

                                    <img
                                        src={`/FOR ORBIT.EVENTS WEBSITE/FOR ORBIT.EVENTS WEBSITE/${encodeURIComponent(logo)}`}
                                        alt={logo.replace(/\.[^/.]+$/, "")}
                                        className="max-h-12 max-w-[85%] object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    
                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover/item:via-cosmic-blue/40 transition-all duration-500" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2: Scrolls Right */}
                    <div className="relative flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 whitespace-nowrap py-2"
                            animate={{
                                x: ["-50%", 0],
                            }}
                            transition={{
                                x: {
                                    duration: 120,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        >
                            {doubledRow2.map((logo, index) => (
                                <div
                                    key={`row2-${logo}-${index}`}
                                    className="inline-flex items-center justify-center min-w-[200px] md:min-w-[220px] h-24 px-6 rounded-2xl border border-black/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(79,209,255,0.2)] hover:border-cosmic-blue/20 transition-all duration-300 group/item relative overflow-hidden"
                                >
                                    {/* Subtle Glow on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-blue/0 via-transparent to-cosmic-blue/0 group-hover/item:from-cosmic-blue/5 group-hover/item:to-transparent transition-all duration-500" />
                                    
                                    {/* Corner Star */}
                                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-cosmic-blue/20 group-hover/item:bg-cosmic-blue group-hover/item:shadow-[0_0_8px_#4FD1FF] transition-all" />

                                    <img
                                        src={`/FOR ORBIT.EVENTS WEBSITE/FOR ORBIT.EVENTS WEBSITE/${encodeURIComponent(logo)}`}
                                        alt={logo.replace(/\.[^/.]+$/, "")}
                                        className="max-h-12 max-w-[85%] object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    
                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover/item:via-cosmic-blue/40 transition-all duration-500" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
