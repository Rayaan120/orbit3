import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
} from 'react-simple-maps';
import { MapPin, Globe2, Radio, Zap, ExternalLink, X, Plus, Minus } from 'lucide-react';

// ─── Real-world topojson source ───────────────────────────────────────────────
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// ─── Portfolio Data ───────────────────────────────────────────────────────────
// coordinates: [longitude, latitude]
export const portfolioLocations = [
  {
    id: 1,
    venue: 'Coca-Cola Arena',
    city: 'Dubai',
    country: 'UAE',
    category: 'Entertainment / Live Events',
    coordinates: [55.2708, 25.2048],
    color: '#4FD1FF',
    events: [
      'Concert Production Support',
      'Brand Activation Setup',
      'VIP Guest Experience',
      'Stage & Lighting Coordination',
    ],
  },
  {
    id: 2,
    venue: 'Dubai World Trade Centre',
    city: 'Dubai',
    country: 'UAE',
    category: 'Exhibitions / Corporate Events',
    coordinates: [55.3047, 25.2285],
    color: '#8B5CF6',
    events: [
      'Corporate Conference Setup',
      'Exhibition Booth Experience',
      'Product Launch Support',
      'Delegate Flow Management',
    ],
  },
  {
    id: 3,
    venue: 'Abu Dhabi National Exhibition Centre',
    city: 'Abu Dhabi',
    country: 'UAE',
    category: 'Conferences / Brand Experiences',
    coordinates: [54.3773, 24.4539],
    color: '#FBBF24',
    events: [
      'Government Event Support',
      'Sponsorship Activation',
      'Stage Production',
      'Guest Registration Flow',
    ],
  },
  {
    id: 4,
    venue: 'Riyadh Front Exhibition & Conference Center',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    category: 'Corporate / Exhibitions',
    coordinates: [46.6753, 24.7136],
    color: '#4FD1FF',
    events: [
      'Brand Pavilion Setup',
      'Event Operations Planning',
      'Audience Experience Design',
      'Logistics Coordination',
    ],
  },
  {
    id: 5,
    venue: 'Jeddah Superdome',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    category: 'Large-Scale Events',
    coordinates: [39.1925, 21.4858],
    color: '#8B5CF6',
    events: [
      'Large Venue Production',
      'Crowd Flow Planning',
      'Sponsor Zone Setup',
      'Entertainment Coordination',
    ],
  },
];

// Connection pairs [idA, idB]
const connections = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 4],
  [2, 5],
];

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ loc, position }) {
  if (!loc || !position) return null;
  const isRight = position.x > 65;

  return (
    <motion.div
      key={loc.id}
      initial={{ opacity: 0, scale: 0.88, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 6 }}
      transition={{ duration: 0.2 }}
      className="absolute z-30 pointer-events-none"
      style={{
        left: isRight ? 'auto' : `${position.x + 1.2}%`,
        right: isRight ? `${100 - position.x + 1.2}%` : 'auto',
        top: `${position.y - 2}%`,
        transform: 'translateY(-50%)',
        width: 230,
      }}
    >
      <div
        className="rounded-2xl border border-white/10 p-4 backdrop-blur-2xl"
        style={{
          background: 'rgba(7,10,18,0.92)',
          boxShadow: `0 0 30px ${loc.color}35, inset 0 0 12px ${loc.color}08`,
        }}
      >
        <span
          className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
          style={{
            background: `${loc.color}1A`,
            color: loc.color,
            border: `1px solid ${loc.color}44`,
          }}
        >
          {loc.category}
        </span>
        <p className="text-white font-display font-semibold text-sm leading-tight mb-0.5">
          {loc.venue}
        </p>
        <p className="text-white/50 text-xs mb-3 flex items-center gap-1">
          <MapPin size={10} style={{ color: loc.color }} />
          {loc.city}, {loc.country}
        </p>
        <ul className="space-y-1.5">
          {loc.events.map((e) => (
            <li key={e} className="text-white/70 text-xs flex items-start gap-1.5">
              <Zap size={9} className="mt-0.5 shrink-0" style={{ color: loc.color }} />
              {e}
            </li>
          ))}
        </ul>
        <p className="text-white/25 text-[10px] mt-3 font-mono">Click node for full details</p>
      </div>
    </motion.div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function Modal({ loc, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: 'rgba(0,0,0,0.72)' }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        <div
          className="rounded-3xl border border-white/10 p-8"
          style={{
            background: 'rgba(7,10,18,0.96)',
            backdropFilter: 'blur(32px)',
            boxShadow: `0 0 80px ${loc.color}28, 0 40px 80px rgba(0,0,0,0.6)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <X size={16} className="text-white/60" />
          </button>

          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: `${loc.color}1A`,
              color: loc.color,
              border: `1px solid ${loc.color}44`,
            }}
          >
            {loc.category}
          </span>

          <h2 className="text-3xl font-display font-bold text-white mb-1">{loc.venue}</h2>
          <p className="text-white/50 flex items-center gap-2 text-sm mb-6">
            <Globe2 size={14} style={{ color: loc.color }} />
            {loc.city}, {loc.country}
          </p>

          <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

          <p className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 font-mono">
            <Radio size={12} style={{ color: loc.color }} /> Completed Events
          </p>
          <ul className="space-y-2.5 mb-8">
            {loc.events.map((e) => (
              <li key={e} className="flex items-center gap-3 text-white/80 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: loc.color, boxShadow: `0 0 6px ${loc.color}` }}
                />
                {e}
              </li>
            ))}
          </ul>

          <button
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:brightness-125"
            style={{
              background: `linear-gradient(135deg, ${loc.color}22, ${loc.color}0A)`,
              border: `1px solid ${loc.color}44`,
              color: loc.color,
            }}
          >
            <ExternalLink size={15} />
            View Portfolio
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Mobile card ──────────────────────────────────────────────────────────────
function MobileCard({ loc, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-2xl p-5 border cursor-pointer transition-all duration-300"
      style={{
        background: open ? `${loc.color}08` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? loc.color + '44' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: open ? `0 0 24px ${loc.color}20` : 'none',
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
            style={{
              background: `${loc.color}1A`,
              color: loc.color,
              border: `1px solid ${loc.color}44`,
            }}
          >
            {loc.category}
          </span>
          <h3 className="text-white font-display font-semibold text-base leading-tight">
            {loc.venue}
          </h3>
          <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
            <MapPin size={10} />
            {loc.city}, {loc.country}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: `${loc.color}18`, border: `1px solid ${loc.color}33` }}
        >
          <Zap size={14} style={{ color: loc.color }} />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 space-y-2 overflow-hidden"
          >
            {loc.events.map((e) => (
              <li key={e} className="flex items-center gap-2 text-white/70 text-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: loc.color }}
                />
                {e}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function OrbitMapSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedLoc, setSelectedLoc] = useState(null);
  const [tooltipPos, setTooltipPos] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mapPosition, setMapPosition] = useState({ center: [40, 28], zoom: 1 });

  const sectionRef = useRef(null);
  const mapContainerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const hoveredLoc = portfolioLocations.find((l) => l.id === hoveredId) || null;

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 18,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  }, []);

  const coordToPercent = useCallback((coordinates) => {
    // This is an approximation for tooltips
    const [lon, lat] = coordinates;
    const x = ((lon + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  }, []);

  const handleMarkerHover = useCallback((loc) => {
    setHoveredId(loc.id);
    // Note: Tooltip positioning becomes tricky with zooming. 
    // We'll keep it simple for now or disable tooltips during active zoom.
    setTooltipPos(coordToPercent(loc.coordinates));
  }, [coordToPercent]);

  const handleMarkerLeave = useCallback(() => {
    setHoveredId(null);
    setTooltipPos(null);
  }, []);

  const handleMarkerClick = (loc) => {
    setMapPosition({ center: loc.coordinates, zoom: 4 });
    setSelectedLoc(loc);
  };

  const handleCloseModal = () => {
    setSelectedLoc(null);
    setMapPosition({ center: [40, 28], zoom: 1 });
  };

  const handleZoomIn = () => {
    if (mapPosition.zoom >= 8) return;
    setMapPosition((prev) => ({ ...prev, zoom: prev.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (mapPosition.zoom <= 1) return;
    setMapPosition((prev) => ({ ...prev, zoom: prev.zoom / 1.5 }));
  };

  return (
    <>
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: '#07080F' }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79,209,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79,209,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Centre radial glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 58%, rgba(79,209,255,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-6">
              <Radio size={12} className="text-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase font-mono">
                Global Event Network
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-none">
              Orbit{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #4FD1FF, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Map
              </span>
            </h2>

            <p className="text-white/35 text-xs font-mono tracking-[0.25em] uppercase mb-5">
              Interactive Global Events Network
            </p>
            <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore the key destinations and venues where Orbit Events has delivered
              high-impact experiences. Each orbit node represents a major event location,
              connecting our portfolio across cities, venues, and global audiences.
            </p>
          </motion.div>

          {/* ── DESKTOP MAP ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="hidden md:block"
          >
            <div
              ref={mapContainerRef}
              className="relative rounded-3xl border border-white/8 overflow-hidden"
              style={{
                background: 'rgba(5,8,15,0.95)',
                boxShadow:
                  '0 0 100px rgba(79,209,255,0.07), inset 0 0 60px rgba(0,0,0,0.5)',
                transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`,
                transition: 'transform 0.15s linear',
              }}
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 140,
                }}
                style={{ width: '100%', height: 'auto' }}
                viewBox="0 0 800 500"
              >
                <ZoomableGroup
                  zoom={mapPosition.zoom}
                  center={mapPosition.center}
                  onMoveEnd={({ coordinates, zoom }) => {
                    setMapPosition({ center: coordinates, zoom });
                  }}
                >
                  {/* Countries */}
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="rgba(79,209,255,0.045)"
                          stroke="rgba(79,209,255,0.18)"
                          strokeWidth={0.4}
                          style={{
                            default: { outline: 'none' },
                            hover: { outline: 'none', fill: 'rgba(79,209,255,0.09)' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {/* Connection lines */}
                  {connections.map(([aId, bId]) => {
                    const la = portfolioLocations.find((l) => l.id === aId);
                    const lb = portfolioLocations.find((l) => l.id === bId);
                    if (!la || !lb) return null;
                    const active = hoveredId === aId || hoveredId === bId;
                    const lineColor = active ? la.color : 'rgba(79,209,255,0.35)';
                    return (
                      <g key={`line-${aId}-${bId}`}>
                        <Line
                          from={la.coordinates}
                          to={lb.coordinates}
                          stroke={lineColor}
                          strokeWidth={active ? 1.5 : 0.7}
                          strokeLinecap="round"
                          strokeDasharray={active ? '0' : '3 4'}
                          style={{
                            filter: active
                              ? `drop-shadow(0 0 6px ${la.color})`
                              : 'none',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </g>
                    );
                  })}

                  {/* Markers */}
                  {portfolioLocations.map((loc, i) => {
                    const isHov = hoveredId === loc.id;
                    return (
                      <Marker
                        key={loc.id}
                        coordinates={loc.coordinates}
                        onMouseEnter={() => handleMarkerHover(loc)}
                        onMouseLeave={handleMarkerLeave}
                        onClick={() => handleMarkerClick(loc)}
                      >
                        <motion.g
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* Outer pulse ring */}
                          <motion.circle
                            r={isHov ? 22 : 16}
                            fill="none"
                            stroke={loc.color}
                            strokeWidth={0.8}
                            opacity={0.3}
                            animate={{ r: isHov ? [14, 26] : [10, 18], opacity: [0.5, 0] }}
                            transition={{ duration: isHov ? 1.2 : 2.2, repeat: Infinity, ease: 'easeOut' }}
                          />
                          {/* Middle ring */}
                          <motion.circle
                            r={isHov ? 10 : 7}
                            fill="none"
                            stroke={loc.color}
                            strokeWidth={1}
                            opacity={isHov ? 0.6 : 0.3}
                            style={{ transition: 'all 0.3s ease' }}
                          />
                          {/* Core */}
                          <motion.circle
                            r={isHov ? 6 : 4}
                            fill={loc.color}
                            animate={{ r: isHov ? [5, 7, 5] : [3.5, 5, 3.5] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                              filter: `drop-shadow(0 0 ${isHov ? 12 : 6}px ${loc.color})`,
                              transition: 'filter 0.3s ease',
                            }}
                          />
                          {/* White centre dot */}
                          <circle r={1.8} fill="white" opacity={0.95} />
                        </motion.g>
                      </Marker>
                    );
                  })}
                </ZoomableGroup>
              </ComposableMap>

              {/* Tooltip overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                  {hoveredLoc && tooltipPos && mapPosition.zoom === 1 && (
                    <Tooltip loc={hoveredLoc} position={tooltipPos} />
                  )}
                </AnimatePresence>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                <button
                  onClick={handleZoomIn}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 group"
                  title="Zoom In"
                >
                  <Plus size={18} className="text-white/60 group-hover:text-cyan-400" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 group"
                  title="Zoom Out"
                >
                  <Minus size={18} className="text-white/60 group-hover:text-cyan-400" />
                </button>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 text-white/15 font-mono text-xs tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                LIVE NETWORK
              </div>
              <div className="absolute top-4 right-4 text-white/15 font-mono text-xs tracking-widest">
                {portfolioLocations.length} NODES ACTIVE
              </div>
              <div className="absolute bottom-4 left-4 text-white/10 font-mono text-[10px]">
                ORBIT EVENTS — GLOBAL PORTFOLIO
              </div>
            </div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.85 }}
              className="mt-6 flex items-center justify-center gap-6 flex-wrap"
            >
              {[
                { icon: Globe2, label: '2 Countries', color: '#4FD1FF' },
                { icon: MapPin, label: `${portfolioLocations.length} Venues`, color: '#8B5CF6' },
                { icon: Zap, label: '20+ Events Delivered', color: '#FBBF24' },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/8 bg-white/3"
                  style={{ backdropFilter: 'blur(12px)' }}
                >
                  <Icon size={14} style={{ color }} />
                  <span className="text-white/55 text-sm font-mono">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── MOBILE LIST ── */}
          <div className="md:hidden space-y-3 mt-2">
            <p className="text-white/25 text-xs uppercase tracking-widest font-mono text-center mb-8">
              Event Locations
            </p>
            {portfolioLocations.map((loc, i) => (
              <MobileCard key={loc.id} loc={loc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedLoc && (
          <Modal loc={selectedLoc} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
}
