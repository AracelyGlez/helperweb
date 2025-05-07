export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    // Puedes agregar más rutas aquí según necesites
  };
  
  // Esto es para tener acceso al tipado en cualquier parte de la app
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }