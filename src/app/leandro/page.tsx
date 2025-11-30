import { Metadata } from "next";
import Image from "next/image";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ListItem, List } from "@/components/ui/List";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Guía Gratuita: Posiciona tu Negocio en Google Maps | Leandro Venegas",
    description: "Descarga gratis la guía completa para aparecer en los primeros resultados de Google Maps y atraer más clientes a tu negocio local en Valparaíso.",
};

export default function LeandroPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Copy */}
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                                ✨ Guía 100% Gratuita
                            </div>

                            <H1 className="leading-tight">
                                ¿Tu Negocio Está en el Mapa?
                                <span className="block text-indigo-400 mt-2">Descubre Cómo Aparecer Primero</span>
                            </H1>

                            <Paragraph className="text-xl text-gray-300">
                                Descarga la guía completa para posicionar tu negocio local en Google Maps y atraer más clientes que están buscando exactamente lo que ofreces.
                            </Paragraph>

                            {/* Benefits */}
                            <div className="space-y-3 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300">Estrategias probadas para aparecer en el Top 3 del Local Pack</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300">Checklist completo de optimización de Google Business</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300">Casos de éxito de negocios en Valparaíso y Viña del Mar</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div>
                            <LeadForm />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* What You'll Learn Section */}
            <Section className="bg-gray-800/30">
                <Container>
                    <div className="text-center mb-12">
                        <H2 className="mb-4">¿Qué Aprenderás en Esta Guía?</H2>
                        <Paragraph className="text-gray-400 max-w-2xl mx-auto">
                            Todo lo que necesitas saber para dominar Google Maps y atraer más clientes locales
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🎯",
                                title: "Optimización Completa",
                                description: "Cómo configurar tu perfil de Google Business para máxima visibilidad"
                            },
                            {
                                icon: "📸",
                                title: "Contenido Visual",
                                description: "Qué fotos y videos subir para destacar sobre la competencia"
                            },
                            {
                                icon: "⭐",
                                title: "Gestión de Reseñas",
                                description: "Estrategias para conseguir más reseñas positivas de forma ética"
                            },
                            {
                                icon: "📊",
                                title: "Métricas Clave",
                                description: "Qué números debes vigilar y cómo interpretarlos"
                            },
                            {
                                icon: "🚀",
                                title: "Ranking Local",
                                description: "Los factores que Google usa para posicionar tu negocio"
                            },
                            {
                                icon: "💡",
                                title: "Casos Prácticos",
                                description: "Ejemplos reales de negocios que lograron resultados"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Social Proof Section */}
            <Section>
                <Container>
                    <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8 md:p-12 text-center">
                        <H2 className="mb-6">Únete a Cientos de Negocios Locales</H2>
                        <Paragraph className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Negocios en Valparaíso y Viña del Mar ya están usando estas estrategias para aparecer primero en Google Maps y atraer más clientes cada día.
                        </Paragraph>
                        <div className="flex flex-wrap justify-center gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-indigo-400">500+</div>
                                <div className="text-gray-400 mt-1">Descargas</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-400">4.9★</div>
                                <div className="text-gray-400 mt-1">Valoración</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-indigo-400">100%</div>
                                <div className="text-gray-400 mt-1">Gratis</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Final CTA */}
            <Section className="bg-gray-800/30">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <H2 className="mb-4">Descarga Tu Guía Ahora</H2>
                        <Paragraph className="mb-8 text-gray-300">
                            No pierdas más clientes que están buscando en Google Maps. Descarga la guía gratis y empieza a aparecer en los primeros resultados hoy mismo.
                        </Paragraph>
                        <div className="max-w-md mx-auto">
                            <LeadForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
