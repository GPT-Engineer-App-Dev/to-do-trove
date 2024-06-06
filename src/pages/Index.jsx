import { Container, VStack, HStack, Input, Button, Checkbox, Text, Box, Heading, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrashAlt, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return; // Prevent adding empty todos
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue(""); // Clear the input field
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={6}>
        <Heading as="h1" size="lg">Todo App</Heading>
        <IconButton aria-label="User Profile" icon={<FaUserCircle />} size="lg" />
      </HStack>

      {/* Add Todo Section */}
      <HStack mb={6}>
        <Input 
          placeholder="Add a new todo" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <Button colorScheme="blue" onClick={addTodo}>Add Todo</Button>
      </HStack>

      {/* Todo List */}
      <VStack spacing={4} align="stretch">
        {/* Placeholder for Todo Items */}
        {todos.map((todo, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
            <Checkbox isChecked={todo.completed}>
              <Text as="span" ml={2}>{todo.text}</Text>
            </Checkbox>
            <IconButton aria-label="Delete Todo" icon={<FaTrashAlt />} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;