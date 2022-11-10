const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "Enter Email_Id"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is not valid"
    } else {
        delete errors.email
    }

     if (!data.password) {
        errors.password = "Enter Correct Password"
    } else if (data.password.length < 8) {
        errors.password = "Password need to be 8 characters or more"
    } else {
        delete errors.password
    }  
     
    /* if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      } */ 


    if (type === 'signup') {

        if (!data.name.trim()) {
            errors.name = "Enter Name"
        } else {
            delete errors.name;
        }


        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm the password"
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Password is not match"
        } else {
            delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "Please Tick Above to Agree Treams & Condition"
        }

    }

    return errors;   /// ===> The Validate function finally return us an Object <=== ///
};

export default validate;