import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  work: any = {
    ten: '',
    status: false
  };
  arrWorkList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.getListLocalStorage();
  }
  getListLocalStorage() {
    if (localStorage.getItem("ArrList") == null || localStorage.getItem("ArrList") == "") {
      this.arrWorkList = [];
    } else {
      let data: any = localStorage.getItem("ArrList");
      this.arrWorkList = JSON.parse(data);
    }
  }
  addWork() {
    if (this.work.ten == '') {
      alert('Hãy nhập tên công việc');
    } else {
      this.arrWorkList.push(this.work);
      localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
      this.getListLocalStorage();
    }
  }
  delete(i: number) {
    this.getListLocalStorage();
    this.arrWorkList.splice(i, 1);
    localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
    this.getListLocalStorage();
  }
  update(i: number) {
    let data = prompt("Hãy điền tên công việc bạn muốn cập nhật");
    this.getListLocalStorage();
    this.arrWorkList[i].ten = data;
    localStorage.setItem('ArrList', JSON.stringify(this.arrWorkList));
  }
}
