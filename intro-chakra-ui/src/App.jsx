import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  HStack,
  VStack,
  Radio,
  Flex,
  Card,
  Image,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

const initialState = {
  fName: "",
  lName: "",
  country: "",
  gender: "",
};

function App() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let [data, setData] = useState(initialState);

  const handleChange = (e) => {
    data = { ...data, [e.target.name]: e.target.value };
  };

  const handleSubmit = () => {
    setData(data);
    console.log(data);
  };

  return (
    <>
      <Box m="100px 550px">
        <VStack>
          <Text> Don't Have an Account</Text>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} mb="50px">
            Create Account
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input
                    placeholder="First name"
                    name="fName"
                    onChange={handleChange}
                  />
                  <FormLabel>Last name</FormLabel>
                  <Input
                    placeholder="Last name"
                    name="lName"
                    onChange={handleChange}
                  />
                  <FormLabel>Country</FormLabel>
                  <Select
                    placeholder="Select country"
                    name="country"
                    onChange={handleChange}
                  >
                    <option>India</option>
                    <option>Australia</option>
                    <option>America</option>
                  </Select>
                  <FormLabel as="legend">Select Gender</FormLabel>
                  <RadioGroup>
                    <HStack spacing="24px">
                      <Radio value="Male" name="gender" onChange={handleChange}>
                        Male
                      </Radio>
                      <Radio
                        value="Female"
                        name="gender"
                        onChange={handleChange}
                      >
                        Female
                      </Radio>
                      <Radio
                        value="Others"
                        name="gender"
                        onChange={handleChange}
                      >
                        Others
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  <Button
                    colorScheme="blue"
                    type="submit"
                    mt="20px"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </FormControl>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Text as="b">Add profile to list</Text>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  {`${data.fName}` + " " + `${data.lName}`}
                </Heading>
                <Text py="5">
                  Gender: {data.gender}
                  <br />
                  Country: {data.country}
                  <br />
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() =>
                    toast({
                      title: "Account added.",
                      description: "We've added your account for you.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Add Profile
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </VStack>
      </Box>
    </>
  );
}

export default App;
