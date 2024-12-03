import Login from "@/components/login-btn"
import { Container, Box, Heading, Text, Button, VStack, HStack, Input, ListRoot, ListItem, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomCities, setRandomCities] = useState([]);
  const [loadingRandom, setLoadingRandom] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setError(null);
      },
      (err) => {
        setError("Unable to retrieve location. " + err.message);
      }
    );
  };

/*   const getLocationByIP = async () => {
    setLoading();
    try {
      const response = await fetch("/api/location")
      console.log(response, "Raspuns")
      if (!response.ok) throw new Error("Failed to fetch location from server")

      const data = await response.json();
      const { city, region, country, loc } = data;
      const [latitude, longitude] = loc.split(",");
      setLocation({ city, region, country, latitude, longitude });
      setError(null);
    } catch (err) {
      console.error("Error fetching location:", err.message);
      setError("Unable to retrieve location from IP." + err.message);
    } finally {
      setLoading(false);
    }
  }; */

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await fetch("/api/favorites");

        if (response.ok) {
          const data = await response.json();
          setFavorites(data.slice(0, 5))
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [])

  useEffect(() => {
    async function fetchRandomCities() {
      try {
        const randomCitiesList = [
          { cityName: "București", country: "Romania" },
          { cityName: "Cluj-Napoca", country: "Romania" },
          { cityName: "Timișoara", country: "Romania" },
          { cityName: "Iași", country: "Romania" },
          { cityName: "Constanța", country: "Romania" },
          { cityName: "Brașov", country: "Romania" },
          { cityName: "Sibiu", country: "Romania" },
          { cityName: "Oradea", country: "Romania" },
          { cityName: "Craiova", country: "Romania" },
          { cityName: "Alba Iulia", country: "Romania" },
          { cityName: "New York", country: "USA" },
          { cityName: "Tokyo", country: "Japan" },
          { cityName: "Paris", country: "France" },
          { cityName: "Sydney", country: "Australia" },
          { cityName: "Cairo", country: "Egypt" },
          { cityName: "Berlin", country: "Germany" },
          { cityName: "Barcelona", country: "Spain" },
          { cityName: "Rome", country: "Italy" },
          { cityName: "Buenos Aires", country: "Argentina" },
          { cityName: "Cape Town", country: "South Africa" },
          { cityName: "Toronto", country: "Canada" },
          { cityName: "Dubai", country: "United Arab Emirates" },
          { cityName: "São Paulo", country: "Brazil" },
          { cityName: "Istanbul", country: "Turkey" },
          { cityName: "London", country: "United Kingdom" },
          { cityName: "Amsterdam", country: "Netherlands" },
          { cityName: "Vienna", country: "Austria" },
          { cityName: "Zurich", country: "Switzerland" },
        ];

        const shuffled = randomCitiesList.sort(() => 0.5 - Math.random());
        setRandomCities(shuffled.slice(0, 5));
      } catch (error) {
        console.error("Error fetching random cities:", error);
      } finally {
        setLoadingRandom(false);
      }
    }

    fetchRandomCities();
  }, [])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`)
    }
  }



  return (
    <Container py="6" minH="100vh" bg="orange.50" borderRadius="lg" boxShadow="xl" centerContent>
      {/* <Container py="6" minH="100vh" bg="orange.50" borderRadius="lg" boxShadow="xl" centerContent>
      <Box textAlign="center" p={6} borderRadius="md" bg="yellow.100" boxShadow="lg">
        <Heading size="lg" color="orange.600" mb={4}>
          Approximate Your Location
        </Heading>
        <Button bgColor="orange.500" color="white" onClick={getLocationByIP} mb={4} isDisabled={loading}>
          {loading ? <Spinner size="sm" /> : "Get Location by IP"}
        </Button>
        {location && (
          <Text>
            Your location: {location.city}, {location.region}, {location.country} <br />
            Coordinates: Latitude {location.latitude}, Longitude {location.longitude}
          </Text>
        )}
        {error && <Text color="red.500">{error}</Text>}
      </Box>
    </Container> */}

      <Box textAlign="center" p={6} borderRadius="md" bg="yellow.100" width="100%">
        <Heading size="xl" color="orange.600" mb={4}>
          Welcome to Your Travel Destination!
        </Heading>
        <Heading size="lg" color="orange.800" mb={4}>
          For better experience, please get us your location
        </Heading>
        <Button bgColor="orange.500" color="white" onClick={getLocation} mb={4}>
          Get Location
        </Button>
        {location && (
          <Text mb={10}>
            Your location: Latitude {location.latitude}, Longitude {location.longitude}
          </Text>
        )}
        {error && <Text color="red.500" mb={6}>{error}</Text>}
        <Text fontSize="lg" mb={6}>
          Explore amazing cities, discover weather details and plan your next adventure.
        </Text>

        <VStack spacing={4} align="center" mb={6}>
          <HStack>
            <Input
              placeholder="Search for a city..."
              bg="white"
              size="lg"
              p={4}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button bgColor="orange.500" color="white" p={4} onClick={handleSearch}>
              Search
            </Button>
          </HStack>
        </VStack>
        <Login />
      </Box>

      <Box display="flex" flexDirection="row" mt={6} p={6} borderRadius="md" bg="yellow.100"  width="100%">
        <Box mt={6} p={6} width="100%">
          <Heading size="md" color="orange.600" mb={4}>
            Discover Random Cities
          </Heading>
          {loadingRandom ? (
            <Spinner size="lg" color="orange.500" />
          ) : (
            <ListRoot>
              {randomCities.map((city, index) => (
                <ListItem key={index} color="orange.800" fontSize="lg">
                  {city.cityName}, {city.country}
                </ListItem>
              ))}
            </ListRoot>
          )}
        </Box>

        <Box mt={6} p={6} width="100%">
          <Heading size="md" color="orange.600" mb={4}>
            Top Your 5 Favorite Cities
          </Heading>
          {loading ? (
            <Spinner size="lg" color="orange.500"/>
          ) : favorites.length > 0 ? (
            <ListRoot>
              {favorites.map((city) => (
                <ListItem key={city.id} color="orange.800" fontSize="lg">
                  {city.cityName}, {city.country}
                </ListItem>
              ))}
            </ListRoot>
          ) : (
            <Text color="gray.600">
              No favorite cities yet.
            </Text>
          )}
        </Box>
      </Box>
    </Container>
  ) 
}