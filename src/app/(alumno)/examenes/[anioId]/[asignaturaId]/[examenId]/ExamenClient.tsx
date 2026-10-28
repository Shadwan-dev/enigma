'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, ClipboardList } from 'lucide-react';
import { PreguntaExamenCard } from '@/presentation/components/examenes/PreguntaExamenCard';
import type { Examen } from '@/core/entities';

interface ExamenClientProps {
  anioId: number;
  asignaturaId: string;
  examen: Examen;
}

export function ExamenClient({ anioId, asignaturaId, examen }: ExamenClientProps) {
  const totalPuntos = examen.preguntas.reduce((acc, p) => acc + p.puntaje, 0);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/examenes/${anioId}/${asignaturaId}`} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <ClipboardList className="w-6 h-6 text-purple-400" />
            {examen.titulo}
          </h1>
          <p className="text-gray-400">{examen.descripcion}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
        <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Duración: {examen.duracionMinutos} min</span>
        <span>📝 {examen.preguntas.length} preguntas</span>
        <span>🎯 {totalPuntos} puntos en total</span>
      </div>

      <div className="space-y-4">
        {examen.preguntas.map((pregunta, index) => (
          <PreguntaExamenCard key={pregunta.id} pregunta={pregunta} numero={index + 1} />
        ))}
      </div>
    </div>
  );
}