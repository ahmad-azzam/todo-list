import React from "react";
import { FormTaskProps, NewComponentProps } from "./type";

const withEditForm = (Component: React.ComponentType<FormTaskProps>) => {
  const NewComponent: React.FC<NewComponentProps> = ({setOpen}) => {
    return <Component buttonText="Edit" setOpen={setOpen} isEdit />;
  };

  return NewComponent;
};

export default withEditForm;
