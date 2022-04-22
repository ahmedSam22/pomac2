import { Lists } from './../../models/lists';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

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

  ngOnInit(): void {}
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

  newCol($event: Event) {
    if (!this.newList) {
      return;
    }
    const col = new Lists(this.newList, []);
    this.lists.push(col);
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
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  drop(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }
}
