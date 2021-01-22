import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if(!state.inputs[inputId]){
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs,
        formIsValid: action.formIsValidity,
      };
    default:
      return state;
  }
};

export const useForm = (intialInputs, initialFormValadity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: intialInputs,
    isValid: initialFormValadity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValadity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValadity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};

// export default useForm;
