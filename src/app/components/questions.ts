import { Component, inject } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'question',
  styles: `

span {
  font-size: 1.2rem;
  font-weight: bold;
}
`,
  template: `
<span>{{ engine.question() }}</span>
`
})
export class Question {
  protected engine = inject(EngineService);
}
