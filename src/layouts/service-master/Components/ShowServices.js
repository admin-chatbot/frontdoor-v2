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

import { useState } from "react";
import { useEffect } from 'react';

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
import apiCall from '../../../utils/apiCallHelper';




// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Select } from "@mui/material";
import { object } from "prop-types";
import SingleSelect from "components/MDSingleSelect";



function ShowServices() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  const fetchData = async () => {
    try {
      const response = await apiCall({
        method: 'get',
        url: 'http://localhost:9090/api/v1/service/1/',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-AUTH-LOG-HEADER': '0',
        },
      });

      if (response.status === 200) {
        console.log('API call successful:', response.data);
        setData(response.data);
      } else {
        console.error('API call failed:', response.status, response.statusText);
        setError('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('API call failed:', error.message);
      setError('Failed to fetch data from the API');
    } finally {
      setLoading(false);
    }
  };
//call the API once when the component loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ paddingTop: '20px', paddingLeft: '20px' }}>
        <h4>Available Services</h4>
        {data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Endpoint</th>
                <td style={{ width: '10px' }}></td> {/* Adjust width for padding */}
                <th>Method</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.endpoint}</td>
                  <td style={{ width: '10px' }}></td> {/* Adjust width for padding */}
                  <td>{item.method}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
     
    </div>

  );
 
}

export default ShowServices;
