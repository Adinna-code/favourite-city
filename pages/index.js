import Component from "@/components/login-btn"
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react"
import Link from "next/link"

export default function Home() {
  return(
    <Container py="6" minH="100vh" bg="orange.50" borderRadius="lg" boxShadow="xl" centerContent>
      <Box textAlign="center" p={6} borderRadius="md" bg="yellow.100" boxShadow="lg">
        <Heading size="xl" color="orange.600" mb={4}>Welcome to Your Travel Destination!</Heading>
        <Text fontSize="lg">Explore amazing cities, discover weather details and plan your next adventure.</Text>
        <Link href="/search" passHref>
          <Button bgColor="orange.500" p={4} m={4} size="lg">Start Exploring</Button>
        </Link>
      </Box>
      <Component/>
    </Container>
  ) 
}