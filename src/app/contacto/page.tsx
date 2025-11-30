import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Contacto | Leandro Venegas",
  description: "Ponte en contacto con Leandro Venegas para consultorías de marketing y desarrollo web.",
};

export default function ContactoPage() {
  return (
    <Container className="py-20 flex flex-col items-center min-h-screen">
      <H1 className="text-center">CONTACTO</H1>
      {/* Add form or contact info here later */}
    </Container>
  );
}
