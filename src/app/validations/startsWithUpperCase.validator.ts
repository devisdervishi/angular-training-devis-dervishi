import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function createStartsWithUpperCase():ValidatorFn {
    return (control:AbstractControl):ValidationErrors |null =>{

        if (!control.value){ return null};

        const upperCase=/^[A-Z].*/.test(control.value)
        return !upperCase? {startsWithUpperCase:true}:null;
    }


}