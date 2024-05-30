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

export type userLoginType = {
  email: string;
  password: string;
};
