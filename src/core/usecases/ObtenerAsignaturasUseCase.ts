// src/core/usecases/ObtenerAsignaturasUseCase.ts
import type { IAsignaturaRepository } from '@/core/repositories/IAsignaturaRepository';
import type { Asignatura } from '@/core/entities';

export class ObtenerAsignaturasUseCase {
  constructor(private readonly repository: IAsignaturaRepository) {}

  async ejecutar(): Promise<Asignatura[]> {
    return this.repository.obtenerTodas();
  }

  async porAnio(anioId: number): Promise<Asignatura[]> {
    return this.repository.obtenerPorAnio(anioId);
  }

  async porId(id: string): Promise<Asignatura | null> {
    return this.repository.obtenerPorId(id);
  }
}