import React from "react";

export type FormTaskProps = {
  isEdit?: boolean;
  buttonText: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NewComponentProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
