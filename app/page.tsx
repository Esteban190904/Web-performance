"use client"; // Necesario para las animaciones de Framer Motion

import { ArrowRight, Zap, Search, BarChart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Auditoría SEO Técnica y Desarrollo Web',
    'description': 'Optimización de Core Web Vitals y arquitectura moderna con Next.js.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'TechAudit Pro',
    },
    'areaServed': 'Worldwide'
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Script de Datos Estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Impulsado por IA & SEO Técnico
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600"
          >
            Páginas que cargan en <span className="text-blue-600">milisegundos.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-600 mb-10"
          >
            No solo construimos sitios web; creamos activos digitales optimizados para Google que convierten visitantes en clientes de alto valor.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
              Auditoría Gratuita <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Ver Portafolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Performance", value: "100%" },
              { label: "Accessibility", value: "100%" },
              { label: "Best Practices", value: "100%" },
              { label: "SEO Score", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600">{stat.value}</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <Search className="text-white" />,
                title: "SEO On-Page",
                desc: "Estructura semántica avanzada y metadatos dinámicos para dominar los buscadores."
              },
              {
                icon: <Zap className="text-white" />,
                title: "Web Performance",
                desc: "Puntajes máximos en Lighthouse garantizando la mejor experiencia de usuario y retención."
              },
              {
                icon: <BarChart className="text-white" />,
                title: "Core Web Vitals",
                desc: "Optimización técnica profunda (LCP, FID, CLS) siguiendo los estándares de Google 2026."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                <div className="p-3 bg-blue-600 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Strategy Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-8">Arquitectura enfocada en el rastreo</h2>
            <div className="space-y-6">
              {[
                "Renderizado del lado del servidor (SSR) para indexación inmediata.",
                "Optimización de imágenes con formatos de última generación.",
                "Jerarquía de encabezados lógica y semántica HTML5.",
                "Implementación de datos estructurados para Rich Snippets."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-blue-400" size={24} />
                  <p className="text-slate-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-2xl font-mono text-sm leading-relaxed overflow-x-auto">
             <p className="text-blue-400"> Auditoría SEO Técnica 2026</p>
             <p className="text-purple-400 mt-2">export const metadata = {'{'}</p>
             <p className="ml-4 text-white">title: <span className="text-green-400">Páginas Optimizadas</span>,</p>
             <p className="ml-4 text-white">description: <span className="text-green-400 text-wrap">High performance web apps...</span>,</p>
             <p className="ml-4 text-white">robots: <span className="text-green-400">index, follow</span>,</p>
             <p className="ml-4 text-white">viewport: <span className="text-green-400">width=device-width</span>,</p>
             <p className="text-purple-400">{'}'};</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-left">
              <h4 className="font-bold text-xl mb-4">TechAudit Pro</h4>
              <p className="text-slate-500 max-w-xs">Elevando el estándar del desarrollo web con enfoque en resultados orgánicos y velocidad extrema.</p>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-4">Especialidades</h4>
              <ul className="text-slate-500 space-y-2">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Optimización Next.js</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">SEO para SaaS</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Arquitectura Supabase</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-slate-500">¿Tienes un proyecto en mente? Hablemos de cómo escalar tu presencia digital hoy mismo.</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-50 text-slate-400 text-sm">
            © 2026 Desarrollado con Next.js 15, Tailwind CSS .
          </div>
        </div>
      </footer>
    </main>
  );
}