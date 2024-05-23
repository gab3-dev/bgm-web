import { Injectable } from '@angular/core';
import { FieldInfo } from '../models/field-info';

@Injectable({
  providedIn: 'root'
})
export class PracaService {
  fieldInfoList: FieldInfo[] = [
    {
      id: 1,
      name: 'praca',
      label: 'Praça',
      type: 'text',
      required: true,
      placeholder: 'Digite o nome da praça',
      value: ''    
    },
    {
      id: 2,
      name: 'cnpj',
      label: 'CNPJ',
      type: 'text',
      required: true,
      placeholder: 'Digite o CNPJ da praça',
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
