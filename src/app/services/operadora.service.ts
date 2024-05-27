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
      name: 'data-operacao',
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
      name: 'razao-social',
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
      type: 'text',
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

  public createOperadora() {
    let dataOperacao = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'data-operacao')?.value;
    let responsavel = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'responsavel')?.value;
    let grupo = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'grupo')?.value;
    let codigo = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'codigo')?.value;
    let operadora = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'operadora')?.value;
    let razaoSocial = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'razao-social')?.value;
    let cnpj = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'cnpj')?.value;
    let email = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'email')?.value;
    let telefone = this.fieldInfoList.find(fieldInfoList => fieldInfoList.name === 'telefone')?.value;

    let data = {
      dataOperacao: dataOperacao,
      responsavel: responsavel,
      grupo: grupo,
      codigo: codigo,
      operadora: operadora,
      razaoSocial: razaoSocial,
      cnpj: cnpj,
      email: email,
      telefone: telefone
    }
    console.log(data);

    this.http.post('http://localhost:9999/create-operadora', data).subscribe((res) => {
      console.log(res);
    });
  }  
}
