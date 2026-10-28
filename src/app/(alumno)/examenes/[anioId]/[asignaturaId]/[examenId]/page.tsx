import { planDeEstudios } from '@/infrastructure/data';
import { ExamenClient } from './ExamenClient';

export function generateStaticParams() {
  const params: { anioId: string; asignaturaId: string; examenId: string }[] = [];
  planDeEstudios.forEach((anio) => {
    anio.asignaturas.forEach((asignatura) => {
      (asignatura.examenes || []).forEach((examen) => {
        params.push({
          anioId: String(anio.id),
          asignaturaId: asignatura.id,
          examenId: examen.id,
        });
      });
    });
  });
  return params;
}

export default async function ExamenPage({ params }: { params: Promise<{ anioId: string; asignaturaId: string; examenId: string }> }) {
  const { anioId, asignaturaId, examenId } = await params;
  const anio = planDeEstudios.find((a) => a.id === Number(anioId));
  const asignatura = anio?.asignaturas.find((a) => a.id === asignaturaId);
  const examen = asignatura?.examenes?.find((e) => e.id === examenId);

  if (!examen) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-4">🔍</p>
        <h2 className="text-xl font-semibold text-white">Examen no encontrado</h2>
        <a href={`/examenes/${anioId}/${asignaturaId}`} className="text-purple-400 hover:underline mt-4 inline-block">← Volver a exámenes</a>
      </div>
    );
  }

  return <ExamenClient anioId={Number(anioId)} asignaturaId={asignaturaId} examen={examen} />;
}