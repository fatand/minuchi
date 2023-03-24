import {
    Container,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  
  const SendOrder = ({cart, totalPrice}) => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailVerification, setEmailVerification] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || surname === "" || phone === "" || emailVerification === "") {
        alert("No pueden existir campos vacios");
      } else if (email != emailVerification) {
        alert("La dirección de correo ingresada no coincide");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        alert("Su compra ha sido realizada con exito.");
      }
      setEmail(" ");
    };

    const orderDate = new Date();

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
  
    const order = {
      name,
      surname,
      phone,
      email,
      cart,
      totalPrice,
      orderDate,
    };

    return (
      <div>
         <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre</FormLabel>
              <Input size="sm" onChange={(e) => setName(e.target.value)} />
              <FormLabel>Apellido</FormLabel>
              <Input size="sm" onChange={(e) => setSurname(e.target.value)} />
              <FormLabel>Telefono</FormLabel>
              <Input size="sm" onChange={(e) => setPhone(e.target.value)} />
              <FormLabel>Email</FormLabel>
              <Input size="sm" onChange={(e) => setEmail(e.target.value)} />
              <FormLabel>Verificación Email</FormLabel>
              <Input size="sm" onChange={(e) => setEmailVerification(e.target.value)} />
              <Button colorScheme='teal' type="submit" m={5}>
                 Finalizar compra
              </Button>
            </form>
          </FormControl>
        </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Nro de Pedido:{" "}
          </Text>
          <Text fontSize="2xl">
            {orderId}
          </Text>
        </Center>

        
      </div>
    );
  };
  
  export default SendOrder;
  