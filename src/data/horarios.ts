//Registro de todos los horarios de los profesores, se usa en la vista
type RegistroHorario = {
  idProfesor: string; 
  nombreProfesor: string;
  materiaId: string;
  horarios: string[];
};

export const horariosProfesores: RegistroHorario[] = [
 //Primer semestre
 {
    idProfesor: "ems1",
    nombreProfesor: "\nElia Mata Sáenz",
    materiaId: "1",
    horarios: ['Martes 10:00-12:00', 'Jueves 14:00-15:00', 'Viernes 8:00-10:00']
  },
  
  {
    idProfesor: "js1",
    nombreProfesor: "Juan Solano",
    materiaId: "1",
    horarios: ['Lunes 10:00-12:00', 'Miércoles 10:00-12:00', 'Viernes 13:00-15:00']
  },

  {
    idProfesor: "r1",
    nombreProfesor: "Rocío Névarez",
    materiaId: "2",
    horarios: ['Lunes 9:00-10:00', 'Martes 10:00-12:00', 'Jueves 11:00-12:00']
  },

  {
    idProfesor: "va1",
    nombreProfesor: "\nDavid Valtierrez",
    materiaId: "2",
    horarios: ['Miércoles 8:00-10:00', 'Jueves 10:00-11:00', 'Viernes 9:00-10:00']
  }, 

  {
    idProfesor: "er1",
    nombreProfesor: "Erika Martínez",
    materiaId: "3",
    horarios: ['Lunes 8:00-9:00', 'Miércoles 9:00-10:00', 'Viernes 13:00-14:00']
  },
  
  {
    idProfesor: "ju1",
    nombreProfesor: "\nJulio Chavarría",
    materiaId: "3",
    horarios: ['Lunes 10:00-11:00', 'Martes 10:00-11:00', 'Viernes 9:00-10:00']
  },

  {
    idProfesor: "al1",
    nombreProfesor: "Alicia Robles",
    materiaId: "4",
    horarios: ['Lunes 7:00-8:00', 'Miércoles 10:00-11:00', 'Jueves 8:00-9:00']
  },  

  {
    idProfesor: "ge1",
    nombreProfesor: "\nGerardo García",
    materiaId: "4",
    horarios: ['Martes 12:00-13:00', 'Miércoles 9:00-10:00', 'Jueves 10:00-12:00']
  },

  {
    idProfesor: "vl1",
    nombreProfesor: "Víctor López",
    materiaId: "5",
    horarios: ['Lunes 8:00-10:00', 'Martes 9:00-10:00', 'Viernes 11:00-12:00']
  },
  
  {
    idProfesor: "ro1",
    nombreProfesor: "\nRosalinda García",
    materiaId: "5",
    horarios: ['Lunes 9:00-10:00', 'Miércoles 9:00-10:00', 'Viernes 13:00-14:00']
  }, 

  {
    idProfesor: "cy1",
    nombreProfesor: "Cynthia Araiza",
    materiaId: "6",
    horarios: ['Lunes 11:00-12:00', 'Martes 9:00-10:00', 'Jueves 9:00-10:00']
  }, 

  {
    idProfesor: "ju2",
    nombreProfesor: "\nJulio Chavarría",
    materiaId: "6",
    horarios: ['Lunes 11:00-12:00', 'Martes 9:00-10:00', 'Jueves 9:00-10:00']
  }, 

  //Segundo semestre

  {
    idProfesor: "ems2",
    nombreProfesor: "Elia Mata Sáenz",
    materiaId: "7",
    horarios: ['Lunes 10:00-12:00', 'Miércoles 8:00-10:00', 'Jueves 7:00-8:00']
  },

  {
    idProfesor: "ma1",
    nombreProfesor: "\nMartín Salinas",
    materiaId: "7",
    horarios: ['Lunes 7:00-8:00', 'Martes 10:00-12:00', 'Miércoles 8:00-9:00']
  },

  {
    idProfesor: "va2",
    nombreProfesor: "David Valtierrez",
    materiaId: "8",
    horarios: ['Lunes 8:00-10:00', 'Martes 9:00-10:00', 'Viernes 14:00-15:00']
  },

  {
    idProfesor: "gus1",
    nombreProfesor: "\nGustavo Núñez",
    materiaId: "8",
    horarios: ['Martes 8:00-9:00', 'Miércoles 13:00-15:00', 'Jueves 8:00-9:00']
  },

  {
    idProfesor: "lau1",
    nombreProfesor: "Laura Franco",
    materiaId: "9",
    horarios: ['Lunes 7:00-8:00', 'Miércoles 11:00-13:00', 'Viernes 12:00-14:00']
  },

    {
    idProfesor: "jul1",
    nombreProfesor: "\nJulieta Vázquez",
    materiaId: "9",
    horarios: ['Martes 9:00-11:00', 'Miércoles 9:00-10:00', 'Viernes 13:00-14:00']
  },

      {
    idProfesor: "ros1",
    nombreProfesor: "Rosario Baray",
    materiaId: "10",
    horarios: ['Lunes 7:00-8:00', 'Martes 9:00-10:00', 'Miércoles 11:00-12:00']
  },

      {
    idProfesor: "vla1",
    nombreProfesor: "\nVladimir Estupiñón",
    materiaId: "10",
    horarios: ['Lunes 17:00-18:00', 'Miércoles 12:00-14:00', 'Jueves 11:00-12:00']
  },

      {
    idProfesor: "al1",
    nombreProfesor: "Alicia Robles",
    materiaId: "11",
    horarios: ['Martes 8:00-9:00', 'Miércoles 9:00-10:00', 'Viernes 11:00-12:00']
  },

        {
    idProfesor: "jo1",
    nombreProfesor: "\nJosé Hernández",
    materiaId: "11",
    horarios: ['Lunes 10:00-11:00', 'Miércoles 9:00-10:00', 'Jueves 11:00-12:00']
  },

          {
    idProfesor: "ems3",
    nombreProfesor: "Elia Mata Sáenz",
    materiaId: "12",
    horarios: ['Lunes 7:00-8:00', 'Viernes 9:00-11:00']
  },

    {
    idProfesor: "ma2",
    nombreProfesor: "\nMartín Salinas",
    materiaId: "12",
    horarios: ['Martes 14:00-16:00', 'Miércoles 8:00-9:00', 'Jueves 7:00-9:00']
  },

  //Tercer semestre
  {
    idProfesor: "ems3",
    nombreProfesor: "Martín Salinas",
    materiaId: "13",
    horarios: ['Lunes 9:00-10:00', 'Miércoles 13:00-15:00', 'Viernes 8:00-9:00']
  },
  
  {
    idProfesor: "js2",
    nombreProfesor: "\nJuan Solano",
    materiaId: "13",
    horarios: ['Martes 09:00-11:00', 'Jueves 09:00-11:00']
  },

  {
    idProfesor: "ge2",
    nombreProfesor: "Gerardo García",
    materiaId: "14",
    horarios: ['Lunes 8:00-10:00', 'Miércoles 10:00-11:00', 'Viernes 11:00-12:00']
  },

  {
    idProfesor: "gus2",
    nombreProfesor: "\nGustavo Núñez",
    materiaId: "14",
    horarios: ['Martes 12:00-13:00', 'Jueves 10:00-11:00', 'Viernes 12:00-14:00']
  },

  {
    idProfesor: "osv1",
    nombreProfesor: "Osvaldo Reyes",
    materiaId: "15",
    horarios: ['Lunes 8:00-9:00', 'Martes 9:00-10:00', 'Viernes 11:00-12:00']
  },

    {
    idProfesor: "lau2",
    nombreProfesor: "\nLaura Franco",
    materiaId: "15",
    horarios: ['Lunes 9:00-10:00', 'Martes 9:00-10:00', 'Miércoles 13:00-14:00']
  },

    {
    idProfesor: "ho1",
    nombreProfesor: "Horacio Corral",
    materiaId: "16",
    horarios: ['Martes 8:00-9:00', 'Miércoles 9:00-10:00', 'Jueves 15:00-17:00']
  },

  {
    idProfesor: "js3",
    nombreProfesor: "\nJuan Solano",
    materiaId: "16",
    horarios: ['Lunes 7:00-8:00', 'Martes 11:00-13:00', 'Miércoles 15:00-16:00']
  },

  {
    idProfesor: "ge3",
    nombreProfesor: "Gerardo García",
    materiaId: "17",
    horarios: ['Lunes 11:00-12:00', 'Viernes 12:00-14:00']
  },

  {
    idProfesor: "vic1",
    nombreProfesor: "\nVíctor González",
    materiaId: "17",
    horarios: ['Miércoles 13:00-14:00', 'Jueves 12:00-13:00', 'Viernes 9:00-11:00']
  },

    {
    idProfesor: "ems4",
    nombreProfesor: "Elia Mata Sáenz",
    materiaId: "18",
    horarios: ['Miércoles 13:00-14:00', 'Jueves 10:00-11:00', 'Viernes 13:00-14:00']
  },

      {
    idProfesor: "dav1",
    nombreProfesor: "\nDavid Urita",
    materiaId: "18",
    horarios: ['Lunes 13:00-14:00', 'Martes 10:00-11:00', 'Jueves 11:00-13:00']
  },
 
 ];