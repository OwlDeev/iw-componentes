import * as React from "react";
import '../css/Buttons.css'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import DoneIcon from '@mui/icons-material/Done';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

function Buttons() {
  return (
    <>
      <Button variant="outlined" startIcon={<DeleteIcon />} className='buttonMargin'>
        Eliminar
      </Button>

      <Button variant="outlined" startIcon={<ArrowBackIcon />} className='buttonMargin'>
        Volver
      </Button>

      <Button variant="outlined" startIcon={<SaveIcon />} className='buttonMargin'>
        Guardar
      </Button>

      <Button variant="outlined" startIcon={<DoneIcon />} className='buttonMargin'>
        Aceptar
      </Button>

      <Button variant="outlined" startIcon={<HourglassEmptyIcon />} className='buttonMargin'>
        Iniciar
      </Button>
    </>
  );
}

export default Buttons;
