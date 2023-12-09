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
import MultipleSelect from "components/MDMultiSelect";
import SelectSingle from "components/MDSingleSelect";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';




// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Select } from "@mui/material";
import { object } from "prop-types";
import SingleSelect from "components/MDSingleSelect";



function Service() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId:"",
    applicationId:"",
    serviceName: "",
    httpRequest: "",
    responseType: [],
    serviceEndpoint: ""
    
  });

  const [errors, setErrors] = useState({
    clientId:"",
    applicationId:"",
    serviceName: "",
    httpRequest: "",
    responseType: [],
    serviceEndpoint: ""
});

const [selectedValue, setSelectedValue] = useState('');
const handleSelectChange = (event) => {
  const selectedValue = event;
  console.log(event); // Check if this prints the selected value
  setSelectedValue(event);
  setFormData({
    ...formData,
    httpRequest: event,
  });
}

const handleMultipleSelectChange = (event1) => {
  const selectedValues = event1;
  console.log(selectedValues); // Check if this prints the selected value
  setSelectedValue(selectedValues);
  setFormData({
    ...formData,
    responseType: selectedValues,
  });
}
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
        'X-AUTH-LOG-HEADER': '0',
    },
    data: formData,
};
try {
  const response = await apiCall(config);

  if (response.status == 200) {
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
          <MDInput type="clientId" name = "clientId" label="Client Id" style={{ width: '400px' }} onChange={handleInputChange} />
          </div>
          </MDBox>

          <MDBox mb={2}>             
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MDInput type="applicationId" name = "applicationId" label="Application Id" style={{ width: '400px' }} onChange={handleInputChange} />
          </div>
          </MDBox>
          
          

      <MDBox mb={2}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <SelectSingle 
      values={[
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
      ]}
      label="HTTP Request" name="httpRequest"
      onSelect={handleSelectChange} // Pass the callback function to handle the selection
    />
  </div>
</MDBox>
      
      
          
         <MDBox mb={2}>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MDInput type="serviceName" name = "serviceName" label="Service Name" style={{ width: '400px' }} onChange={handleInputChange} />
         </div>
         </MDBox>  
            
         <MDBox mb={2}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Pass requestType prop to MultipleSelect */}
    <MultipleSelect
      requestType={['application/json', 'application/xml']}
      label="Response Type"
      name="responseType"
      onChange={handleMultipleSelectChange}
    />
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
