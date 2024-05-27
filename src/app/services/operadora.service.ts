import { Injectable } from '@angular/core';
import { FieldInfo } from '../models/field-info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperadoraService {
  constructor(private http: HttpClient) { }

  fieldInfoList: FieldInfo[] = [
    {
      id: 1,
      name: 'dataOperacao',
      label: 'Data da Operação',
      type: 'text',
      required: true,
      placeholder: 'Digite a Data da operacao',
      value: ''    
    },
    {
      id: 2,
      name: 'responsavel',
      label: 'Responsavel',
      type: 'text',
      required: true,
      placeholder: 'Digite o Responsavel da operadora',
      value: ''
    },
    {
      id: 3,
      name: 'grupo',
      label: 'Grupo',
      type: 'text',
      required: true,
      placeholder: 'Digite o Grupo da operadora',
      value: ''
    },
    {
      id: 4,
      name: 'codigo',
      label: 'Codigo da Operadora',
      type: 'text',
      required: true,
      placeholder: 'Digite o Codigo da operadora',
      value: ''
    },
    {
      id: 5,
      name: 'operadora',
      label: 'Operadora',
      type: 'text',
      required: true,
      placeholder: 'Digite a Operadora',
      value: ''
    },
    {
      id: 6,
      name: 'razaoSocial',
      label: 'Razao Social',
      type: 'text',
      required: true,
      placeholder: 'Digite a Razão social da operadora',
      value: ''
    },
    {
      id: 7,
      name: 'cnpj',
      label: 'CNPJ',
      type: 'text',
      required: true,
      placeholder: 'Digite o CNPJ da operadora',
      value: ''
    },
    {
      id: 8,
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Digite o Email da operadora',
      value: ''
    },
    {
      id: 9,
      name: 'telefone',
      label: 'Telefone',
      type: 'text',
      required: true,
      placeholder: 'Digite o Telefone da operadora',
      value: ''
    }
  ];

  getAllFields(): FieldInfo[] {
    return this.fieldInfoList;
  }
  
  getFieldById(id: number): FieldInfo | undefined {
    return this.fieldInfoList.find(fieldInfoList => fieldInfoList.id === id);
  }

  public createOperadora(data: any) {    
    console.log(data);

    this.http.post('http://localhost:9999/create-operadora', {
      headers: {
        'Content-Type': 'application/json'
      }, data,
    }).subscribe((res) => {
      console.log(res);
    });
  }  
}
