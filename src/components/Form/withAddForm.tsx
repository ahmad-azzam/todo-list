import React from "react";
import { FormTaskProps, NewComponentProps } from "./type";

const withAddForm = (Component: React.ComponentType<FormTaskProps>) => {
  const NewComponent: React.FC<NewComponentProps> = ({setOpen}) => {
    return <Component buttonText="Add" setOpen={setOpen} />;
  };

  return NewComponent;
};

export default withAddForm;
