export default function validate(values) {
  let errors = {};
  if (!values.tenantname) {
    errors.tenantname = "required";
  }
  if (!values.hostingenvState) {
    errors.hostingenvState = "required";
  // } else if (!values.hostingenvState.selected) {
  //   errors.hostingenvState = "Please select";
  }

 // IF Selected (the first value in the dropdown) IS CHOOSED,  IT SHOULD NOT BE POSSIBLE TO PUSH THROUGH


  if (!values.envState) {
    errors.envState = "required";
  // } else if (values.selected) {
  //   errors.envState = "Please select";
  }

  // IF Selected (the first value in the dropdown) IS CHOOSED,  IT SHOULD NOT BE POSSIBLE TO PUSH THROUGH

  if (values.envState.HAPI) {
    //disabled 
  } else if (!values.envState.HAPI) {
    //undisabled
  }

   // IF HAPI-ID WAS CHOOSED IN THE DROPDOWN (ENVSTATE), SHOULD IT UNDISABLED AND POSSIBLE TO FILL IN

  // if (!values.HapiId) {
  //   errors.HapiId = "required";
  // } else if (!values.hostingenvState.value === "selected") {
  //   errors.hostingenvState = "Please select";
  // }


  if (!values.check) {
    errors.check = "required";
  // } else if (!values.hostingenvState.value === "selected") {
  //   errors.hostingenvState = "Please select";
  }

  // THE CHECKBOXES SHOULD BE POSSIBLE TO CHOOSE VOLUNTARILY. BUT AT LEAST ONE MUST BE SELECTED TO BE ABLE TO SUBMIT

  if (values.checkT === false) {
    errors.checkT = "required";
    } else if (values.checkT) {
     
  }

  // IF checkT IS SELECTED, DROPDOWNLIST SHOULD BE UNDISABLED

  // if (!values.Stenantfromtoken) {
  //   errors.Stenantfromtoken = "required";
  // //  } else if (values.checkT === "selected") {
  // //    errors.hostingenvState = "Please select";
  // }
 
  return errors;
}