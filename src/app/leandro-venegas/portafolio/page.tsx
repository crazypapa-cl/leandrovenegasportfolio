import Link from 'next/link';
import { Metadata } from 'next';
import { getProcessedData } from '../../lib/loader/data-loader';
import { Container } from '@/components/ui/Container';
import { H1, H2 } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
    title: "Portafolio | Leandro Venegas",
    description: "Explora los proyectos de marketing, SEO y producción audiovisual de Leandro Venegas.",
};

export default async function Portafolio() {
    const { proyectos } = getProcessedData();

    return (
        <Container className="py-20 min-h-screen">
            <H1 className="text-center mb-12">Portafolio</H1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectos.map((proyecto) => (
                    <Link href={`/leandro-venegas/portafolio/${proyecto.id}`} key={proyecto.id} className="block group">
                        <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-indigo-500 transition-colors shadow-lg hover:shadow-indigo-500/20">
                            <H2 className="text-xl mb-2 group-hover:text-indigo-400 transition-colors">{proyecto.nombre}</H2>
                            <p className="text-gray-400">{proyecto.anio}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
}