'use client';

import { useState } from 'react';

interface CloudinaryImage {
    public_id: string;
    url: string;
    thumbnail: string;
    optimized: string;
    width: number;
    height: number;
    format: string;
    created_at: string;
}

interface CloudinaryGalleryProps {
    initialFolder?: string;
}

export function CloudinaryGallery({ initialFolder = '' }: CloudinaryGalleryProps) {
    const [folder, setFolder] = useState(initialFolder);
    const [inputFolder, setInputFolder] = useState(initialFolder);
    const [images, setImages] = useState<CloudinaryImage[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);

    const fetchImages = async (folderPath: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/cloudinary?folder=${encodeURIComponent(folderPath)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al cargar las imágenes');
            }

            setImages(data.images);
            setFolder(folderPath);
        } catch (err: any) {
            setError(err.message);
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchImages(inputFolder);
    };

    return (
        <div className="w-full">
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="folder" className="block text-sm font-medium text-gray-300 mb-2">
                            Nombre de la carpeta en Cloudinary
                        </label>
                        <input
                            type="text"
                            id="folder"
                            value={inputFolder}
                            onChange={(e) => setInputFolder(e.target.value)}
                            placeholder="Ej: productos, portfolio, eventos"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                    <div className="flex items-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Cargando...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Buscar
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                    <p className="font-medium">Error:</p>
                    <p className="text-sm mt-1">{error}</p>
                </div>
            )}

            {/* Images Grid */}
            {images.length > 0 && (
                <div>
                    <div className="mb-4 text-gray-400">
                        Se encontraron <span className="font-semibold text-white">{images.length}</span> imagen{images.length !== 1 ? 'es' : ''} en la carpeta <span className="font-semibold text-blue-400">{folder || 'root'}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div
                                key={image.public_id}
                                className="group relative aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.thumbnail}
                                    alt={image.public_id}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-sm font-medium truncate">
                                            {image.public_id.split('/').pop()}
                                        </p>
                                        <p className="text-gray-300 text-xs">
                                            {image.width} × {image.height}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && images.length === 0 && folder && (
                <div className="text-center py-12">
                    <svg className="mx-auto h-16 w-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400">No se encontraron imágenes en esta carpeta</p>
                </div>
            )}

            {/* Initial State */}
            {!loading && !folder && (
                <div className="text-center py-12">
                    <svg className="mx-auto h-16 w-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <p className="text-gray-400">Ingresa el nombre de una carpeta para ver las imágenes</p>
                </div>
            )}

            {/* Modal for full-size image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImage.optimized}
                        alt={selectedImage.public_id}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
