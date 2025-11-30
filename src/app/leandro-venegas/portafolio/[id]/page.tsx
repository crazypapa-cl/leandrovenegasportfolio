import { Metadata } from 'next';
import { getProcessedData } from '../../../lib/loader/data-loader';
import { Container } from '@/components/ui/Container';
import { H1, H2, Paragraph } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

interface TipoVideo {
    id: string;
    proyectoId: string;
    titulo: string;
    url: string;
    duracionSegundos: number;
    tipo: string;
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const { proyectos } = getProcessedData();
    const proyecto = proyectos.find((p) => p.id === id);

    return {
        title: proyecto ? `${proyecto.nombre} | Portafolio` : 'Proyecto no encontrado',
        description: proyecto ? `Detalles del proyecto ${proyecto.nombre}` : 'Proyecto no encontrado',
    };
}

export default async function Page({ params }: PageProps) {
    const { id: proyectoId } = await params;
    const { proyectos } = getProcessedData();
    const proyecto = proyectos.find((p) => p.id === proyectoId);

    if (!proyecto) {
        return (
            <Container className="py-20 text-center min-h-screen flex flex-col items-center justify-center">
                <H1>Proyecto no encontrado</H1>
                <div className="mt-8">
                    <Button href="/leandro-venegas/portafolio">Volver al Portafolio</Button>
                </div>
            </Container>
        );
    }

    return (
        <Container className="py-20 min-h-screen">
            <div className="mb-8">
                <Button href="/leandro-venegas/portafolio" variant="outline">← Volver</Button>
            </div>

            <H1 className="mb-8 text-center">{proyecto.nombre}</H1>

            <div className="space-y-12">
                {proyecto.video.map((video: TipoVideo) => (
                    <div key={video.id} className="bg-gray-800/50 rounded-2xl p-6 md:p-8 shadow-xl">
                        <H2 className="text-2xl mb-4">{video.titulo}</H2>
                        <div className="flex gap-4 text-sm text-gray-400 mb-6">
                            <span>Duración: {video.duracionSegundos}s</span>
                            <span className="px-2 py-0.5 bg-indigo-900/50 rounded-full text-indigo-300 border border-indigo-500/30">
                                {video.tipo}
                            </span>
                        </div>

                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.url}
                                title={video.titulo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
