import { Component, inject } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'timer',
  styles: `

span {
  font-size: 4rem;
  font-weight: bold;
}
`,
  template: `
<span>{{ engine.timePassed() }}</span>
`
})
export class Timer {
  protected engine = inject(EngineService);


}
