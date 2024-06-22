import { UserRegisterType } from "@/types/types";

export const checker = (userData: UserRegisterType) => {
  const { name, last_name, phone_number, email, password, confirm_password } =
    userData;

  let valid = true;
  let newErrors = {
    name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  if (!name) {
    newErrors.name = "El nombre es obligatorio";
    valid = false;
  }

  if (!last_name) {
    newErrors.last_name = "El apellido es obligatorio";
    valid = false;
  }

  if (!phone_number) {
    newErrors.phone_number = "El número de teléfono es obligatorio";
    valid = false;
  }

  if (!email) {
    newErrors.email = "El correo electrónico es obligatorio";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "El correo electrónico no es válido";
    valid = false;
  }

  if (!password) {
    newErrors.password = "La contraseña es obligatoria";
    valid = false;
  } else if (password.length < 6) {
    newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    valid = false;
  }

  if (!confirm_password) {
    newErrors.confirm_password =
      "La confirmación de la contraseña es obligatoria";
    valid = false;
  } else if (password !== confirm_password) {
    newErrors.confirm_password = "Las contraseñas no coinciden";
    valid = false;
  }

  if (!valid) return newErrors;
  return valid;
};
