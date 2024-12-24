
import { Component, inject } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'restart',
  styles: `
button {
  color: #808080;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #f2f2f2;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 6px 6px 12px #eaeaea, -6px -6px 12px #ffffff;
}
`,
  template: `
<button (click)="engine.start()">RESET</button>
`
})
export class Restart {
  protected engine = inject(EngineService);
}
