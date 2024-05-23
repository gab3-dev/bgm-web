import { Injectable } from '@angular/core';
import { FieldInfo } from '../models/field-info';

@Injectable({
  providedIn: 'root'
})
export class OperadoraService {
  fieldInfoList: FieldInfo[] = [
    {
      id: 1,
      name: 'operadora',
      label: 'Operadora',
      type: 'text',
      required: true,
      placeholder: 'Digite o nome da operadora',
      value: ''    
    },
    {
      id: 2,
      name: 'cnpj',
      label: 'CNPJ',
      type: 'text',
      required: true,
      placeholder: 'Digite o CNPJ da operadora',
      value: ''
    }
  ];

  getAllHousingLocations(): FieldInfo[] {
    return this.fieldInfoList;
  }
  
  getHousingLocationById(id: number): FieldInfo | undefined {
    return this.fieldInfoList.find(fieldInfoList => fieldInfoList.id === id);
  }

  constructor() { }
}
