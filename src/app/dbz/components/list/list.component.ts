import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

/*   @Output()
  onDeleteIndex: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void  {
    //TODO id character
    console.log(index)

    this.onDeleteIndex.emit(index);
  } */

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  //onDeleteCharacter(id: string|undefined): void  {
  onDeleteCharacter(id?: string): void  {
    console.log(id);
    if(!id) return;

    this.onDeleteId.emit(id);
  }
}
