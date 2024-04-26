import {
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Card,
  Box,
  Avatar,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box p="50px">
        <Card size="sm" w="300px" p="10px">
          <CardHeader>
            <Center>
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </Center>
            <Center>
              <Text py="10px" fontSize="xl" as="b">
                Lindsey James
              </Text>
            </Center>
            <Center>
              <Text fontSize="md" color="skyblue" as="b">
                @landsey_jam3s
              </Text>
            </Center>
          </CardHeader>
          <CardBody>
            <Center>
              <Text textAlign="center">
                Actress, musician, songwriter
                <br /> and artist.PM for work inquires
                <br /> or
                <br />
                <Text as="span" color="skyblue">
                  #tag
                </Text>
                <br /> me in your posts.
              </Text>
            </Center>
            <Flex pt="10px">
              <Button size="sm" mx="5px" p="5px">
                #ART
              </Button>
              <Button size="sm" mx="5px" p="5px">
                #PHOTOGRAPHY
              </Button>
              <Button size="sm" mx="5px" p="5px">
                #MUSIC
              </Button>
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center" alignItems="center">
              <Button borderTopRadius="md" ml="30px" colorScheme="gray">
                Message
              </Button>
              <Button borderTopRadius="md" colorScheme="blue" margin="10px">
                Follow
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export default App;
