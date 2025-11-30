import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { H1, H2, Paragraph } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Perfil Profesional | Leandro Venegas",
  description: "Perfil profesional de Leandro Venegas, Productor Creativo en Marketing y Multimedia.",
};

export default function PerfilProfesionalPage() {
  return (
    <Container className="py-20 flex flex-col items-center min-h-screen">
      <H1 className="text-center mb-8">Perfil Profesional</H1>

      <div className="max-w-2xl text-center space-y-8">
        <Paragraph>
          Productor Creativo en Marketing y Multimedia con experiencia en campañas digitales,
          producción audiovisual, diseño gráfico y gestión de eventos culturales.
          Combino creatividad, estrategia y tecnología para desarrollar proyectos innovadores
          que conectan con audiencias y generan impacto.
        </Paragraph>

        <div className="space-y-4">
          <H2>Idiomas</H2>
          <Paragraph>Español nativo | Inglés intermedio</Paragraph>
        </div>
      </div>
    </Container>
  );
}
