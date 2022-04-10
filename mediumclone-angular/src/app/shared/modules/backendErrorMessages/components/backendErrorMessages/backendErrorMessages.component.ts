import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/auth/types/backendErrors.interface";

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backendErrorMessages.component.html',
    styleUrls: ['./backendErrorMessages.component.scss']
})

export class BackendErrorMessagesComponent implements OnInit{
    //What it is inside Input is an alias for the variable 
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

    errorMessages: string[];

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrorsProps).map((name:string) => {
            const messages = this.backendErrorsProps[name].join(' ')
            return `${name} ${messages}`
        })
    }
}