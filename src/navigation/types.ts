//types.ts
export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    CitasPsicologicas: undefined;
    Asesorias: undefined;
    Alumnos: undefined; 
    // Puedes agregar más rutas aquí según necesites
    Redireccion:undefined;
    VistaPsicologo: undefined; 
  };
  
  // Esto es para tener acceso al tipado en cualquier parte de la app
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }