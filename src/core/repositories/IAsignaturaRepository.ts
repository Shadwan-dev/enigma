// src/core/repositories/IAsignaturaRepository.ts
import type { Asignatura } from '@/core/entities';

export interface IAsignaturaRepository {
  obtenerTodas(): Promise<Asignatura[]>;
  obtenerPorId(id: string): Promise<Asignatura | null>;
  obtenerPorAnio(anioId: number): Promise<Asignatura[]>;
}