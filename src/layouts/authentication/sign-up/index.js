/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import axios from "axios";
import { string } from "prop-types";
import apiCall from "../../../utils/apiCallHelper";

function SignUp() {  
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        
      clientName: "",
        email: "",
        password: "",
        address: "",
        contactNumber: "",
        turnover:"",
        employeeCount: "",
        status:"",
        gstNumber: ""
      
    });

    const [errors, setErrors] = useState({
    
      clientName: "",
      email: "",
      password: "",
      address: "",
      contactNumber: "",
      turnover:"",
      employeeCount: "",
      status:"",
      gstNumber: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear the corresponding error when the input changes
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const handleSubmit = (data) => {
      console.log(data);
      navigate("/u")
  }
  
  const onHandleSubmit = async () => {
    console.log("Click");

        // Simple validation
        const newErrors = {};

        if (!formData.clientName || formData.clientName.length < 3) {
            newErrors.name = "The name field must contain at least 3 characters.";
        }

        if (!formData.email || !formData.email.includes("@")) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password || formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        

        if (Object.keys(newErrors).length > 0) {
            // If there are errors, update the errors state and stop form submission
            setErrors(newErrors);
            return;
        }
        const config = {
            method: 'post',
            url: 'http://localhost:9090/api/v1/client/', // Replace with your API endpoint
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: formData,
            
        };
          console.log(formData);
        try {
            const response = await apiCall(config);

            if (response.status === 200) {
                console.log('API call successful:', response.data);
                // Handle the successful response, e.g., store authentication token
                navigate("/u");
            } else {
                console.error('API call failed:', response.status, response.statusText);
                // Handle errors
                // Implement your error handling logic here
            }
        } catch (error) {
            console.error('API call failed:', error.message);
            // Handle errors
            // Implement your error handling logic here
        }
        // Validation passed, perform form submission
        navigate("/registered");
        console.log(formData);
    };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
         
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
         
            <MDBox mb={2}>
              <MDInput type="text" label="Name" name="clientName" variant="standard" fullWidth  onChange={handleInputChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" name="email" variant="standard" fullWidth onChange={handleInputChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>

          
           
            <MDBox mb={2}>
              <MDInput type="address" label="Address" name="address" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="contactNumber" label="Contact Number" name="contactNumber" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="turnover" label="Turnover" name="turnover" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="employeeCount" label="Employee Count" name="employeeCount" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="status" label="Status" name="status" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="gstNumber" label="Gst Number" name="gstNumber" variant="standard" fullWidth onChange={handleInputChange} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={onHandleSubmit}>
                Register
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default SignUp;
