import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import { useAuth } from "../contexts/FakeAuthContext";

function CityList() {
  const { cities, isLoading } = useCities();
  const { currentUser } = useAuth();

  if (isLoading) return <Spinner />;

  const selectedCities = cities.filter(
    (city) => city.currentUser === currentUser.id
  );

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {selectedCities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
