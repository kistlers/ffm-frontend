import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "app-kontakt",
    templateUrl: "./kontakt.component.html",
    styleUrls: ["./kontakt.component.css"]
})
export class KontaktComponent implements OnInit {

    public submitPressed = false;

    public formGroup = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.pattern(/^.*[a-z0-9]+.*$/)]),
        email: new FormControl("", [
            Validators.required,
            Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
        message: new FormControl("", [
            Validators.required,
            Validators.pattern(/^.*[a-z0-9]+.*$/)])
    });

    constructor() { }

    get name(): AbstractControl {
        return this.formGroup.get("name");
    }

    get email(): AbstractControl {
        return this.formGroup.get("email");
    }

    get message(): AbstractControl {
        return this.formGroup.get("message");
    }

    public isNameInvalid(): boolean {
        return (this.name.invalid && this.name.touched) || (this.name.invalid && this.submitPressed) || this.name.dirty;
    }

    public isEmailInvalid(): boolean {
        return (this.email.invalid && this.email.touched
               ) || (this.email.invalid && this.submitPressed
               ) || this.email.dirty;
    }

    public isMessageInvalid(): boolean {
        return (this.message.invalid && this.message.touched
               ) || (this.message.invalid && this.submitPressed
               ) || this.message.dirty;
    }

    public submitDisabled(): boolean {
        return false;
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.submitPressed = true;
        console.log(`to submit: ${this.name.value}, ${this.email.value}, ${this.message.value}`);
    }
}
