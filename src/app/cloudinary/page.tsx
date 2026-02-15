import { Metadata } from "next";
import { CloudinaryGallery } from "@/components/CloudinaryGallery";

export const metadata: Metadata = {
    title: "Galería Cloudinary | Leandro Venegas",
    description: "Explora imágenes organizadas por carpetas desde Cloudinary.",
};

export default function CloudinaryPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cloudinary</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explora y visualiza tus imágenes almacenadas en Cloudinary organizadas por carpetas
                    </p>
                </div>

                {/* Configuration Notice */}
                <div className="mb-8 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-sm text-blue-200">
                            <p className="font-medium mb-1">Configuración requerida</p>
                            <p>Para usar esta galería, asegúrate de agregar tus credenciales de Cloudinary en el archivo <code className="bg-blue-900/50 px-1.5 py-0.5 rounded">.env.local</code>:</p>
                            <pre className="mt-2 bg-gray-900/50 p-3 rounded text-xs overflow-x-auto">
                                {`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Gallery Component */}
                <CloudinaryGallery />
            </div>
        </main>
    );
}
