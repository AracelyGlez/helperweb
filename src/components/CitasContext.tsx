import React, { createContext, useContext, useState } from 'react';

export type EstadoCita = 'pendiente' | 'confirmada' | 'cancelada' | 'realizada' | 'reagendada';

export type Cita = {
  id: string;
  alumno: string;
  numeroControl: string;
  carrera: string;
  fecha: string;
  hora: string;
  motivo: string;
  estado: EstadoCita;
  observaciones?: string; // Campo adicional opcional
};

type CitasContextType = {
  citas: Cita[];
  agregarCita: (cita: Omit<Cita, 'id' | 'estado'>) => void;
  actualizarCita: (id: string, cambios: Partial<Cita>) => void;
  eliminarCita: (id: string) => void;
  obtenerCitaPorId: (id: string) => Cita | undefined;
};

const CitasContext = createContext<CitasContextType>({
  citas: [],
  agregarCita: () => {},
  actualizarCita: () => {},
  eliminarCita: () => {},
  obtenerCitaPorId: () => undefined,
});

export const CitasProvider = ({ children }: { children: React.ReactNode }) => {
  const [citas, setCitas] = useState<Cita[]>([]);

  const agregarCita = (cita: Omit<Cita, 'id' | 'estado'>) => {
    const nuevaCita: Cita = {
      ...cita,
      id: generarId(),
      estado: 'pendiente',
      observaciones: '',
    };
    setCitas([...citas, nuevaCita]);
  };

  const actualizarCita = (id: string, cambios: Partial<Cita>) => {
    setCitas(citas.map(c => 
      c.id === id ? { ...c, ...cambios } : c
    ));
  };

  // Dentro de CitasProvider
const eliminarCita = (id: string) => {
  setCitas(prevCitas => prevCitas.filter(c => c.id !== id));
};

  const obtenerCitaPorId = (id: string) => {
    return citas.find(c => c.id === id);
  };

  // Función auxiliar para generar IDs únicos
  const generarId = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  return (
    <CitasContext.Provider 
      value={{ 
        citas, 
        agregarCita, 
        actualizarCita, 
        eliminarCita,
        obtenerCitaPorId
      }}
    >
      {children}
    </CitasContext.Provider>
  );
};

export const useCitas = () => {
  const context = useContext(CitasContext);
  if (!context) {
    throw new Error('useCitas debe ser usado dentro de un CitasProvider');
  }
  return context;
};