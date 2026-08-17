import React from 'react';

export default function ProjectPortfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
            SmartDryer IoT
          </span>
          <div className="space-x-8 text-sm font-semibold text-slate-600 hidden md:block">
            <a href="#abstract" className="hover:text-blue-600 transition-colors">Abstract</a>
            <a href="#gap-analysis" className="hover:text-blue-600 transition-colors">Literature Review</a>
            <a href="#methodology" className="hover:text-blue-600 transition-colors">Methodology</a>
            <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
          </div>
        </div>
      </nav>

      {/* Hero Section (Upgraded UI with gradient and background pattern) */}
      <header className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
            IoT-Based Food Safety & Hygiene Optimization
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
            Design and Implementation of a <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-600">
              Smart Automated Fish Dryer
            </span>
          </h1>
          
          {/* Glassmorphic Authors Card */}
          <div className="bg-white/60 backdrop-blur-lg border border-slate-200 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl shadow-slate-200/50">
            <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mb-4 font-bold">Research & Development Team</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-bold text-slate-800 text-lg mb-6">
              <span>J. Emima Rose</span>
              <span>R. Aashika</span>
              <span>A. Angelin Sweety</span>
              <span>E. Alrin Jaswa</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-sm text-slate-600 font-medium">
              Department of Electronics And Communication Engineering<br/>
              Rohini College Of Engineering And Technology
            </p>
            <p className="text-xs text-slate-400 mt-2 font-semibold">July 2026</p>
          </div>
        </div>
      </header>

      {/* Abstract Section */}
      <section id="abstract" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-slate-900">The Core Problem</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Coastal economies rely heavily on fish preservation, but traditional open-sun drying exposes food to extreme health hazards, including heavy metal bioaccumulation that exceeds WHO limits, atmospheric dust, and insect infestation.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-2 rounded-lg text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Weather Dependency</h4>
                  <p className="text-slate-600 text-sm mt-1">Traditional drying takes 3 to 7 days and suffers massive post-harvest losses during monsoon seasons.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Case Hardening</h4>
                  <p className="text-slate-600 text-sm mt-1">Basic passive solar dryers lack environmental control, causing the outer muscle to overcook while inner flesh rots.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">Our IoT Solution</h3>
            <p className="text-blue-100 leading-relaxed mb-8 relative z-10">
              We developed a Smart Automated Fish Dryer featuring a closed, hygienic chamber with precise sensor feedback to completely eliminate weather dependency and chemical preservative usage.
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="font-medium text-slate-200">Reduces drying time down to 8–10 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="font-medium text-slate-200">Automated 52°C - 55°C heat regulation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="font-medium text-slate-200">Zero exposure to external bio-contaminants</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Literature Review / Gap Analysis */}
      <section id="gap-analysis" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Literature Review & Gap Analysis</h2>
            <p className="text-slate-600">Existing solutions fail to provide a balance between affordability, hygiene, and environmental control. Here is how our proposed system compares.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Traditional Open-Sun</h3>
              <p className="text-red-600 text-sm font-bold mb-4">Methodology Limitation</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Extreme health risks (heavy metals, dust, pathogens). Requires 3–7 days drying time and is entirely weather dependent.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">Ref: Priydharshini et al. (2023)</div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Basic Solar Dryers</h3>
              <p className="text-orange-600 text-sm font-bold mb-4">Methodology Limitation</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                No automated feedback control. Frequently causes "case hardening" where the outer muscle overcooks while inner flesh rots.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium">Ref: Alvinika et al. (2021)</div>
            </div>

            <div className="border-2 border-teal-500 rounded-2xl p-8 bg-teal-50 shadow-lg relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Proposed</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Smart Automated Dryer</h3>
              <p className="text-teal-600 text-sm font-bold mb-4">Project Solution</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Enclosed hygienic chamber with dynamic temperature/humidity control. Features IoT monitoring, making it cost-effective and rapid.
              </p>
              <div className="mt-auto pt-4 border-t border-teal-200 text-xs text-teal-700 font-bold">Ref: RCET Project Research (2026)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Hardware Architecture */}
      <section id="methodology" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">System Architecture</h2>
            <p className="text-slate-400 max-w-2xl text-lg">A robust integration of microcontroller logic, precise sensor feedback, and automated thermal actuators.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Microcontroller Core</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Powered by an ESP32/Arduino microcontroller handling complex algorithmic flowcharts to maintain 52°C and optimal humidity, pushing data to an IoT Dashboard for mobile tracking.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-500/30">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Sensor Array</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Integrated DHT22 for ambient temperature and humidity tracking, alongside precision Load Cells / Weight Sensors to automatically trigger shut-off when moisture reaches &lt;36%.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Automated Actuators</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Heating elements and IR Lamps provide continuous thermal energy, while servo-motor controlled exhaust fans dynamically eject humidity to prevent internal condensation.</p>
                </div>
              </div>
            </div>

            {/* Hardware Image Placeholders */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center hover:bg-slate-750 transition-colors">
                <svg className="w-10 h-10 text-slate-600 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="text-sm font-medium text-slate-400">Insert Hardware Chamber Image</span>
              </div>
              <div className="aspect-square bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center hover:bg-slate-750 transition-colors mt-8">
                <svg className="w-10 h-10 text-slate-600 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="text-sm font-medium text-slate-400">Insert Load Cell & Sensor Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experimental Results Section */}
      <section id="results" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Experimental Results</h2>
            <p className="text-slate-600">
              Extensive trials demonstrate the efficacy of sensor feedback in maintaining steady chamber conditions, drastically reducing drying duration while preserving physical appearance and hygiene.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider font-bold">
                  <th className="p-5 border-b border-slate-200">Trial Phase</th>
                  <th className="p-5 border-b border-slate-200">Maintained Temp</th>
                  <th className="p-5 border-b border-slate-200">Initial Mass</th>
                  <th className="p-5 border-b border-slate-200">Final Mass</th>
                  <th className="p-5 border-b border-slate-200">Drying Duration</th>
                  <th className="p-5 border-b border-slate-200">Salt Content</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-b border-slate-100 font-bold text-slate-900">Trial 1</td>
                  <td className="p-5 border-b border-slate-100 text-blue-600 bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-5 border-b border-slate-100">250g</td>
                  <td className="p-5 border-b border-slate-100 font-bold text-teal-600">50.0g</td>
                  <td className="p-5 border-b border-slate-100">7.5 hrs</td>
                  <td className="p-5 border-b border-slate-100 text-slate-500">1 tbsp</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors bg-slate-50/30">
                  <td className="p-5 border-b border-slate-100 font-bold text-slate-900">Trial 2</td>
                  <td className="p-5 border-b border-slate-100 text-blue-600 bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-5 border-b border-slate-100">250g</td>
                  <td className="p-5 border-b border-slate-100 font-bold text-teal-600">42.8g</td>
                  <td className="p-5 border-b border-slate-100">8.0 hrs</td>
                  <td className="p-5 border-b border-slate-100 text-slate-500">No salt</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-900">Trial 3</td>
                  <td className="p-5 text-blue-600 bg-blue-50/50">52°C - 55°C</td>
                  <td className="p-5">250g</td>
                  <td className="p-5 font-bold text-teal-600">46.5g</td>
                  <td className="p-5">8.0 hrs</td>
                  <td className="p-5 text-slate-500">1/4 tsp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer & References */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Future Scope</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Future development iterations aim to integrate AI and Computer Vision frameworks for automatic mold detection, alongside solar-battery hybrid backup systems for complete grid independence and sustainability in remote coastal regions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Supporting References</h4>
            <ul className="text-slate-400 text-xs space-y-3 leading-relaxed">
              <li>
                <strong className="text-slate-300">1.</strong> Priyadharshini, M., Ahmed, M. S., et al. (2023). "Human health risk assessment due to consumption of dried fish in Chennai, Tamil Nadu, India: a baseline report." <em>Environmental Science and Pollution Research</em>, 30, 68672–68685.
              </li>
              <li>
                <strong className="text-slate-300">2.</strong> Alvinika, Y., Setyohadi, B., et al. (2021). "IoT-Based Monitoring and Design of Automatic Fish Drying Equipment Using Fuzzy Logic." <em>IOP Conference Series: Earth and Environmental Science</em>.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 text-center pt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Rohini College Of Engineering And Technology. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}