// src/app/(alumno)/aprender/[anioId]/[asignaturaId]/[contenidoId]/page.tsx
import { planDeEstudios } from '@/infrastructure/data';
import { TutorialClient } from './TutorialClient';

export function generateStaticParams() {
  const params: { anioId: string; asignaturaId: string; contenidoId: string }[] = [];
  planDeEstudios.forEach((anio) => {
    anio.asignaturas.forEach((asignatura) => {
      (asignatura.contenidos || []).forEach((contenido) => {
        params.push({
          anioId: String(anio.id),
          asignaturaId: asignatura.id,
          contenidoId: contenido.id,
        });
      });
    });
  });
  return params;
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ anioId: string; asignaturaId: string; contenidoId: string }>;
}) {
  const { anioId, asignaturaId, contenidoId } = await params;
  const anioIdNumber = Number(anioId);

  const anio = planDeEstudios.find((a) => a.id === anioIdNumber);
  const asignatura = anio?.asignaturas.find((a) => a.id === asignaturaId);
  const contenido = asignatura?.contenidos.find((c) => c.id === contenidoId);

  if (!contenido) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-4">🔍</p>
        <h2 className="text-xl font-semibold text-white">Contenido no encontrado</h2>
        <a
          href={`/aprender/${anioId}/${asignaturaId}/contenidos`}
          className="text-blue-400 hover:underline mt-4 inline-block"
        >
          ← Volver a contenidos
        </a>
      </div>
    );
  }

  return (
    <TutorialClient
      anioId={anioIdNumber}
      asignaturaId={asignaturaId}
      contenido={contenido}
    />
  );
}