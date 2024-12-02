import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import { useAuth } from "../contexts/FakeAuthContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  const { currentUser } = useAuth();

  if (isLoading) return <Spinner />;

  const selectedCities = cities.filter(
    (city) => city.currentUser === currentUser.id
  );

  if (!selectedCities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = selectedCities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
