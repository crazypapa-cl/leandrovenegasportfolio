'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface LeadFormProps {
    onSuccess?: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/leads/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al enviar el formulario');
            }

            setSuccess(true);
            setDownloadUrl(data.downloadUrl);

            // Trigger download
            if (data.downloadUrl) {
                window.open(data.downloadUrl, '_blank');
            }

            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-900/30 border border-green-500 rounded-2xl p-8 text-center">
                <div className="mb-4">
                    <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Gracias!</h3>
                <p className="text-gray-300 mb-6">
                    Tu descarga debería comenzar automáticamente. Si no es así, haz clic en el botón de abajo.
                </p>
                {downloadUrl && (
                    <Button href={downloadUrl} variant="primary">
                        Descargar PDF
                    </Button>
                )}
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo *
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Juan Pérez"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="juan@ejemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono (opcional)
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="+56 9 1234 5678"
                    />
                </div>

                {error && (
                    <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 text-red-300 text-sm">
                        {error}
                    </div>
                )}

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-lg font-bold"
                >
                    {loading ? 'Enviando...' : 'Descargar Guía Gratis'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                    Al descargar, aceptas recibir información sobre marketing local. No spam.
                </p>
            </div>
        </form>
    );
}
