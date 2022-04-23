import { Lists } from './../../models/lists';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})

export class BoardComponent implements OnInit {
  constructor() {}
  newList: string = '';

  // img: string ="";
  title: string = '';
  desc: string = '';
  date: string = '';
  users: [] = [];

  lists: Lists[] = [
    {
      name: 'Tasks',
      cards: [
        {
          id: 1,
          img: '../../../assets/usr.png',
          title: 'test',
          desc: 'test',
          date: '22/04/2022',
          users: ['test', 'test2'],
        },
      ],
    },
    {
      name: 'Done',
      cards: [],
    },
  ];

  ngOnInit(): void {
  }

  newCol($event: Event) {
    if (!this.newList) {
      return;
    }
    const col = new Lists(this.newList, []);
    this.lists.push(col);
    this.newList = '';
    let closeNewColumnModal = document.getElementById("closeNewColumnModal");
    if(closeNewColumnModal) closeNewColumnModal.click()
  }
  newTask() {
    const current = new Date();
    const task = new Card();
    const logedUser = 'Ahmed';
    let users = []
    let id: any = this.lists.find((x) => x.name === 'Tasks')?.cards.length;
    task.id = id++ | 1;
    task.img = '../../../assets/usr.png';
    task.title = this.title;
    task.desc = this.desc;
    task.date = this.date || current.toLocaleDateString();
    users.push(this.users)
    
    task.users = [logedUser,...users];
    this.lists.find((x) => x.name === 'Tasks')?.cards.push(task);
    console.log(this.users);
    
    // task.users?.push(logedUser);
    console.log(this.lists.find((x) => x.name === 'Tasks')?.cards);
    let closeNewTaskModal = document.getElementById("closeNewTaskModal");
    if(closeNewTaskModal) closeNewTaskModal.click()
  }

  getList($event:any){    
    return this.lists.find((x) => x.name === $event?.name)?.cards
  }

  drop(event:any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
