import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import { Modal } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

import './LawyerDashboard.css'

const LawyerDashboard = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const columns = [
    { field: "id", headerName: "ID", minWidth: 300, flex: 1 },

    { field: "name", headerName: "Name", minWidth: 300, flex: 1, },

    {
      field: "city",
      headerName: "City",
      minWidth: 300,
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 300,
      flex: 0.4,
      renderCell: (cellValues)=>{
        return (
        // <Link href="#">View</Link>
        <>
          <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Modal>
        </>
        )
         
        
      }
    },

    {
      field: "status",
      headerName: "Status",
      minWidth: 300,
      flex: 0.5,
    },

  ];

  const rows = [];

  rows.push({
    id: 1,
    name: "Aryan",
    city: "Dehradun",
    description: "This is the description",
    status: "Accept",
  },
  {
    id: 2,
    name: "Sachin",
    city: "Bangalore",
    description: "This is the description",
    status: "Accept",
  });

  return (
    <>
      <nav className="lawyer-dashboard-navbar">
      <div className="lawyer-dashboard-navbar-rect" />
      <div className='lawyer-dashboard-name'>Welcome Achintya</div>
      <div className="join-as-lawyer">
        <button className="btn">Sign Out</button>
      </div>
      <br />
      <div className="navbar-line" />
    </nav>
    <br />

    <div>
    <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
    </div>

    </>
    
  )
}

export default LawyerDashboard