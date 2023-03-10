import { Grid } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';

export const Input = (props) => {
    const { name, edit, defaultValue, value, setOk, setCancel, setEdit, changeValue } = props

    return (
        <h3>
            <span>{name}</span>
            {
                edit ?
                    <>
                        <input defaultValue={defaultValue} onChange={changeValue} />
                        <CheckIcon style={{ right: "25px" }} onClick={setOk}>ok</CheckIcon>
                        <CancelIcon onClick={setCancel}>return</CancelIcon>
                    </> :
                    <>
                        {value}
                        <EditIcon onClick={setEdit}>edit</EditIcon>
                    </>
            }
        </h3>
    )
}
