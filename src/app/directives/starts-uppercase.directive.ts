import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createStartsWithUpperCase } from "../validations/startsWithUpperCase.validator";

@Directive({
    selector:"[startsWithUppercase]",
    providers:[{
        provide:NG_VALIDATORS,
        useExisting: StartsWithUpperCaseDirective,
        multi:true
}]
})
export class StartsWithUpperCaseDirective implements Validator{
    
    validate(control: AbstractControl): ValidationErrors | null {
       return createStartsWithUpperCase()(control);
    }
    registerOnValidatorChange?(fn: () => void): void {
      
    }


}