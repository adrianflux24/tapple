import { Component, inject, input, output } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'letter',
  styles: `
:host {
display: flex;
align-items:center;
justify-content: center;
padding-block: 4px;
  user-select: none;
  color: #808080;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.1em;
  background: #f2f2f2;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 6px 6px 12px #eaeaea, -6px -6px 12px #ffffff;
&.inactive{
  opacity: 0.4;
  box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px  #eaeaea;
}
}
`,
  host: {
    'role': 'button',
    '(click)': 'select()',
    '[class.inactive]': 'item().selected === true'
  },
  template: `
{{ item().label }}
`
})
export class Letter {
  engine = inject(EngineService)
  item = input.required<any>()
  selected = output<string>()


  select() {
    if (this.item().selected === true) {
      return;
    }

    this.engine.read(this.item().value);
    this.selected.emit(this.item().value);
  }
}
