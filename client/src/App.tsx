import { Flex, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router";

function App() {
  return (
    <Flex
      direction="column"
      align="center"
      minH="100dvh"
      w="full"
      pt="10"
      gap="10"
    >
      <Heading fontSize="3xl">Japanese Practice</Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap="5"
        w="full"
        maxW="800px"
        px="5"
      >
        {["Dates", "Time", "Numbers"].map((option) => (
          <Link key={option} to={`/${option.toLowerCase()}`}>
            <Box
              flex="1"
              textAlign="center"
              fontSize="lg"
              rounded="md"
              borderWidth="1px"
              borderColor="gray.400"
              padding="6"
              cursor="pointer"
              _hover={{
                borderColor: "blue.400",
                bg: "gray.800",
              }}
            >
              {option}
            </Box>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
