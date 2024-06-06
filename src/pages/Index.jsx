import { Box, Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={6}>
        <Heading as="h1" size="lg">Todo App</Heading>
        <IconButton aria-label="User Profile" icon={<FaUser />} size="lg" />
      </HStack>

      {/* Add Todo Section */}
      <HStack mb={6}>
        <Input placeholder="Add a new todo" />
        <Button colorScheme="blue">Add</Button>
      </HStack>

      {/* Todo List */}
      <VStack spacing={4} align="stretch">
        {/* Placeholder for Todo Items */}
        <HStack justifyContent="space-between" p={4} borderWidth="1px" borderRadius="md">
          <Checkbox />
          <Text flex="1" mx={2}>Sample Todo Item</Text>
          <IconButton aria-label="Delete Todo" icon={<FaTrash />} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;