// src/app/(alumno)/aprender/[anioId]/[asignaturaId]/[contenidoId]/TutorialClient.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { TutorialPasos } from '@/presentation/components/aprender/TutorialPasos';
import type { Contenido } from '@/core/entities';

interface TutorialClientProps {
  anioId: number;
  asignaturaId: string;
  contenido: Contenido;
}

export function TutorialClient({ anioId, asignaturaId, contenido }: TutorialClientProps) {
  const router = useRouter();

  const handleComplete = () => {
    console.log('✅ Tutorial completado:', contenido.titulo);
    router.push(`/aprender/${anioId}/${asignaturaId}/contenidos`);
  };

  return (
    <div>
      <Link
        href={`/aprender/${anioId}/${asignaturaId}/contenidos`}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a contenidos
      </Link>

      <TutorialPasos
        pasos={contenido.pasos}
        documentacion={contenido.documentacion}
        titulo={contenido.titulo}
        descripcion={contenido.descripcion}
        onComplete={handleComplete}
      />
    </div>
  );
}