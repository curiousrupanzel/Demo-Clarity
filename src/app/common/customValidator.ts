export class CustomValidator {
  // Validates URL
  static urlValidator(url): any {
    if (url.pristine) {
      return null;
    }
    const URL_REGEXP = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    url.markAsTouched();
    if (URL_REGEXP.test(url.value)) {
      return null;
    }
    return {
      invalidUrl: true
    };
  }

  // Validates passwords
  static matchPassword(group): any {
    const password = group.controls.password;
    const confirm = group.controls.confirm;
    if (password.pristine || confirm.pristine) {
      return null;
    }
    group.markAsTouched();
    if (password.value === confirm.value) {
      return null;
    }
    return {
      invalidPassword: true
    };
  }

  // Validates numbers
  static numberValidator(Inputnumber): any {
    if (Inputnumber.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    Inputnumber.markAsTouched();
    if (NUMBER_REGEXP.test(Inputnumber.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }

  // Validates alphabets only
  static alphabetValidator(InputText): any {
    if (InputText.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^[a-zA-Z\s]*$/;
    InputText.markAsTouched();
    if (NUMBER_REGEXP.test(InputText.value)) {
      return null;
    }
    return {
      invalidText: true
    };
  }
  // Validates Pan Number
  static PANNumberValidator(InputPan): any {
    if (InputPan.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^([A-Z]{5}[0-9]{4}[A-Z]{1})*$/;
    InputPan.markAsTouched();
    if (NUMBER_REGEXP.test(InputPan.value)) {
      return null;
    }
    return {
      invalidPan: true
    };
  }
  // Validates GST Number.
  static GSTNumberValidator(Input): any {
    if (Input.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^(\d{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1})*$/;
    Input.markAsTouched();
    if (NUMBER_REGEXP.test(Input.value)) {
      return null;
    }
    return {
      invalidGst: true
    };
  }
  // Validates US SSN
  static ssnValidator(ssn): any {
    if (ssn.pristine) {
      return null;
    }
    const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    ssn.markAsTouched();
    if (SSN_REGEXP.test(ssn.value)) {
      return null;
    }
    return {
      invalidSsn: true
    };
  }
  // Validates US phone numbers
  static phoneValidator(Inputnumber): any {
    if (Inputnumber.pristine) {
      return null;
    }
    const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    Inputnumber.markAsTouched();
    if (PHONE_REGEXP.test(Inputnumber.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }
  // Validates zip codes
  static zipCodeValidator(zip): any {
    if (zip.pristine) {
      return null;
    }
    const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    zip.markAsTouched();
    if (ZIP_REGEXP.test(zip.value)) {
      return null;
    }
    return {
      invalidZip: true
    };
  }

  // validating email should not have domain name
  static emailDomainValidator(email): any {
    if (email.pristine) {
      return null;
    }
    email.markAsTouched();
    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!!!emailRegx.test(email.value)) {
      return {
        invalidEmail: true
      };
    }
    return null;
  }

  // Validates WhiteSpaces
  static whiteSpaceValidator(Input): any {
    if (Input.pristine) {
      return null;
    }
    Input.markAsTouched();
    if ((Input.value || '').trim().length !== 0) {
      return null;
    }
    return {
      invalidInput: true
    };
  }

  static domainChecker(Input): any {
    if (Input.pristine) {
      return null;
    }
    Input.markAsTouched();
    if (((Input.value || '').includes('gmail')) || ((Input.value || '').includes('dal.ca'))) {
      return null;
    }
    return {
      invalidDomain: true
    };
  }
}
