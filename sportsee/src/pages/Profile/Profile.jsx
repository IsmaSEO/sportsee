import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityChart from "../../components/Charts/ActivityChart/ActivityChart";
import AverageSessionChart from "../../components/Charts/AverageSessionsChart/AverageSessionsChart";
import GoalScoreChart from "../../components/Charts/GoalScoreChart/GoalScoreChart";
import KeyMetrics from "../../components/Charts/KeyMetrics/KeyMetrics";
import PerformanceChart from "../../components/Charts/PerformanceChart/PerformanceChart";
import { fetchUserActivity, fetchUserAverageSessions, fetchUserById, fetchUserPerformance } from "../../services/apiService";
import NotFound from "../NotFound/NotFound";
import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [averageSessionsData, setAverageSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Appels API pour récupérer les données
        const mainData = await fetchUserById(id);
        const activity = await fetchUserActivity(id);
        const averageSessions = await fetchUserAverageSessions(id);
        const performance = await fetchUserPerformance(id);

        setUserData(mainData);
        setActivityData(activity);
        setAverageSessionsData(averageSessions);
        setPerformanceData(performance);
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
        setError("Impossible de charger les données.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);
 
  if (loading) return <p>Chargement des données...</p>;
  if (error) {return <NotFound />;}

  return (
    <div className="profile">
      <div className="header-profile">
        <h1>Bonjour <span className="user-name"> {userData.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="content">
        <div className="charts">
          <ActivityChart activityData={activityData} />
          <AverageSessionChart sessionData={averageSessionsData} />
          <PerformanceChart performanceData={performanceData} />
          <GoalScoreChart goalPercentage={userData.score * 100} />
        </div>
        <div className="metrics">
          <KeyMetrics metrics={userData.keyData} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
