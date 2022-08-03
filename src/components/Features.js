import React from 'react'
import Card from './Card';
import EditIcon from '@mui/icons-material/Edit';
import LayersIcon from '@mui/icons-material/Layers';
import DevicesIcon from '@mui/icons-material/Devices';
import './Features.css'
const Features = () => {
    return(
        <div className="features">
            <Card Icon={EditIcon} title="Easy To Use" description="Editing and customizing Essential Landing is easy and fast" />
            <Card Icon={LayersIcon} title="100% Responsive" description="Editing and customizing Essential Landing is easy and fast" />
            <Card Icon={DevicesIcon} title="50+ New Pages" description="Editing and customizing Essential Landing is easy and fast" />
            
        </div>
    )
}

export default Features