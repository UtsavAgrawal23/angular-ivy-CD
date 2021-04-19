import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <button (click)="changeMe()">Change Me</button>
    <div *ngIf="!loading">Loading</div>
    <div *ngIf="loading">content loaded now</div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  loading = false;
  constructor() {
    console.log("in constructor");
    console.log(this.name);
  }

  changeMe() {
    this.name = "Angular 11";
  }

  ngOnChanges() {
    console.log("on changes");
    console.log(this.name);
  }
  ngOnInit() {
    console.log("on init");
    console.log(this.name);
    setTimeout(() => {
      this.loading = true;
    }, 5000);
  }
  ngDoCheck() {
    console.log("do check");
    console.log(this.name);
  }
  ngAfterContentInit() {
    console.log("after content init");
    console.log(this.name);
  }
  ngAfterContentChecked() {
    console.log("after content checked");
    console.log(this.name);
  }
  ngAfterViewInit() {
    console.log("after view init");
    console.log(this.name);
  }
  ngAfterViewChecked() {
    console.log("after view checked");
    console.log(this.name);
  }
  ngOnDestroy() {
    console.log("on destroy");
    console.log(this.name);
  }
}
