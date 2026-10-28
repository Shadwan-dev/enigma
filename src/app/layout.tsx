// src/app/layout.tsx
'use client';

import { useEffect } from 'react';
import './globals.css';

// Providers
import { SidebarProvider } from '@/presentation/providers/SidebarProvider';

// Componentes UI
import { Sidebar } from '@/presentation/components/ui/Sidebar';
import { Logo } from '@/presentation/components/ui/Logo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Aplicar modo oscuro por defecto
  useEffect(() => {
    document.documentElement.classList.add('dark');
    console.log('🌙 Modo oscuro activado por defecto');
  }, []);

  // Registrar Service Worker (offline)
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registrado:', registration);
        })
        .catch((error) => {
          console.error('❌ Error al registrar el Service Worker:', error);
        });
    }
  }, []);

  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className="antialiased bg-gray-900 text-gray-100 transition-colors duration-300">
        <SidebarProvider>
          <div className="flex min-h-screen">
            {/* Sidebar Global (ancho fijo) */}
            <Sidebar />

            {/* Contenido principal (margen fijo, sin desplazamiento) */}
            <div className="flex-1 md:ml-72 min-w-0">
              {/* Header con Logo */}
              <header className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 py-3 flex items-center">
                <Logo size="md" />
              </header>

              {/* Contenido de la página */}
              <main className="p-4 md:p-6">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}