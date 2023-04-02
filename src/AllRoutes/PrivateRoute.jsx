
import {
Alert,
AlertIcon,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
const authState = useContext(AuthContext);

if (authState.isAuth === false) {
return (
<>
<Alert status="success" variant="subtle">
<AlertIcon />
Data uploaded to the server. Fire on!
</Alert>
<Navigate to={"/login"} />
</>
);
}

return <div>{children}</div>;
}

export default PrivateRoute