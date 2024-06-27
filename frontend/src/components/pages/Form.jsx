import React from "react";
import Input from "../Input"
import Button from "../button/Button";
import {Link} from 'react-router-dom';


export default function Form() {
  const [formData, setForm] = React.useState({
      firstName: '',
      lastName: '',
      birthDate: '',
      sex: false,
      hasError: false,
    })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'radio' ? (checked ? value : prevFormData[name]) : value,
    }))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('.')
    return new Date(`${year}-${month}-${day}`)
  }

  const isValidDate = (dateString) => {
    const regex = /^\d{1,2}\.\d{1,2}\.\d{4}$/
    if (!regex.test(dateString)) return false
  
    const [day, month, year] = dateString.split('.').map(Number)
    const date = new Date(year, month - 1, day)
  
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    )
  }

  const validateForm = () => {
    const { firstName, lastName, birthDate, sex } = formData
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      isValidDate(birthDate) &&
      sex !== false
    )
  }
  const isFormValid = validateForm()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateForm()) {
      const formattedDate = {
        ...formData,
        birthDate: formatDate(parseDate(formData.birthDate)),
      }
      console.log('Form Data Submitted:', formattedDate)

      setForm((prevFormData) => ({
        ...prevFormData,
        hasError: false,
      }))
      sendData()
    } else {
      setForm((prevFormData) => ({
        ...prevFormData,
        hasError: true,
      }));
    }
  }

  const sendData = () => {
    fetch("http://localhost:5000/save-client", {
        method: "post",
        headers: {
            "Accept":"applications/json",
            "Content-type":"application/json"
        },
        body: JSON.stringify(formData)
    }).then((data) => {
        return data.json()
    }).then((finalData) => {
        console.log(finalData.msg)
        setForm({
          firstName: '',
          lastName: '',
          birthDate: '',
          sex: false,
          hasError: false
        })
      }).catch((error) => {
        console.error("Client data was not sent", error)
      })
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Zadejte své osobní údaje</h3>
        <div className="input-group">
          <Input
            label="Jméno"
            type="text"
            name="firstName"
            value={formData.firstName}
            style={{
              border: formData.hasError && formData.firstName.trim() === "" ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <Input
            label="Příjmení"
            type="text"
            name="lastName"
            value={formData.lastName}
            style={{
              border: formData.hasError && formData.lastName.trim() === "" ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          <Input
            label="Datum narození"
            type="text"
            name="birthDate"
            value={formData.birthDate}
            style={{
              border: formData.hasError && !isValidDate(formData.birthDate) ? "1px solid red" : null,
            }}
            onChange={handleChange}
            placeholder="dd.mm.yyyy"
          />
          <div className="radio-group" style={{ 
            border: formData.hasError && formData.sex === false ? "1px solid red" : null,
          }}>
            <label>
              <Input
                label="Male"
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === 'male'}
                onChange={handleChange}
              />
            </label>
            <label>
              <Input
                label="Female"
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === 'female'}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <Button type="submit" isActive={isFormValid}>Potvrdit</Button>
      </form>
    </div>
  )
}