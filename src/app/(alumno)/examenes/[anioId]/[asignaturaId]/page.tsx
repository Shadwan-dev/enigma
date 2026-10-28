import { planDeEstudios } from '@/infrastructure/data';
import Link from 'next/link';
import { ArrowLeft, ClipboardList, ChevronRight, Clock, BookOpen } from 'lucide-react';

export function generateStaticParams() {
  const params: { anioId: string; asignaturaId: string }[] = [];
  planDeEstudios.forEach((anio) => {
    anio.asignaturas.forEach((asignatura) => {
      params.push({ anioId: String(anio.id), asignaturaId: asignatura.id });
    });
  });
  return params;
}

export default async function ExamenesAsignaturaPage({ params }: { params: Promise<{ anioId: string; asignaturaId: string }> }) {
  const { anioId, asignaturaId } = await params;
  const anio = planDeEstudios.find((a) => a.id === Number(anioId));
  const asignatura = anio?.asignaturas.find((a) => a.id === asignaturaId);

  if (!anio || !asignatura) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-4">🔍</p>
        <h2 className="text-xl font-semibold text-white">Asignatura no encontrada</h2>
        <a href="/examenes" className="text-purple-400 hover:underline mt-4 inline-block">← Volver a años</a>
      </div>
    );
  }

  const examenes = asignatura.examenes || [];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href={`/examenes/${anio.id}`} className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            📝 Exámenes <span className="text-sm font-normal text-gray-400">{asignatura.nombre}</span>
          </h1>
          <p className="text-gray-400">{asignatura.descripcion}</p>
        </div>
      </div>

      {examenes.length === 0 ? (
        <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
          <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300">Sin exámenes</h3>
          <p className="text-sm text-gray-500">Esta asignatura aún no tiene exámenes disponibles.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {examenes.map((examen) => (
            <Link
              key={examen.id}
              href={`/examenes/${anio.id}/${asignatura.id}/${examen.id}`}
              className="group block p-5 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-900/30">
                    <ClipboardList className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{examen.titulo}</h3>
                    <p className="text-sm text-gray-400">{examen.descripcion}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{examen.duracionMinutos} min</span>
                      <span>📝 {examen.preguntas.length} preguntas</span>
                      <span>🎯 {examen.preguntas.reduce((acc, p) => acc + p.puntaje, 0)} puntos</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}