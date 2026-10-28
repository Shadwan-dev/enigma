// src/presentation/hooks/useProgreso.ts
'use client';

import { useEffect, useState } from 'react';

interface ProgresoData {
  ejerciciosCompletados: number;
  examenesRealizados: number;
  contenidosVistos: number;
  rachaDias: number;
  ultimaVisita: string | null;
  ultimaFecha: string | null;
}

const DEFAULT_PROGRESO: ProgresoData = {
  ejerciciosCompletados: 0,
  examenesRealizados: 0,
  contenidosVistos: 0,
  rachaDias: 0,
  ultimaVisita: null,
  ultimaFecha: null,
};

export function useProgreso() {
  const [progreso, setProgreso] = useState<ProgresoData>(DEFAULT_PROGRESO);

  useEffect(() => {
    const stored = localStorage.getItem('enigma_progreso');
    if (stored) {
      try {
        setProgreso(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const guardarProgreso = (nuevo: Partial<ProgresoData>) => {
    setProgreso((prev) => {
      const actualizado = { ...prev, ...nuevo };
      localStorage.setItem('enigma_progreso', JSON.stringify(actualizado));
      return actualizado;
    });
  };

  const registrarVisita = (ruta: string) => {
    const hoy = new Date().toISOString().split('T')[0];
    const ayer = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    setProgreso((prev) => {
      let nuevaRacha = prev.rachaDias;

      if (prev.ultimaFecha === hoy) {
        // Ya visitó hoy, no incrementar
      } else if (prev.ultimaFecha === ayer) {
        nuevaRacha = prev.rachaDias + 1;
      } else {
        nuevaRacha = 1; // Reiniciar racha
      }

      const actualizado = {
        ...prev,
        rachaDias: nuevaRacha,
        ultimaVisita: ruta,
        ultimaFecha: hoy,
      };
      localStorage.setItem('enigma_progreso', JSON.stringify(actualizado));
      return actualizado;
    });
  };

  const completarEjercicio = () => {
    guardarProgreso({ ejerciciosCompletados: progreso.ejerciciosCompletados + 1 });
  };

  const completarExamen = () => {
    guardarProgreso({ examenesRealizados: progreso.examenesRealizados + 1 });
  };

  const verContenido = (ruta: string) => {
    guardarProgreso({
      contenidosVistos: progreso.contenidosVistos + 1,
      ultimaVisita: ruta,
    });
  };

  return {
    progreso,
    registrarVisita,
    completarEjercicio,
    completarExamen,
    verContenido,
  };
}