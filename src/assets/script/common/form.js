import { DatabaseService } from "../services/database.service";
import { Validator} from './validator';

export class Form {
    constructor(element, inputs) {
        this.element = element;
        this.inputs = inputs;
    }

    clearInputs() {
        Object.keys(this.inputs).forEach(key => this.element[key].value = '');
    }

    setError(key, error) {
        const div = this.element[key].parentNode.getElementsByClassName('error-message')[0];
        div.innerText = error;
    }

    clearErrors() {
        Object.keys(this.inputs).forEach(key => this.setError(key,''))
    }

    isValid() {
        let isFormValid = true;
        this.clearErrors();

        Object.keys(this.inputs).forEach((key) => {
            const validators = this.inputs[key];
            let isInputValid = true;
            validators.forEach(type => {
                const validation = Validator[type](this.element[key].value);
                if(!validation.check && isInputValid) {
                    isInputValid = false;
                    isFormValid = false;
                    this.setError(key, validation.error);
                }
            })
            
        })

        return isFormValid;
    }
}