import { Component, NgModule, inject } from '@angular/core';
import { FieldInfo } from '../../models/field-info';
import { OperadoraService } from '../../services/operadora.service';
import { TextFieldComponent } from "../../components/text-field/text-field.component";
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-operadoras',
    standalone: true,
    templateUrl: './operadoras.component.html',
    styleUrl: './operadoras.component.scss',
    imports: [TextFieldComponent, NgFor, FormsModule]
})

export class OperadorasComponent {
  title = 'BGM - Operadoras';
  fieldInfoList: FieldInfo[] = [];
  operadoraService: OperadoraService = inject(OperadoraService);

  onSubmit(form: NgForm) {
    this.operadoraService.createOperadora(form.value);
  }

  constructor() {
    this.fieldInfoList = this.operadoraService.getAllFields();
  }
}
