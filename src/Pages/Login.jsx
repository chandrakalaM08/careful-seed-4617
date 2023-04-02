import { NavLink, Navigate } from 'react-router-dom';
import {
    HStack,
    Center,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react';
  import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
  import Footer from '../Components/Footer';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext"
import { element } from 'prop-types';
 const SignIn=()=> {
    const navigate= useNavigate();
    const {authState} = useContext(AuthContext)
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [Name, setName] = useState("")


  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    const url = `http://localhost:3000/users`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("here in login page data is", data)
        
        data.filter((element, index) => {
          console.log("inside filter, email and password ", email,password, "element is",element)
          if (email === element.email && password === element.password) {
            console.log("inside if")
            authState.isAuth = true
          }
        })

        if (  authState.isAuth=== false) { 
          alert("Wrong Credentials!")
        }
        else {
          console.log("coming inside else to navigate");
         navigate("/cart")
        }
      })
      .catch(error => alert('Error validating user'));
    
    
  }
   
   const logoutUser=()=>{
          
  }


    return(
        <>
            <Navbar />
        <div>
            {Name ? <div style={{ width: "fit-content", margin: "auto", marginTop: "150px" }}>
      {Name ? <><h1 style={{fontSize:"35px",fontWeight:"700"}}>Hello {Name}</h1><button onClick={logoutUser} style={{ backgroundColor:"red",marginTop:"30px",color:"white",fontSize:"20px", padding:"10px",borderRadius:"20px"}}>Logout from  : {Name}</button></> : "" }
      </div> : <div id='loginform'>  
            <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'} style={{marginTop: "20px"}}>
                    <HStack gridColumn={{ sm: 1 } }>
                {/* Facebook */}
                <Button
                style={{
                        width: "170px",
                        height: "30px",
                        borderRadius: "5px",
                        padding: "10px"
                    }}                            
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text>Login with Facebook</Text>
                  </Center>
                </Button>

                {/* Google */}
                <Button w={"full"}
                 style={{
                        width: "170px",
                        height: "30px",
                        borderRadius: "5px",
                        padding: "10px"
                     }}
                        variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Login with Google</Text>
                  </Center>
                </Button>
              </HStack>
              <Text>OR</Text>
          <Heading fontSize={'4xl'}>Sign in to DazzleLane</Heading>
          <Text fontSize={'lg'} color={'gray'}>
            to enjoy Everyday <Link color={'blue'}>Luxury Jewellery</Link> 👑
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
                <Input name='email' value={email} id='email' onChange={handleEmailChange} required type="email"
                    style={{
                        width: "360px",
                        height: "30px",
                        borderRadius: "5px",
                        padding: "10px"
                    }} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
            <Input name='password' value={password} required id='password' onChange={handlePasswordChange} type="password"
              style={{
                        width: "360px",
                        height: "30px",
                        borderRadius: "5px",
                        padding: "10px"
                    }} />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                 
                direction={{ base: 'column', sm: 'column' }}
                align={'start'}
                justify={'space-between'}>
                <Stack>
                <Checkbox background={"linear-gradient(to right, rgb(177, 216, 183), rgb(148, 201, 115))"}>Remember me</Checkbox>
                </Stack>

                <Stack  p={5}
                    align={'center'}
                style={{paddingTop:"40px"}}>
                  <Text align={'center'}>
                    
                    New to DazzleLane?
                    <NavLink to="/signup"><Link color={'blue'} style={{paddingLeft:"10px"}}>Create Account</Link></NavLink>
                  </Text>
                </Stack>
              </Stack>
            <Button disabled={(email === "" || password === "")}
                style={{width: "360px",
                        fontSize:" 14px",
                        borderStyle: "none",
                        padding:" 12px",
                        borderRadius: "5px"}}
                background="linear-gradient(to right, rgb(177, 216, 183), rgb(148, 201, 115))"
                color={'white'}
                onClick={handleSubmit}
                _hover={{
                  background:"linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
                </div>}</div>
            <Footer/>
        </>
  )
}


export default SignIn;