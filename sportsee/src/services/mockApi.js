// src/services/mockApi.js

// J'ai défini ici un tableau contenant des données simulées pour les utilisateurs.
const users = [
  {
    id: "12",
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.9,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
    performance: [
      { value: 80, kind: "cardio" },
      { value: 120, kind: "energy" },
      { value: 140, kind: "endurance" },
      { value: 50, kind: "strength" },
      { value: 200, kind: "speed" },
      { value: 90, kind: "intensity" },
    ],
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 40 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 30 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 50 },
    ],
  },
  {
    id: "18",
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    todayScore: 0.7,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
    performance: [
      { value: 200, kind: "cardio" },
      { value: 240, kind: "energy" },
      { value: 80, kind: "endurance" },
      { value: 100, kind: "strength" },
      { value: 180, kind: "speed" },
      { value: 75, kind: "intensity" },
    ],
    sessions: [
      { day: 1, sessionLength: 45 },
      { day: 2, sessionLength: 60 },
      { day: 3, sessionLength: 40 },
      { day: 4, sessionLength: 30 },
      { day: 5, sessionLength: 60 },
      { day: 6, sessionLength: 70 },
      { day: 7, sessionLength: 40 },
    ],
  },
];

// J'ai créé une fonction qui simule un appel API pour récupérer les données d'un utilisateur en fonction de son ID.
export const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    setTimeout(() => {
      // Si je trouve l'utilisateur, je renvoie ses données
      if (user) {
        resolve(user);
      } else {
        // Sinon, je retourne une erreur
        reject(new Error("Utilisateur non trouvé"));
      }
    }, 500); // Je simule un délai pour imiter un appel API
  });
};