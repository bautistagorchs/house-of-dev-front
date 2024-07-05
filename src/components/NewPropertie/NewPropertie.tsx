"use client";

import Header from "@/commons/Header/Header";
import { useEffect, useState } from "react";
import s from "./NewPropertie.module.scss";
import { newPropertie } from "@/services/propertie.service";
import { PropertieDataType } from "@/types/types";
import { useRouter } from "next/navigation";

const NewPropertie = () => {
  const [stepper, setstepper] = useState(1);
  const navigate = useRouter();
  const [showOtherButton, setshowOtherButton] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  const [propertieData, setPropertieData] = useState<PropertieDataType>({
    _type: "",
    title: "",
    address: "",
    description: "",
    price: undefined,
    operation: "",
    total_meters: undefined,
    covered_meters: undefined,
    rooms: undefined,
    bathrooms: undefined,
    status: "",
  });
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const handleContinueClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setshowOtherButton(false);
    if (stepper === 1) {
      if (!propertieData._type || !propertieData.operation)
        return console.error(
          "Debe seleccionar que tipo de propiedad va a publicar"
        );
    }
    if (stepper === 2 && !propertieData.operation)
      return console.error("Debe seleccionar el tipo de operacion");
    e.currentTarget.blur();
    return setstepper(stepper + 1);
  };
  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setshowOtherButton(false);
    if (stepper === 1) return;
    e.currentTarget.blur();
    return setstepper(stepper - 1);
  };

  const handleButtonClick = (key: string, value: string) => {
    if (value === "otro") {
      setshowOtherButton(!showOtherButton);
      return setPropertieData({ ...propertieData, [key]: "" });
    } else if (value === "Departamento" || value === "Casa")
      setshowOtherButton(false);
    setPropertieData({ ...propertieData, [key]: value });
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPropertieData({
      ...propertieData,
      [e.target.id]: e.target.value,
    });
  };
  const handleKeyDown = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
    nextInputId: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita el comportamiento por defecto del Enter
      const nextInput =
        (document.getElementById(nextInputId) as HTMLInputElement) || null;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const autoResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
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
      {showPopup && <div className={s.overlay}></div>}
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <Header text="Publicar propiedad" hrWidth="1000px" />
        </div>
        <div className={s.content}>
          {stepper === 1 ? (
            <div className={s.step1Container}>
              <div className={s.step1}>
                <h3>¿Que tipo de propiedad quieres publicar?</h3>
                <div className={s.buttonContainer}>
                  <button
                    onClick={() => handleButtonClick("_type", "Casa")}
                    className={propertieData._type === "Casa" ? s.focus : ""}
                  >
                    Casa
                  </button>
                  <button
                    onClick={() => handleButtonClick("_type", "Departamento")}
                    className={
                      propertieData._type === "Departamento" ? s.focus : ""
                    }
                  >
                    Departamento
                  </button>
                  <button onClick={() => handleButtonClick("_type", "otro")}>
                    Otro
                  </button>
                  <input
                    type="text"
                    placeholder="Especificar aquí..."
                    value={propertieData._type}
                    style={{ display: showOtherButton ? "block" : "none" }}
                    onChange={(e) => handleButtonClick("_type", e.target.value)}
                  />
                </div>
                <div className={s.step2}>
                  <h3>¿Para que operación estará disponible?</h3>
                  <div className={s.buttonContainer}>
                    <button
                      onClick={() => handleButtonClick("operation", "Venta")}
                      className={
                        propertieData.operation === "Venta" ? s.focus : ""
                      }
                    >
                      Venta
                    </button>
                    <button
                      onClick={() => handleButtonClick("operation", "Alquiler")}
                      className={
                        propertieData.operation === "Alquiler" ? s.focus : ""
                      }
                    >
                      Alquiler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : stepper === 2 ? (
            <div className={s.step3Container}>
              <div className={s.step3}>
                <h3>Complete la informacion de la propiedad</h3>
                <form action="submit" method="post">
                  <div>
                    <label htmlFor="title">Titulo:</label>
                    <input
                      type="text"
                      id="title"
                      autoCapitalize="on"
                      value={propertieData.title}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "address")}
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Direccion:</label>
                    <input
                      type="text"
                      id="address"
                      value={propertieData.address}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "price")}
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Precio:</label>
                    <input
                      type="number"
                      id="price"
                      value={propertieData.price}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "description")}
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Descripcion:</label>
                    {/* <input
                      type="text"
                      id="description"
                      value={propertieData.description}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "total_meters")}
                    /> */}
                    <textarea
                      id="description"
                      spellCheck={"false"}
                      value={propertieData.description}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "total_meters")}
                      onInput={autoResize}
                    />
                  </div>
                  <div>
                    <label htmlFor="total_meters">Metros totales:</label>
                    <input
                      type="number"
                      id="total_meters"
                      value={propertieData.total_meters}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "covered_meters")}
                    />
                  </div>
                  <div>
                    <label htmlFor="covered_meters">Metros cubiertos:</label>
                    <input
                      type="number"
                      id="covered_meters"
                      value={propertieData.covered_meters}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "rooms")}
                    />
                  </div>
                  <div>
                    <label htmlFor="rooms">Cuartos:</label>
                    <input
                      type="number"
                      id="rooms"
                      value={propertieData.rooms}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "bathrooms")}
                    />
                  </div>
                  <div>
                    <label htmlFor="bathrooms">Baños:</label>
                    <input
                      type="number"
                      id="bathrooms"
                      value={propertieData.bathrooms}
                      onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, "status")}
                    />
                  </div>
                  <div>
                    <label htmlFor="status">Estado:</label>
                    <select
                      id="status"
                      onChange={(e) =>
                        handleButtonClick("status", e.target.value)
                      }
                    >
                      <option value="seleccione">Seleccione una opción</option>
                      <option value="disponible">Disponible</option>
                      <option value="vendida">Vendida</option>
                      <option value="en pausa">En pausa</option>
                      <option value="opeacion cerrada">
                        Operacion cerrada
                      </option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          ) : stepper === 3 ? (
            <div className={s.step4Container}>
              <div className={s.step4}>
                <h3>Revisa la informacion:</h3>
                <div className={s.textContainer}>
                  <p>
                    Tipo de propiedad: <span>{propertieData._type}</span>
                  </p>
                  <p>
                    Operacion: <span>{propertieData.operation}</span>
                  </p>
                  <p>
                    Estado: <span>{propertieData.status}</span>
                  </p>
                  <p>
                    Titulo: <span>{propertieData.title}</span>
                  </p>
                  <p>
                    Direccion: <span>{propertieData.address}</span>
                  </p>
                  <p>
                    Descripcion: <span>{propertieData.description}</span>
                  </p>
                  <p>
                    Precio: $<span>{propertieData.price}</span>
                  </p>
                  <p>
                    Metros totales:{" "}
                    <span>{propertieData.total_meters} mts</span>
                  </p>
                  <p>
                    Metros cubiertos:{" "}
                    <span>{propertieData.covered_meters} mts</span>
                  </p>
                  <p>
                    Cuartos: <span>{propertieData.rooms}</span>
                  </p>
                  <p>
                    Baños: <span>{propertieData.bathrooms}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={s.actionButtonsContainer}>
            <button onClick={handleCancelClick}>
              {stepper === 3 ? "Editar" : "Volver"}
            </button>
            {stepper !== 3 ? (
              <button onClick={handleContinueClick}>Continuar</button>
            ) : (
              <button
                onClick={() => {
                  setshowPopup(true);
                  return (document.activeElement as HTMLElement).blur();
                }}
              >
                Publicar
              </button>
            )}
          </div>
          {showPopup && (
            <div
              className={`${s.popupContainer} ${showPopup ? s.showPopup : ""}`}
            >
              <div className={s.popup}>
                <div className={s.textContainer}>
                  <h4>¿Deseas continuar y publicar la propiedad?</h4>
                  <div className={s.buttonsContainer}>
                    <button onClick={() => setshowPopup(false)}>
                      Cancelar
                    </button>
                    <button onClick={handleSubmit}>Continuar</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPropertie;
