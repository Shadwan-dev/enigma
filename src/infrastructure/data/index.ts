// src/infrastructure/data/index.ts
import type { Anio } from '@/core/entities';
import { con101 } from './asignaturas/con-101';
import { con102 } from './asignaturas/con-102';
import { con103 } from './asignaturas/con-103';
import { con104 } from './asignaturas/con-104';
import { con201 } from './asignaturas/con-201';
import { mat101 } from './asignaturas/mat-101';
import { mat102 } from './asignaturas/mat-102';
import { matFin101 } from './asignaturas/mat-fin-101';
import { derFin101 } from './asignaturas/der-fin-101';
import { est101 } from './asignaturas/est-101';
import { cos201 } from './asignaturas/cos-201';
import { cos202 } from './asignaturas/cos-202';
import { con202 } from './asignaturas/con-202';
import { eco201 } from './asignaturas/eco-201';
import { aud201 } from './asignaturas/aud-201';
import { ana301 } from './asignaturas/ana-301';
import { inv201 } from './asignaturas/inv-201';
import { aud301 } from './asignaturas/aud-301';
import { adm301 } from './asignaturas/adm-301';
import { cos301 } from './asignaturas/cos-301';
import { admFin301 } from './asignaturas/adm-fin-301';

export const planDeEstudios: Anio[] = [
  {
    id: 1,
    nombre: '1er Año',
    asignaturas: [con101, con102, mat101, matFin101, derFin101],
  },
  {
    id: 2,
    nombre: '2do Año',
    asignaturas: [con103, mat102, est101, con104 ],
  },
  {
    id: 3,
    nombre: '3er Año',
    asignaturas: [con201, cos201, cos202, con202, eco201, aud201, ana301, inv201],
  },
  {
    id: 4,
    nombre: '4to Año',
    asignaturas: [aud301, adm301, cos301, admFin301 ],
  },
  {
    id: 5,
    nombre: '5to Año',
    asignaturas: [],
  },
];