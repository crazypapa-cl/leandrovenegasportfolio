import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { List, ListItem } from "@/components/ui/List";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { MapIcon } from "@/components/icons/MapIcon";

export const metadata: Metadata = {
  title: "Leandro Venegas | Consultor de Marketing en Google Maps",
  description: "Aumenta la visibilidad de tu negocio local en Google Maps. Auditoría gratuita y estrategias de posicionamiento en Valparaíso y Viña del Mar.",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-gray-900/80 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://css-tianguis.com/wp-content/uploads/2020/03/google-maps-links-1024x546.png"
          alt="Background Map"
          fill
          className="object-cover object-right md:object-center opacity-30"
          unoptimized
        />
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />
      </div>

      <Container>
        <Section className="h-screen flex flex-col justify-center items-center text-center">
          <div className="flex flex-col gap-6 items-center max-w-3xl mx-auto">
            <H1 className="text-shadow-lg/30">¿Tu negocio está en el mapa?</H1>
            <MapIcon className="size-24" />
            <Rating>★★★★★</Rating>
            <H2>y puede estar aún mejor</H2>

            <div className="mt-8 space-y-6">
              <Paragraph>
                El E-book que todo negocio debería leer: para lograr más visibilidad en Google Maps.
              </Paragraph>
              <Button href="/leandro">GRATIS</Button>
              <p className="text-lg text-gray-300 mt-4">
                Más visibilidad, más llamadas, más ventas
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <Link href="/leandro-venegas">
                <Avatar src="./profile.png" alt="Profile Picture" className="shadow-2xl" />
              </Link>
            </div>
            <div className="md:col-span-2 space-y-6">
              <Paragraph>
                Soy <Link href="/leandro-venegas" className="text-indigo-400 hover:text-indigo-300 font-semibold">Leandro Venegas</Link>, consultor de marketing en la quinta región. Quiero mostrarte lo que descubrí sobre visibilidad real en Google usando Google Maps.
              </Paragraph>
              <Paragraph>
                Imagina que somos una persona llegando a Valparaíso y que quiere tomar un buen café. Lo primero que hace es buscar en su celular la palabra "café".
              </Paragraph>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <div className="text-center">
              <Image
                src="/google-business-profile/barra-de-busqueda-google-cafe-local-pack-valparaiso.jpg"
                width={500}
                height={350}
                alt="Búsqueda de cafeterías en Valparaíso"
                className="rounded-lg shadow-lg mx-auto"
              />
              <Paragraph className="mt-4">
                Este resultado se llama <strong>Local Pack</strong> y es increíble. Solo imagina tu negocio apareciendo entre los primeros 3.
              </Paragraph>
            </div>

            <div className="text-center">
              <Image
                src="/google-business-profile/resultados-local-pack-cafe-valparaiso.png"
                width={500}
                height={350}
                alt="Resultados Local Pack"
                className="rounded-lg shadow-lg mx-auto"
              />
              <Paragraph className="mt-4">
                Y luego... ¡Magia! Ya estoy en tu Google Business. Solo falta un poco para convencer a esta persona de ir a tu local.
              </Paragraph>
            </div>

            <div className="text-center">
              <Image
                src="/google-business-profile/resultado-google-my-bussines-local-pack-valparaiso-cafe.jpg"
                width={350}
                height={350}
                alt="Ficha de Google Business"
                className="rounded-lg shadow-lg mx-auto"
              />
              <Paragraph className="mt-4">
                Lo que tienes aquí es un lead calificado.  puedes agendar una cita por llamada telefónica o un pedido.
              </Paragraph>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image
                src="/google-business-profile/resultado-google-my-bussines-local-pack-valparaiso-icono-como-llegar.jpg"
                width={180}
                height={180}
                alt="Icono cómo llegar"
                className="rounded-full shadow-lg"
              />
              <Paragraph>
                 No ignores esto: una parte importante de las llamadas y visitas que reciben las tiendas hoy viene directamente desde Google Maps. 
              </Paragraph>
              <Rating>★★★★★</Rating>
              <Paragraph>Déjame contarte —sin vueltas— cómo puedes aprovecharlo tú también y dejar de perder los clientes que están en la calle buscando negocios en sus celulares.</Paragraph>
            </div>
            <div className="text-center space-y-6">
              <Paragraph>
                Te invito a descargar mi libro electrónico completamente gratis. Es un Check List de todo lo que necesitas para poder rankear en las primeras búsquedas con tu negocio local.
              </Paragraph>
              <Image
                src="/google-business-profile/Gemini_Generated_Image_intvqtintvqtintv.png"
                width={250}
                height={250}
                alt="E-book cover"
                className="rounded-lg shadow-lg mx-auto"
              />
              <Button href="/leandro">GRATIS</Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="space-y-8 text-center max-w-4xl mx-auto">
            <Paragraph className="font-bold text-white">
              📍 La decisión de compra local ocurre en Google Maps.
            </Paragraph>
            <Paragraph>
              Cuando alguien busca “tienda en Valparaíso”, Google elige qué mostrar. Si tu negocio no está en el Top 3, simplemente queda fuera del mapa. Y no es tu culpa. Google nunca explicó cómo funciona. Nosotros sí.
            </Paragraph>
          </div>
        </Section>
        <Section>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <H2>Aquí está la oportunidad que casi nadie está aprovechando.</H2>
            <Paragraph>
              Durante los últimos meses descubrimos algo que cambió todo para negocios locales:
              <br />
              👉 Una ficha optimizada + contenido profesional …puede llevar un negocio desde la posición 20 al Top 3 del mapa.
              <br />
              Sin anuncios. Sin complicaciones. Solo estrategia + contenido real.
              <br />
              Y en la Quinta Región, muy pocos lo están haciendo bien. Ese es tu momento de ventaja.
            </Paragraph>
          </div>
        </Section>
        <Section>
          <Card>
            <div className="text-center mb-8">
              <H2>Transformamos tu Perfil de Google en una máquina de atraer clientes.</H2>
            </div>
          </Card>
        </Section>
      </Container>
    </main>
  );
}