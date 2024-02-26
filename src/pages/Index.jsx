import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, HStack, Icon, Spacer } from "@chakra-ui/react";
import { FaCoffee, FaGift, FaUserCircle, FaShoppingBag } from "react-icons/fa";

const Index = () => {
  return (
    <>
      {/* Header */}
      <Box as="header" bg="green.600" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex align="center">
            <Heading as="h1" size="lg">
              Starcoffee
            </Heading>
            <Spacer />
            <HStack spacing={4}>
              <Button leftIcon={<FaCoffee />} variant="ghost" colorScheme="whiteAlpha">
                Menu
              </Button>
              <Button leftIcon={<FaGift />} variant="ghost" colorScheme="whiteAlpha">
                Rewards
              </Button>
              <Button leftIcon={<FaUserCircle />} variant="ghost" colorScheme="whiteAlpha">
                Sign In
              </Button>
              <Button leftIcon={<FaShoppingBag />} variant="ghost" colorScheme="whiteAlpha">
                Cart
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bgImage="https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTcwODk4Nzg0NHww&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" bgRepeat="no-repeat" h="70vh">
        <VStack h="full" justify="center" align="center" bg="blackAlpha.500" color="white">
          <Heading as="h2" size="3xl" textAlign="center">
            Handcrafted Classics
          </Heading>
          <Text fontSize="xl" maxW="lg" textAlign="center">
            Enjoy your favorite coffee at home with our best brews.
          </Text>
          <Button mt={6} size="lg" colorScheme="green" leftIcon={<FaCoffee />}>
            Order Now
          </Button>
        </VStack>
      </Box>

      {/* Featured Products */}
      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={6}>
            Featured Products
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={10}>
            <Flex direction="column" align="center">
              <Image src="https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3MDg5ODc4NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" borderRadius="md" />
              <Text mt={2} fontWeight="semibold">
                Latte Art
              </Text>
              <Text color="gray.600">Experience the art of coffee</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Image src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3MDg5ODc4NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" borderRadius="md" />
              <Text mt={2} fontWeight="semibold">
                Fresh Beans
              </Text>
              <Text color="gray.600">Quality beans for quality brews</Text>
            </Flex>
            <Flex direction="column" align="center">
              <Image src="https://images.unsplash.com/photo-1537084278693-d597e79f2939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzA4OTg3ODQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" objectFit="cover" borderRadius="md" />
              <Text mt={2} fontWeight="semibold">
                Brewing Gear
              </Text>
              <Text color="gray.600">Everything you need to make great coffee</Text>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Index;
