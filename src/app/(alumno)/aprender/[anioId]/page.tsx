// src/app/(alumno)/aprender/[anioId]/page.tsx
import { planDeEstudios } from '@/infrastructure/data';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

export function generateStaticParams() {
  return planDeEstudios.map((anio) => ({
    anioId: String(anio.id),
  }));
}

export default async function AnioPage({
  params,
}: {
  params: Promise<{ anioId: string }>;
}) {
  const { anioId } = await params;
  const anioIdNumber = Number(anioId);
  const anio = planDeEstudios.find((a) => a.id === anioIdNumber);

  if (!anio) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-4">🔍</p>
        <h2 className="text-xl font-semibold text-white">Año no encontrado</h2>
        <Link href="/aprender" className="text-blue-400 hover:underline mt-4 inline-block">
          ← Volver a años
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Navegación superior */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/aprender"
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">{anio.nombre}</h1>
          <p className="text-gray-400">Selecciona una asignatura</p>
        </div>
      </div>

      {anio.asignaturas.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300">Próximamente</h3>
          <p className="text-sm text-gray-500">
            Este año aún no tiene asignaturas disponibles.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {anio.asignaturas.map((asignatura) => (
            <Link
              key={asignatura.id}
              href={`/aprender/${anio.id}/${asignatura.id}/contenidos`}
              className="group p-5 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-900/30">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{asignatura.nombre}</h3>
                    <p className="text-sm text-gray-400">{asignatura.descripcion}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span>📚 {asignatura.contenidos.length} contenidos</span>
                      <span>📐 {asignatura.formulas.length} fórmulas</span>
                      <span>✏️ {asignatura.ejercicios.length} ejercicios</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}