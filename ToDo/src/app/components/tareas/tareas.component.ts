import { Component, Input } from '@angular/core';
import { IList } from 'src/app/interface/todo.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  @Input() task!: IList;
}
