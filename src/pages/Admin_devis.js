import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material';
import { Paper } from '@mui/material';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

const Admin_devis = () => {

    return (
        <div className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <NavigationAdmin />
            <div className="devis">
                <p className="Titre">Devis</p>
            </div>
        </div>
    );
};

export default Admin_devis;