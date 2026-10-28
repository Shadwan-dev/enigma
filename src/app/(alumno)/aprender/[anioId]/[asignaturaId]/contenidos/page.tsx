// src/app/(alumno)/aprender/[anioId]/[asignaturaId]/contenidos/page.tsx
import { planDeEstudios } from '@/infrastructure/data';
import { ContenidosListClient } from './ContenidosListClient';

export function generateStaticParams() {
  const params: { anioId: string; asignaturaId: string }[] = [];
  planDeEstudios.forEach((anio) => {
    anio.asignaturas.forEach((asignatura) => {
      params.push({
        anioId: String(anio.id),
        asignaturaId: asignatura.id,
      });
    });
  });
  return params;
}

export default async function ContenidosPage({
  params,
}: {
  params: Promise<{ anioId: string; asignaturaId: string }>;
}) {
  const { anioId, asignaturaId } = await params;
  const anioIdNumber = Number(anioId);

  const anio = planDeEstudios.find((a) => a.id === anioIdNumber);
  const asignatura = anio?.asignaturas.find((a) => a.id === asignaturaId);

  if (!anio || !asignatura) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-4">🔍</p>
        <h2 className="text-xl font-semibold text-white">Asignatura no encontrada</h2>
        <a href="/aprender" className="text-blue-400 hover:underline mt-4 inline-block">
          ← Volver a años
        </a>
      </div>
    );
  }

  return (
    <ContenidosListClient anioId={anioIdNumber} asignatura={asignatura} />
  );
}