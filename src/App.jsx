import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommercialLandingPage() {
  const [activeTab, setActiveTab] = useState('traditional');
  const [activeFaq, setActiveFaq] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 z-50">
            {/* THIS IS WHERE YOUR LOGO LOADS */}
            <img src="/logo.svg" alt="TechnoBiz Logo" className="w-24 h-24 sm:w-10 sm:h-10 object-contain text-xl" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              TechnoBiz
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-sm font-bold text-slate-600 items-center">
            <a href="#why-us" className="hover:text-blue-700 transition-colors">Why Us</a>
            <a href="#prototype" className="hover:text-blue-700 transition-colors">Hardware</a>
            <a href="#comparison" className="hover:text-blue-700 transition-colors">Comparison</a>
            <a href="#benchmarks" className="hover:text-blue-700 transition-colors">Lab Data</a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
            <a href="#quote" className="px-5 py-2.5 bg-blue-700 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Request Quote
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 focus:outline-none z-50" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden absolute w-full left-0 top-full"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 font-bold text-slate-700 text-center">
                <a href="#why-us" onClick={toggleMobileMenu} className="py-2 border-b border-slate-100">Why Us</a>
                <a href="#prototype" onClick={toggleMobileMenu} className="py-2 border-b border-slate-100">Hardware</a>
                <a href="#comparison" onClick={toggleMobileMenu} className="py-2 border-b border-slate-100">Comparison</a>
                <a href="#benchmarks" onClick={toggleMobileMenu} className="py-2 border-b border-slate-100">Lab Data</a>
                <a href="#faq" onClick={toggleMobileMenu} className="py-2 border-b border-slate-100">FAQ</a>
                <a href="#quote" onClick={toggleMobileMenu} className="py-3 bg-blue-700 text-white rounded-lg w-full mt-2">Request Quote</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem]"></div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-blue-600/20 blur-[80px] sm:blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 mb-6">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full">
                Patented Technology
              </span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full">
                WHO Standard Compliant
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1]">
              Industrial Seafood Preservation, <span className="text-blue-500 block sm:inline">Automated.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
              Eliminate unpredictable weather and health hazards. Our closed-loop, IoT-driven chamber slashes drying times from 7 days down to 8 hours while guaranteeing zero heavy metal bioaccumulation.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a href="#quote" className="w-full sm:w-auto text-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors">
                Calculate Production ROI
              </a>
              <a href="#prototype" className="w-full sm:w-auto text-center px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                Explore the Hardware
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative hidden sm:block">
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-tr from-slate-800 to-slate-700 rounded-3xl border border-slate-600 shadow-2xl flex flex-col items-center justify-center p-8 group">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-xs sm:text-sm text-center">Main Chamber Render</span>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-2 text-center max-w-xs">Insert your high-res image of the foil-lined enclosed drying chamber here.</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Live Impact Stats Bar */}
      <div className="bg-blue-700 text-white border-y border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center divide-x-0 md:divide-x divide-blue-600">
          <div className="border-r border-blue-600 md:border-r-0 pr-4 md:pr-0">
            <div className="text-2xl sm:text-3xl font-black mb-1">8-10 Hrs</div>
            <div className="text-blue-200 text-xs sm:text-sm font-medium">Rapid Drying Cycle</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black mb-1">52°C-55°C</div>
            <div className="text-blue-200 text-xs sm:text-sm font-medium">Precision Target Heat</div>
          </div>
          <div className="border-r border-blue-600 md:border-r-0 pr-4 md:pr-0 border-t border-blue-600 md:border-t-0 pt-6 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black mb-1">100%</div>
            <div className="text-blue-200 text-xs sm:text-sm font-medium">Pathogen Protection</div>
          </div>
          <div className="border-t border-blue-600 md:border-t-0 pt-6 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black mb-1">&lt;36%</div>
            <div className="text-blue-200 text-xs sm:text-sm font-medium">Moisture Shutoff</div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 text-slate-900">Why Upgrade to TechnoBiz?</h2>
            <p className="text-base sm:text-lg text-slate-600">Scaling commercial production requires consistency. We engineered the unpredictability out of the equation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Eliminates WHO Health Risks</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Traditional sun drying exposes seafood to atmospheric dust, bird droppings, and toxic heavy metal bioaccumulation (lead/cadmium) exceeding WHO limits. Our enclosed hygienic chamber entirely mitigates this.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Prevents 'Case Hardening'</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Passive solar dryers lack environmental control, causing the outer muscle to overcook while trapping inner moisture, which leads to rotting. Our dynamic exhaust fans actively eject humidity to ensure uniform drying.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">80% Cycle Time Reduction</h3>
              <p className="text-slate-600 leading-relaxed text-sm">What used to take 4 to 7 weather-dependent days now takes a predictable 8 to 10 hours. This guarantees continuous 365-day operation regardless of monsoon seasons or cloud cover.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Prototype & Hardware Breakdown */}
      <section id="prototype" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">Inside the Hardware</h2>
            <p className="text-base sm:text-lg text-slate-400">A look at the engineered components driving our industrial drying chambers.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm shrink-0">1</span>
                  Enclosed Insulation Core
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed ml-9 sm:ml-11">The physical structure utilizes a closed-chamber design lined with food-grade thermal retention materials. This prevents heat escape while establishing a completely bio-secure perimeter against contaminants.</p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm shrink-0">2</span>
                  Dynamic Actuator Regulation
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed ml-9 sm:ml-11">The ESP32 microcontroller continuously reads from the DHT22 sensors. If temperatures dip below 52°C, heating elements engage. If internal humidity rises, the exhaust fans trigger to pull the moisture out, preventing condensation and rot.</p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm shrink-0">3</span>
                  Mass-Driven Auto-Shutoff
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed ml-9 sm:ml-11">Unlike timer-based systems, our prototype sits on highly sensitive load cells. It tracks the exact weight of the water evaporating. Once the system detects the load has reached the desired target weight (e.g., &lt;36% moisture retention), the ESP32 automatically shuts down all heating elements.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="aspect-square bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase mb-1">ESP32 Core</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">IoT Controller</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-3 sm:p-4 text-center mt-4 sm:mt-8">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase mb-1">DHT22 Array</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Temp/Humid Sensors</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase mb-1">Load Cells</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">Weight Monitoring</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-xl sm:rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-3 sm:p-4 text-center mt-4 sm:mt-8">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase mb-1">Actuators</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400">IR Lamps & Fans</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section id="comparison" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 text-slate-900">Technology Comparison</h2>
            <p className="text-base sm:text-lg text-slate-600">See exactly why our technology outperforms legacy preservation methods in every critical metric.</p>
          </div>

          <div className="flex md:hidden justify-center gap-1 sm:gap-2 mb-8 bg-slate-200 p-1 rounded-lg w-full">
            <button onClick={() => setActiveTab('traditional')} className={`flex-1 py-2 px-1 text-xs sm:text-sm font-bold rounded-md transition-colors ${activeTab === 'traditional' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}>Traditional</button>
            <button onClick={() => setActiveTab('solar')} className={`flex-1 py-2 px-1 text-xs sm:text-sm font-bold rounded-md transition-colors ${activeTab === 'solar' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}>Basic Solar</button>
            <button onClick={() => setActiveTab('smart')} className={`flex-1 py-2 px-1 text-xs sm:text-sm font-bold rounded-md transition-colors ${activeTab === 'smart' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}>TechnoBiz</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex-col ${activeTab === 'traditional' ? 'flex' : 'hidden md:flex'}`}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 text-slate-900">Traditional Open-Sun</h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6 border-b border-slate-100 pb-4">Legacy Method</p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600 flex-1">
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> Weather dependent (3–7 days)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> High risk of insect/fungal infestation</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> Toxic heavy metal bioaccumulation</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> Massive post-harvest losses</li>
              </ul>
            </div>

            <div className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex-col ${activeTab === 'solar' ? 'flex' : 'hidden md:flex'}`}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 text-slate-900">Basic Solar Cabinet</h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6 border-b border-slate-100 pb-4">Passive Technology</p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600 flex-1">
                <li className="flex gap-3"><span className="text-amber-500 font-bold shrink-0">!</span> Weather reliant (requires intense sun)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> No automated environmental feedback</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> Severe "Case Hardening" risk (50°C)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold shrink-0">✗</span> Traps moisture internally</li>
              </ul>
            </div>

            <div className={`bg-blue-50 rounded-2xl border-2 border-blue-600 p-6 sm:p-8 shadow-lg flex-col relative transform md:-translate-y-4 ${activeTab === 'smart' ? 'flex' : 'hidden md:flex'}`}>
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">The Solution</div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 text-blue-900">TechnoBiz System</h3>
              <p className="text-blue-600 text-xs sm:text-sm mb-6 border-b border-blue-200 pb-4">Active IoT Automation</p>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium flex-1">
                <li className="flex gap-3"><span className="text-blue-600 font-bold shrink-0">✓</span> 8-10 hour guaranteed rapid cycle</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold shrink-0">✓</span> 100% enclosed hygienic chamber</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold shrink-0">✓</span> Auto 52°C-55°C heat regulation</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold shrink-0">✓</span> Live IoT dashboard telemetry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lab-Verified Benchmarks */}
      <section id="benchmarks" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900">Lab-Verified Benchmarks</h2>
            <p className="text-base sm:text-lg text-slate-600">
              Rigorous comparative trials prove the system's capacity to maintain precise thermal environments while aggressively cutting production times.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm relative w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-full">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-xs sm:text-sm uppercase tracking-wider font-bold">
                    <th className="p-4 sm:p-6 border-b border-slate-200">Trial Configuration</th>
                    <th className="p-4 sm:p-6 border-b border-slate-200">Temp Target</th>
                    <th className="p-4 sm:p-6 border-b border-slate-200">Initial Mass</th>
                    <th className="p-4 sm:p-6 border-b border-slate-200">Final Yield</th>
                    <th className="p-4 sm:p-6 border-b border-slate-200">Total Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-800 font-medium text-sm">
                  <tr className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <td className="p-4 sm:p-6 font-bold flex items-center gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shrink-0"></span> Trial 1 (1 tbsp salt)
                    </td>
                    <td className="p-4 sm:p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                    <td className="p-4 sm:p-6 text-slate-500">250g</td>
                    <td className="p-4 sm:p-6 text-teal-600 font-black">50.0g</td>
                    <td className="p-4 sm:p-6">7.5 hrs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                    <td className="p-4 sm:p-6 font-bold flex items-center gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shrink-0"></span> Trial 2 (No salt)
                    </td>
                    <td className="p-4 sm:p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                    <td className="p-4 sm:p-6 text-slate-500">250g</td>
                    <td className="p-4 sm:p-6 text-teal-600 font-black">42.8g</td>
                    <td className="p-4 sm:p-6">8.0 hrs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-6 font-bold flex items-center gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shrink-0"></span> Trial 3 (1/4 tsp salt)
                    </td>
                    <td className="p-4 sm:p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                    <td className="p-4 sm:p-6 text-slate-500">250g</td>
                    <td className="p-4 sm:p-6 text-teal-600 font-black">46.5g</td>
                    <td className="p-4 sm:p-6">8.0 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="block sm:hidden text-center py-2 text-xs text-slate-400 bg-slate-50 rounded-b-2xl border-t border-slate-100">
              Swipe table to view all data ↔
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form & FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 sm:gap-16">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-2 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">Everything you need to know about scaling up with TechnoBiz.</p>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { q: "How much power does the system consume?", a: "The system is highly energy efficient. It utilizes an intelligent ESP32 core that only activates heating elements or exhaust fans when the internal sensors dictate, preventing continuous power draw." },
                { q: "Is the system easy to clean?", a: "Yes. The enclosed chamber is lined with food-grade materials that are easily wiped down, ensuring zero cross-contamination between batches." },
                { q: "Do I need technical knowledge to operate it?", a: "Not at all. The entire workflow is automated. You load the product, use the web dashboard to input your target mass/moisture percentage, and the system automatically stops when the target is hit." },
                { q: "Is the system compliant with international health standards?", a: "Yes. By completely enclosing the drying process, it eliminates the heavy metal bioaccumulation (like lead and cadmium) that commonly causes open-sun dried fish to exceed WHO safety limits." }
              ].map((faq, index) => (
                <div key={index} className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left px-4 sm:px-6 py-4 font-bold flex justify-between items-center hover:bg-slate-700/50 transition-colors text-sm sm:text-base"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-blue-500 text-xl leading-none shrink-0">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 sm:px-6 pb-4 text-slate-400 text-xs sm:text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div id="quote" className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black mb-2">Request a Commercial Quote</h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8">Get pricing on individual units or large-scale fleet deployments for processing plants.</p>
            
            {formStatus === 'success' ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Request Received</h4>
                <p className="text-slate-500 text-sm">Our sales team will contact you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-blue-600 font-bold text-sm hover:underline">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">First Name</label>
                    <input required type="text" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Last Name</label>
                    <input required type="text" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Organization Name</label>
                  <input required type="text" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Email Address</label>
                  <input required type="email" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Estimated Daily Volume</label>
                  <select className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm text-slate-700">
                    <option>Under 100 kg</option>
                    <option>100 - 500 kg</option>
                    <option>500 - 2,000 kg</option>
                    <option>2,000+ kg (Enterprise fleet)</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-colors flex justify-center items-center gap-2 text-sm sm:text-base"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...</span>
                  ) : "Get Pricing Details"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Research Credits */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src="/logo.png" alt="TechnoBiz Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
              <span className="font-bold tracking-tight text-white text-sm sm:text-base">
                TechnoBiz
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
              Pioneering the future of food security and preservation through IoT automation.
            </p>
            <p className="text-[10px] sm:text-xs leading-relaxed">
              <strong>Core Development Team:</strong> J. Emima Rose, R. Aashika, A. Angelin Sweety, E. Alrin Jaswa (Dept. of Electronics And Communication Engineering, Rohini College Of Engineering And Technology).
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Supported Research</h4>
            <ul className="text-[10px] sm:text-xs space-y-2 sm:space-y-3 leading-relaxed">
              <li>
                <strong className="text-slate-300">1.</strong> Priyadharshini, M., Ahmed, M. S., et al. (2023). "Human health risk assessment due to consumption of dried fish in Chennai, Tamil Nadu, India: a baseline report." Environmental Science and Pollution Research, 30, 68672–68685.
              </li>
              <li>
                <strong className="text-slate-300">2.</strong> Alvinika, Y., Setyohadi, B., et al. (2021). "IoT-Based Monitoring and Design of Automatic Fish Drying Equipment Using Fuzzy Logic." IOP Conference Series: Earth and Environmental Science.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 text-center pt-8 text-[10px] sm:text-xs text-slate-600 px-4">
          <p>© {new Date().getFullYear()} TechnoBiz. All rights reserved. Patented technology.</p>
        </div>
      </footer>
    </div>
  );
}