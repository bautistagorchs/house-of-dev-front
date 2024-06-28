"use client";

import Header from "@/commons/Header/Header";
import { useState } from "react";
import s from "./NewPropertie.module.scss";
import { newPropertie } from "@/services/propertie.service";
import { PropertieDataType } from "@/types/types";
import { useRouter } from "next/navigation";

const NewPropertie = () => {
  const [stepper, setstepper] = useState(1);
  const navigate = useRouter();
  const [showOtherButton, setshowOtherButton] = useState(false);
  const [propertieData, setPropertieData] = useState<PropertieDataType>({
    _type: "",
    title: "",
    address: "",
    description: "",
    price: 0,
    operation: "venta" || "alquiler",
    total_meters: 0,
    covered_meters: 0,
    rooms: 0,
    bathrooms: 0,
    status: "disponible" || "operacion cerrada" || "en pausa",
  });

  const handleContinueClick = () => {
    setshowOtherButton(false);
    if (stepper === 1 && !propertieData._type)
      return console.error(
        "Debe seleccionar que tipo de propiedad va a publicar"
      );
    if (stepper === 2 && !propertieData.operation)
      return console.error("Debe seleccionar el tipo de operacion");
    return setstepper(stepper + 1);
  };
  const handleCancelClick = () => {
    setshowOtherButton(false);
    if (stepper === 1) return;
    return setstepper(stepper - 1);
  };

  const handleOtherButton = () => {
    setshowOtherButton(!showOtherButton);
  };
  const handleButtonClick = (key: string, value: string) => {
    setPropertieData({ ...propertieData, [key]: value });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertieData({
      ...propertieData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await newPropertie(propertieData);
      console.log("respuesta del back", response);
      return navigate.push("/propiedades");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <Header text="Publicar propiedad" />
        </div>
        <div className={s.content}>
          {stepper === 1 ? (
            <div className={s.step1}>
              <h3>¿Que tipo de propiedad quieres publicar?</h3>
              <div className={s.buttonContainer}>
                <button onClick={() => handleButtonClick("_type", "Casa")}>
                  Casa
                </button>
                <button
                  onClick={() => handleButtonClick("_type", "Departamento")}
                >
                  Departamento
                </button>
                <button onClick={handleOtherButton}>Otro</button>
                <input
                  type="text"
                  placeholder="Especificar aquí..."
                  value={propertieData._type}
                  style={{ display: showOtherButton ? "block" : "none" }}
                  onChange={(e) => handleButtonClick("type", e.target.value)}
                />
              </div>
            </div>
          ) : stepper === 2 ? (
            <div className={s.step2}>
              <h3>¿Para que operación estará disponible?</h3>
              <div className={s.buttonContainer}>
                <button onClick={() => handleButtonClick("operation", "Venta")}>
                  Venta
                </button>
                <button
                  onClick={() => handleButtonClick("operation", "Alquiler")}
                >
                  Alquiler
                </button>
                {/* <button onClick={handleOtherButton}>Otro</button>
                <input
                  type="text"
                  placeholder="Especificar aquí..."
                  value={propertieData.operation}
                  style={{ display: showOtherButton ? "block" : "none" }}
                  onChange={(e) =>
                    handleButtonClick("operation", e.target.value)
                  }
                /> */}
              </div>
            </div>
          ) : stepper === 3 ? (
            <div className={s.step3}>
              <h3>Complete la informacion de la propiedad</h3>
              <form action="submit" method="post">
                <label htmlFor="title">Titulo:</label>
                <input type="text" id="title" onChange={handleChange} />
                <label htmlFor="address">Direccion:</label>
                <input type="text" id="address" onChange={handleChange} />
                <label htmlFor="price">Precio:</label>
                <input type="number" id="price" onChange={handleChange} />
                <label htmlFor="description">Descripcion:</label>
                <input type="text" id="description" onChange={handleChange} />
                <label htmlFor="mts">Metros cubiertos:</label>
                <input type="number" id="mts" onChange={handleChange} />
                <label htmlFor="rooms">Cuartos:</label>
                <input type="number" id="rooms" onChange={handleChange} />
                <label htmlFor="bathrooms">Baños:</label>
                <input type="number" id="bathrooms" onChange={handleChange} />
                <label htmlFor="status">Estado:</label>
                <select
                  id="status"
                  onChange={(e) => handleButtonClick("status", e.target.value)}
                >
                  <option value="disponible">Disponible</option>
                  <option value="en pausa">En pausa</option>
                  <option value="opeacion cerrada">Operacion cerrada</option>
                </select>
              </form>
            </div>
          ) : stepper === 4 ? (
            <div className={s.step4}>
              <h3>Revisa la informacion:</h3>
              <div className={s.textContainer}>
                <p>Tipo de propiedad: {propertieData._type}</p>
                <p>Operacion: {propertieData.operation}</p>
                <p>Estado: {propertieData.status}</p>
                <p>Titulo: {propertieData.title}</p>
                <p>Direccion: {propertieData.address}</p>
                <p>Descripcion: {propertieData.description}</p>
                <p>Precio: ${propertieData.price}</p>
                <p>Metros cubiertos: {propertieData.total_meters}mts</p>
                <p>Cuartos: {propertieData.rooms}</p>
                <p>Baños: {propertieData.bathrooms}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={s.actionButtonsContainer}>
            <button onClick={handleCancelClick}>Volver</button>
            {stepper !== 4 ? (
              <button onClick={handleContinueClick}>Continuar</button>
            ) : (
              <button onClick={handleSubmit}>Publicar</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPropertie;
