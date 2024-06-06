import { Container, VStack, HStack, Input, Button, Checkbox, Text, Box, Heading, IconButton } from "@chakra-ui/react";
import { FaTrashAlt, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={6}>
        <Heading as="h1" size="lg">Todo App</Heading>
        <IconButton aria-label="User Profile" icon={<FaUserCircle />} size="lg" />
      </HStack>

      {/* Add Todo Section */}
      <HStack mb={6}>
        <Input placeholder="Add a new todo" />
        <Button colorScheme="blue">Add Todo</Button>
      </HStack>

      {/* Todo List */}
      <VStack spacing={4} align="stretch">
        {/* Placeholder for Todo Items */}
        <Box p={4} borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
          <Checkbox>
            <Text as="span" ml={2}>Sample Todo Item</Text>
          </Checkbox>
          <IconButton aria-label="Delete Todo" icon={<FaTrashAlt />} />
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
          <Checkbox>
            <Text as="span" ml={2}>Another Todo Item</Text>
          </Checkbox>
          <IconButton aria-label="Delete Todo" icon={<FaTrashAlt />} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;