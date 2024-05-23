import { Component, Input } from '@angular/core';
import { FieldInfo } from '../../models/field-info';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})

export class TextFieldComponent {
  @Input() fieldInfo!: FieldInfo;
}
