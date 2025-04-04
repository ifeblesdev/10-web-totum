import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GroupList = () => {
    // Estado para almacenar los grupos
    const [groups, setGroups] = useState([]);
    // Estado para manejar errores
    const [error, setError] = useState(null);

    // Función para obtener los grupos de la API
    const fetchGroups = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/groups/'); // URL de la API Django
            setGroups(response.data); // Guardamos la lista de grupos en el estado
            console.log(response.data)
        } catch (err) {
            setError('Error al cargar los grupos'); // Si ocurre un error, mostramos un mensaje
            console.error(err);
        }
    };

    // Usamos useEffect para llamar a la API cuando el componente se monte
    useEffect(() => {
        fetchGroups();
    }, []); // El array vacío hace que solo se ejecute una vez al montar el componente

    return (
        <div>
            <h1>Lista de Grupos</h1>
            {error && <p>{error}</p>} {/* Mostrar mensaje de error si ocurre */}
            <ul>
                {groups.length > 0 ? (
                    groups.map((group) => (
                        <li key={group.id}>
                            <h3>{group.description}</h3>
                            <p>Contorno: {group.accompaniment ? "Sí" : "No"}</p>
                            <p>Misma pantalla: {group.same_screen ? "Sí" : "No"}</p>
                            <p>Se muestra: {group.show_order ? "Sí" : "No"}</p>
                            <p>Desactivado: {group.disable ? "Sí" : "No"}</p>
                            
                        </li>
                    ))
                ) : (
                    <p>Cargando...</p> // Mostrar "Cargando..." mientras los grupos se obtienen
                )}
            </ul>
        </div>
    );
};

export default GroupList;
