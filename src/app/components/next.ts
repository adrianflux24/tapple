import { Component, inject } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'next',
  styles: `
button {
  color: #f1f1f1;
  padding: 0.7em 6em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #000;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 6px 6px 12px #eaeaea, -6px -6px 12px #ffffff;
}
`,
  template: `
<button (click)="next()">NEXT</button>
`
})
export class Next {
  engine = inject(EngineService);

  next() {
    this.engine.next();
  }
}
