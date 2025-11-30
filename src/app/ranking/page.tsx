import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { H1, Paragraph } from "@/components/ui/Typography";
import { CafeRanking } from "@/components/CafeRanking";

export const metadata: Metadata = {
    title: "Ranking de Cafeterías | Valparaíso",
    description: "Descubre las mejores cafeterías de Valparaíso según Google Maps.",
};

export default function RankingPage() {
    return (
        <main className="min-h-screen bg-gray-900 py-20">
            <Container>
                <div className="text-center mb-12">
                    <H1 className="mb-4">Ranking de Cafeterías en Valparaíso</H1>
                    <Paragraph>
                        Actualizado diariamente con datos de Google Maps
                    </Paragraph>
                </div>

                <CafeRanking />
            </Container>
        </main>
    );
}
