import { Component, inject } from '@angular/core';
import { FieldInfo } from '../../models/field-info';
import { TextFieldComponent } from "../../components/text-field/text-field.component";
import { PracaService } from '../../services/praca.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-pracas',
    standalone: true,
    templateUrl: './pracas.component.html',
    styleUrl: './pracas.component.scss',
    imports: [TextFieldComponent, NgFor]
})

export class PracasComponent {
    title = 'BGM - Praças';
    fieldInfoList: FieldInfo[] = [];
    pracaService: PracaService = inject(PracaService);
  
    constructor() {
      this.fieldInfoList = this.pracaService.getAllHousingLocations();
    }
}
