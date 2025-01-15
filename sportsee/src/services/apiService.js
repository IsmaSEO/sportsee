import axios from "axios";

const BASE_URL = "http://localhost:3000"; // URL de l'API locale

/**
 * Récupère les données principales de l'utilisateur.
 * @param {number} id - ID de l'utilisateur.
 * @returns {Promise<Object>} Données principales de l'utilisateur.
 */

export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données principales :",
      error
    );
    throw error;
  }
};

/**
 * Récupère les données d'activité quotidienne de l'utilisateur.
 * @param {number} id - ID de l'utilisateur.
 * @returns {Promise<Array>} Données d'activité quotidienne.
 */

export const fetchUserActivity = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/activity`);
    return response.data.data.sessions;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données d'activité :",
      error
    );
    throw error;
  }
};

/**
 * Récupère les données des sessions moyennes de l'utilisateur.
 * @param {number} id - ID de l'utilisateur.
 * @returns {Promise<Array>} Données des sessions moyennes.
 */

export const fetchUserAverageSessions = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/average-sessions`);
    return response.data.data.sessions;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des sessions moyennes :",
      error
    );
    throw error;
  }
};

/**
 * Récupère les données de performance de l'utilisateur.
 * @param {number} id - ID de l'utilisateur.
 * @returns {Promise<Array>} Données de performance formatées.
 */

export const fetchUserPerformance = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${id}/performance`);
    const kindMapping = response.data.data.kind;

    // Normalisation des données de performance
    return response.data.data.data.map((item) => ({
      kind: kindMapping[item.kind],
      value: item.value,
    }));
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de performance :",
      error
    );
    throw error;
  }
};

/**
 * Récupère toutes les données utilisateur en parallèle.
 * @param {number} id - ID de l'utilisateur.
 * @returns {Promise<Object>} Toutes les données utilisateur regroupées.
 */

export const fetchUserData = async (id) => {
  try {
    const [mainData, activityData, sessionsData, performanceData] =
      await Promise.all([
        fetchUserById(id),
        fetchUserActivity(id),
        fetchUserAverageSessions(id),
        fetchUserPerformance(id),
      ]);

    return { mainData, activityData, sessionsData, performanceData };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    throw error;
  }
};