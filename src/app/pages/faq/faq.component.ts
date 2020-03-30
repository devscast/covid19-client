import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  loading: boolean;
  error = false;

  constructor() { }

  ngOnInit() {
  }

}