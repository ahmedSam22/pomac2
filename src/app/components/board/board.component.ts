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
          img: '../../../assets/usr.png',
          title: 'test',
          desc: 'test',
          date: '22/04/2022',
          users: ['test',"test2"],
        },
      ],
    },
    {
      name: 'Done',
      cards: [],
    },
  ];

  newCol() {
    const col = new Lists(this.newList, []);
    this.lists.push(col);
  }
  newTask() {
    const current = new Date();
    const task = new Card();
    const logedUser = 'Ahmed';
    task.img = '../../../assets/usr.png';
    task.title = this.title;
    task.desc = this.desc;
    task.date = current.toLocaleDateString();
    task.users = this.users;
    this.lists.find((x) => x.name === 'Tasks')?.cards.push(task);
    task.users.push('logedUser');
  }
}
