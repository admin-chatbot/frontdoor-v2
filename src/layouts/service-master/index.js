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

// @mui material components
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Material Dashboard 2 React components

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Service() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceName: "",
    keywords: "",
    requestType: "",
    responseType: "",
    serviceEndpoint: ""
    
  });

  const [errors, setErrors] = useState({
    serviceName: "",
    keywords: "",
    requestType: "",
    responseType: "",
    serviceEndpoint: ""   
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

  const config = {
    method: 'post',
    url: 'http://localhost:9090/api/v1/service/', // Replace with your API endpoint
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
    data: formData,
};
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
//navigate("/registered");
//console.log(formData);
};


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
             
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MDInput type="serviceName" name = "serviceName" label="Service Name" style={{ width: '400px' }} onChange={handleInputChange} />
           </div>
            </MDBox>
            <MDBox mb={2}>             
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MDInput type="keywords" name = "keywords" label="Keywords With Comma Separated Values" style={{ width: '400px' }} onChange={handleInputChange} />
</div>
            </MDBox>
            <MDBox mb={2}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MDInput type="requestType" name = "requestType" label="Request Type" style={{ width: '400px' }} onChange={handleInputChange} />
  </div>
            </MDBox>
            <MDBox mb={2}>
  
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MDInput type="responseType" name = "responseType" label="response Type" style={{ width: '400px' }} onChange={handleInputChange}/>
  </div>
            </MDBox>
            <MDBox mb={2}>
             
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <MDInput type="serviceEndpoint" name = "serviceEndpoint" label="Service Endpoint" style={{ width: '400px' }} onChange={handleInputChange}/>
  </div>
            </MDBox>
           
            <MDBox mt={4} mb={1}>
                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
 
              <MDButton variant="gradient" color="info" style={{ width: '200px' }} onClick={onHandleSubmit}>
                Submit
              </MDButton>
              </div>
            </MDBox>
            
          </MDBox>
        </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Service;
