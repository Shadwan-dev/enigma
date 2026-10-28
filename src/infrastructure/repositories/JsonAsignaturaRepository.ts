// src/infrastructure/repositories/JsonAsignaturaRepository.ts
import type { IAsignaturaRepository } from '@/core/repositories/IAsignaturaRepository';
import type { Asignatura } from '@/core/entities';
import { con101 } from '@/infrastructure/data/asignaturas/con-101';

// Datos estáticos (simulando un JSON)
const todasLasAsignaturas: Asignatura[] = [con101];

export class JsonAsignaturaRepository implements IAsignaturaRepository {
  async obtenerTodas(): Promise<Asignatura[]> {
    return todasLasAsignaturas;
  }

  async obtenerPorId(id: string): Promise<Asignatura | null> {
    return todasLasAsignaturas.find((a) => a.id === id) || null;
  }

  async obtenerPorAnio(anioId: number): Promise<Asignatura[]> {
    // Por ahora, todas las asignaturas pertenecen al 1er año
    // Cuando tengas más años, filtra aquí
    if (anioId === 1) {
      return todasLasAsignaturas;
    }
    return [];
  }
}