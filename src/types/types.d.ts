export type HeaderProps = {
  text: string;
  hrWidth?: string | "170px";
};

export type AppCardProps = {
  info: {
    date: string;
    time: string;
    address: string;
    user: string;
    phone: string;
    email: string;
  };
};

export type ArrowBackProps = {
  backgroundColor?: string;
  fontColor?: string;
  borderColor?: string;
  padding?: string;
  borderBottom?: string;
};

export type UserRegisterType = {
  name: string;
  last_name: string;
  phone_number: number;
  email: string;
  password: string;
  confirm_password: string;
};

export type userLoginType = {
  email: string;
  password: string;
};
export type PropertieDataType = {
  title: string;
  address: string;
  description: string;
  price: number;
  operation: "venta" | "alquiler";
  mts: number;
  rooms?: number;
  bathroom?: number;
  status?: "available" | "closed" | "on hold";
  createdAt?: Date;
  updatedAt?: Date;
};
