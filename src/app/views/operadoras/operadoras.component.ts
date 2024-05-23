import { Component, inject } from '@angular/core';
import { FieldInfo } from '../../models/field-info';
import { OperadoraService } from '../../services/operadora.service';
import { TextFieldComponent } from "../../components/text-field/text-field.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-operadoras',
    standalone: true,
    templateUrl: './operadoras.component.html',
    styleUrl: './operadoras.component.scss',
    imports: [TextFieldComponent, NgFor]
})

export class OperadorasComponent {
  title = 'BGM - Operadoras';
  fieldInfoList: FieldInfo[] = [];
  operadoraService: OperadoraService = inject(OperadoraService);

  constructor() {
    this.fieldInfoList = this.operadoraService.getAllHousingLocations();
  }
}
