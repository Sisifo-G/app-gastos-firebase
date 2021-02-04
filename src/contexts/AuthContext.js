import React, { useState, useContext, useEffect } from "react";
import { auth } from "./../firebase/firebaseConfig";

// Creamos el contexto
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();
  const [cargando, setCargando] = useState(true);

  // Efecto para ejecutar la comprobación una sola vez
  useEffect(() => {
    // Comprobamos si hay un usuario
    const cancelarSubscripcion = auth.onAuthStateChanged((usuario) => {
      setUsuario(usuario);
      setCargando(false);
    });

    return cancelarSubscripcion;
  }, []);
  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
