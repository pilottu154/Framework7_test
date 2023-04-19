import React, { useState } from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  Button,
  Block,
  Card,
} from "framework7-react";
import axios from "axios";
import InputMask from "react-input-mask";

const FormPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    phone_number: "",
    car_number: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/users", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page name="form">
      <Navbar title="Form" backLink="Back"></Navbar>
      <Card>
      <List strongIos dividersIos insetIos>
        <ListInput
          type="text"
          name="user_name"
          placeholder="Имя"
          value={formData.user_name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          clearButton
        />
        <InputMask
          mask="+7 (999) 999 99-99"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        >
          {(inputProps) => (
            <ListInput
              type="tel"
              name="phone_number"
              placeholder="Номер телефона"
              {...inputProps}
              clearButton
            />
          )}
        </InputMask>
        <InputMask
          mask="a 999 aa"
          value={formData.car_number}
          onChange={(e) =>
            setFormData({ ...formData, car_number: e.target.value })
          }
        >
          {(inputProps) => (
            <ListInput
              type="text"
              name="car_number"
              placeholder="Номер Автомобиля"
              {...inputProps}
              clearButton
            />
          )}
        </InputMask>
      </List>

      <Block strongIos outlineIos className="grid grid-cols-3 grid-gap">
        <Button onClick={handleSubmit} large raised>
          Добавить
        </Button>
      </Block>
      </Card>
    </Page>
  );
};

export default FormPage;
