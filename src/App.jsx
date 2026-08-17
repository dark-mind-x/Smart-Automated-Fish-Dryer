import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommercialLandingPage() {
  const [activeTab, setActiveTab] = useState('traditional');
  const [activeFaq, setActiveFaq] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      
      {/* Navigation Bar */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              SmartDryer<span className="text-blue-700">Pro</span>
            </span>
          </div>
          <div className="hidden lg:flex space-x-8 text-sm font-bold text-slate-600">
            <a href="#why-us" className="hover:text-blue-700 transition-colors">Why Us</a>
            <a href="#prototype" className="hover:text-blue-700 transition-colors">Hardware</a>
            <a href="#comparison" className="hover:text-blue-700 transition-colors">Comparison</a>
            <a href="#benchmarks" className="hover:text-blue-700 transition-colors">Lab Data</a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
          </div>
          <a href="#quote" className="px-5 py-2.5 bg-blue-700 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Request Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden py-24 md:py-32">
        {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div> */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-widest rounded-full">
                Patented Technology
              </span>
              <span className="px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold uppercase tracking-widest rounded-full">
                WHO Standard Compliant
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Industrial Seafood Preservation, <span className="text-blue-500">Automated.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed mb-10">
              Eliminate unpredictable weather and health hazards. Our closed-loop, IoT-driven chamber slashes drying times from 7 days down to 8 hours while guaranteeing zero heavy metal bioaccumulation.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#quote" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors">
                Calculate Production ROI
              </a>
              <a href="#prototype" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                Explore the Hardware
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/3] bg-gradient-to-tr from-slate-800 to-slate-700 rounded-3xl border border-slate-600 shadow-2xl flex flex-col items-center justify-center p-8 group">
              <svg className="w-16 h-16 text-slate-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Main Chamber Render</span>
              <p className="text-slate-500 text-xs mt-2 text-center max-w-xs">Insert your high-res image of the foil-lined enclosed drying chamber here.</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Live Impact Stats Bar */}
      <div className="bg-blue-700 text-white border-y border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-blue-600">
          <div>
            <div className="text-3xl font-black mb-1">8-10 Hrs</div>
            <div className="text-blue-200 text-sm font-medium">Rapid Drying Cycle</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">52°C-55°C</div>
            <div className="text-blue-200 text-sm font-medium">Precision Target Heat</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">100%</div>
            <div className="text-blue-200 text-sm font-medium">Protection from Pathogens</div>
          </div>
          <div>
            <div className="text-3xl font-black mb-1">&lt;36%</div>
            <div className="text-blue-200 text-sm font-medium">Moisture Auto-Shutoff</div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6 text-slate-900">Why Upgrade to SmartDryer Pro?</h2>
            <p className="text-lg text-slate-600">Scaling commercial production requires consistency. We engineered the unpredictability out of the equation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Eliminates WHO Health Risks</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Traditional sun drying exposes seafood to atmospheric dust, bird droppings, and toxic heavy metal bioaccumulation (lead/cadmium) exceeding WHO limits. Our enclosed hygienic chamber entirely mitigates this.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Prevents 'Case Hardening'</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Passive solar dryers lack environmental control, causing the outer muscle to overcook while trapping inner moisture, which leads to rotting. Our dynamic exhaust fans actively eject humidity to ensure uniform drying.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">80% Cycle Time Reduction</h3>
              <p className="text-slate-600 leading-relaxed text-sm">What used to take 4 to 7 weather-dependent days now takes a predictable 8 to 10 hours. This guarantees continuous 365-day operation regardless of monsoon seasons or cloud cover.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Prototype & Hardware Breakdown */}
      <section id="prototype" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6">Inside the Hardware</h2>
            <p className="text-lg text-slate-400">A look at the engineered prototype components driving the SmartDryer Pro.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual breakdown layout */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-4 text-center">
                <svg className="w-8 h-8 text-teal-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                <span className="text-xs font-bold text-white uppercase mb-1">ESP32 Compute Core</span>
                <span className="text-[10px] text-slate-400">IoT Controller</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-4 text-center mt-8">
                <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <span className="text-xs font-bold text-white uppercase mb-1">DHT22 Array</span>
                <span className="text-[10px] text-slate-400">Temp/Humid Sensors</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-4 text-center">
                <svg className="w-8 h-8 text-orange-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                <span className="text-xs font-bold text-white uppercase mb-1">Live Load Cells</span>
                <span className="text-[10px] text-slate-400">Weight Monitoring</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-4 text-center mt-8">
                <svg className="w-8 h-8 text-red-400 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>
                <span className="text-xs font-bold text-white uppercase mb-1">Thermal Actuators</span>
                <span className="text-[10px] text-slate-400">IR Lamps & Fans</span>
              </div>
            </div>

            {/* Spec details */}
            <div className="space-y-10">
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                  Enclosed Insulation Core
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">The physical structure utilizes a closed-chamber design lined with food-grade thermal retention materials. This prevents heat escape while establishing a completely bio-secure perimeter against contaminants.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                  Dynamic Actuator Regulation
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">The ESP32 microcontroller continuously reads from the DHT22 sensors. If temperatures dip below 52°C, heating elements engage. If internal humidity rises, the exhaust fans trigger to pull the moisture out, preventing condensation and rot.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-sm">3</span>
                  Mass-Driven Auto-Shutoff
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">Unlike timer-based systems, our prototype sits on highly sensitive load cells. It tracks the exact weight of the water evaporating. Once the system detects the load has reached the desired target weight (e.g., &lt;36% moisture retention), the ESP32 automatically shuts down all heating elements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section id="comparison" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-6 text-slate-900">Technology Comparison</h2>
            <p className="text-lg text-slate-600">See exactly why the SmartDryer Pro outperforms legacy preservation methods in every critical metric.</p>
          </div>

          {/* Interactive Toggle for Mobile, Side-by-Side for Desktop */}
          <div className="flex md:hidden justify-center gap-2 mb-8 bg-slate-200 p-1 rounded-lg w-full max-w-sm mx-auto">
            <button onClick={() => setActiveTab('traditional')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'traditional' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}>Traditional</button>
            <button onClick={() => setActiveTab('solar')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'solar' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}>Basic Solar</button>
            <button onClick={() => setActiveTab('smart')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'smart' ? 'bg-blue-600 text-white shadow' : 'text-slate-500'}`}>SmartDryer</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex-col ${activeTab === 'traditional' || 'hidden md:flex'}`}>
              <h3 className="text-xl font-bold mb-1 text-slate-900">Traditional Open-Sun</h3>
              <p className="text-slate-500 text-sm mb-6 border-b border-slate-100 pb-4">Legacy Method</p>
              <ul className="space-y-4 text-sm text-slate-600 flex-1">
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> Weather dependent (3–7 days)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> High risk of insect/fungal infestation</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> Toxic heavy metal bioaccumulation</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> Massive post-harvest losses</li>
              </ul>
            </div>

            <div className={`bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex-col ${activeTab === 'solar' || 'hidden md:flex'}`}>
              <h3 className="text-xl font-bold mb-1 text-slate-900">Basic Solar Cabinet</h3>
              <p className="text-slate-500 text-sm mb-6 border-b border-slate-100 pb-4">Passive Technology</p>
              <ul className="space-y-4 text-sm text-slate-600 flex-1">
                <li className="flex gap-3"><span className="text-amber-500 font-bold">!</span> Weather reliant (requires intense sun)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> No automated environmental feedback</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> Severe "Case Hardening" risk (50°C)</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span> Traps moisture internally</li>
              </ul>
            </div>

            <div className={`bg-blue-50 rounded-2xl border-2 border-blue-600 p-8 shadow-lg flex-col relative transform md:-translate-y-4 ${activeTab === 'smart' || 'hidden md:flex'}`}>
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">The Solution</div>
              <h3 className="text-xl font-bold mb-1 text-blue-900">SmartDryer Pro</h3>
              <p className="text-blue-600 text-sm mb-6 border-b border-blue-200 pb-4">Active IoT Automation</p>
              <ul className="space-y-4 text-sm text-slate-700 font-medium flex-1">
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span> 8-10 hour guaranteed rapid cycle</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span> 100% enclosed hygienic chamber</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span> Auto 52°C-55°C heat regulation</li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">✓</span> Live IoT dashboard telemetry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lab-Verified Benchmarks */}
      <section id="benchmarks" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-4 text-slate-900">Lab-Verified Benchmarks</h2>
            <p className="text-slate-600 text-lg">
              Rigorous comparative trials prove the SmartDryer Pro's capacity to maintain precise thermal environments while aggressively cutting production times.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider font-bold">
                  <th className="p-6 border-b border-slate-200">Trial Configuration</th>
                  <th className="p-6 border-b border-slate-200">Temp Target</th>
                  <th className="p-6 border-b border-slate-200">Initial Mass</th>
                  <th className="p-6 border-b border-slate-200">Final Yield</th>
                  <th className="p-6 border-b border-slate-200">Total Duration</th>
                </tr>
              </thead>
              <tbody className="text-slate-800 font-medium">
                <tr className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                  <td className="p-6 font-bold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Trial 1 (1 tbsp salt)
                  </td>
                  <td className="p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-6 text-slate-500">250g</td>
                  <td className="p-6 text-teal-600 font-black">50.0g</td>
                  <td className="p-6">7.5 hrs</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors border-b border-slate-100">
                  <td className="p-6 font-bold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Trial 2 (No salt)
                  </td>
                  <td className="p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-6 text-slate-500">250g</td>
                  <td className="p-6 text-teal-600 font-black">42.8g</td>
                  <td className="p-6">8.0 hrs</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Trial 3 (1/4 tsp salt)
                  </td>
                  <td className="p-6 text-blue-600 font-bold bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-6 text-slate-500">250g</td>
                  <td className="p-6 text-teal-600 font-black">46.5g</td>
                  <td className="p-6">8.0 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Form & FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* FAQ Accordion */}
          <div>
            <h2 className="text-3xl font-black mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-400 mb-8">Everything you need to know about scaling up with SmartDryer Pro.</p>
            
            <div className="space-y-4">
              {[
                { q: "How much power does the system consume?", a: "The system is highly energy efficient. It utilizes an intelligent ESP32 core that only activates heating elements or exhaust fans when the internal sensors dictate, preventing continuous power draw." },
                { q: "Is the system easy to clean?", a: "Yes. The enclosed chamber is lined with food-grade materials that are easily wiped down, ensuring zero cross-contamination between batches." },
                { q: "Do I need technical knowledge to operate it?", a: "Not at all. The entire workflow is automated. You load the product, use the React web dashboard to input your target mass/moisture percentage, and the system automatically stops when the target is hit." },
                { q: "Is the SmartDryer compliant with international health standards?", a: "Yes. By completely enclosing the drying process, it eliminates the heavy metal bioaccumulation (like lead and cadmium) that commonly causes open-sun dried fish to exceed WHO safety limits." }
              ].map((faq, index) => (
                <div key={index} className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-slate-700/50 transition-colors"
                  >
                    {faq.q}
                    <span className="text-blue-500 text-xl leading-none">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-slate-400 text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Quote Form */}
          <div id="quote" className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black mb-2">Request a Commercial Quote</h3>
            <p className="text-slate-500 text-sm mb-8">Get pricing on individual units or large-scale fleet deployments for processing plants.</p>
            
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Organization / Processing Plant Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Estimated Production Volume (Daily Kg)</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-700">
                    <option>Under 100 kg</option>
                    <option>100 - 500 kg</option>
                    <option>500 - 2,000 kg</option>
                    <option>2,000+ kg (Enterprise fleet)</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center gap-2"><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...</span>
                  ) : "Get Pricing Details"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Research Credits */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="font-bold tracking-tight text-white">
                SmartDryer<span className="text-blue-500">Pro</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Pioneering the future of food security and preservation through IoT automation.
            </p>
            <p className="text-xs">
              <strong>Core Development Team:</strong> J. Emima Rose, R. Aashika, A. Angelin Sweety, E. Alrin Jaswa (Dept. of Electronics And Communication Engineering, Rohini College Of Engineering And Technology).
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Supported Research</h4>
            <ul className="text-xs space-y-3 leading-relaxed">
              <li>
                <strong className="text-slate-300">1.</strong> Priyadharshini, M., Ahmed, M. S., et al. (2023). "Human health risk assessment due to consumption of dried fish in Chennai, Tamil Nadu, India: a baseline report." Environmental Science and Pollution Research, 30, 68672–68685.
              </li>
              <li>
                <strong className="text-slate-300">2.</strong> Alvinika, Y., Setyohadi, B., et al. (2021). "IoT-Based Monitoring and Design of Automatic Fish Drying Equipment Using Fuzzy Logic." IOP Conference Series: Earth and Environmental Science.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 text-center pt-8 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} SmartDryer Technologies. All rights reserved. Patented technology.</p>
        </div>
      </footer>
    </div>
  );
}