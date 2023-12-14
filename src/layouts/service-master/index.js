
import { useNavigate } from 'react-router-dom';
import apiCall from '../../utils/apiCallHelper';
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import ServiceRegister from './Components/ServiceRegister';
import ShowServices from './Components/ShowServices';
import { useState } from "react";

const Service = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showServiceRegister, setShowServiceRegister] = useState(false);

  const handleRegisterServiceClick = async () => {
    setData([]);
      setShowServiceRegister(true);
  };

 
  return (
    <DashboardLayout>
      <DashboardNavbar />  
      {showServiceRegister?<ServiceRegister/>:<ShowServices/>}        
         <MDBox mt={4} mb={1}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          {!showServiceRegister && (
            <MDButton variant="gradient" color="info" style={{ width: '200px' }} onClick={handleRegisterServiceClick}>
              Register Service
            </MDButton>
          )}
          </div>
        </MDBox>
        <div style={{ marginTop: '200' }}>
      <Footer />
      </div>
    </DashboardLayout>
  );
};

export default Service;
