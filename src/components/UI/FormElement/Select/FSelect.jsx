import React from 'react'
// import Select from "react-select";
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
// import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Controller, useForm } from 'react-hook-form'
import { Select, TextField, MenuItem } from '@mui/material'
import style from './FSelect.module.scss'

const FSelect = ({
  disabled = false,
  options = [],
  control,
  name,
  label,
  required
}) => {
  return (
    <div className={style.select}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          return disabled ? (
            <TextField
              {...field}
              label={label}
              fullWidth
              className={style.selectInput}
              disabled={disabled}
              InputProps={{
                endAdornment: <KeyboardArrowDownIcon />
              }}
              value={field.value?.label}
            />
          ) : (
            <TextField
              {...field}
              label={label}
              select
              fullWidth
              className={style.selectInput}
              SelectProps={{
                IconComponent: KeyboardArrowDownIcon
              }}
              required={required}
              value={field.value}
            >
              {options.map((item) => (
                <MenuItem key={item.id} value={item}>
                  {item?.label}
                </MenuItem>
              ))}
            </TextField>
          )
        }}
      />
    </div>
  )
}

export default FSelect
