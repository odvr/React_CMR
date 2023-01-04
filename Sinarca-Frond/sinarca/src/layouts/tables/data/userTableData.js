/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
*Sinarca
=========================================================

*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
//import React from "react";
//import React, { useState, useEffect } from 'react';

//import axios from "axios";
//import { array } from "prop-types";
//import MDAvatar from "components/MDAvatar";
//import MDBadge from "components/MDBadge";

// Images
//import team2 from "assets/images/team-2.jpg";
//import team3 from "assets/images/team-3.jpg";
///import team4 from "assets/images/team-4.jpg";

export default  function  data() {
  const Usuario = ({  name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Age = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  ///https://jsonplaceholder.typicode.com/posts


    


    

  
  return {   
    columns: [
      { Header: "usuario", accessor: "cliente", width: "45%", align: "left" },
      { Header: "age", accessor: "age", align: "left" },
      
      
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        cliente: <Usuario  name= "Hola"> 
        
        
        
        
        </Usuario> ,
        

         
        age: <Age title="Edad" description="16" />,
        
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Editar
          </MDTypography>
        ),
      },
     
    ],
  };
}



