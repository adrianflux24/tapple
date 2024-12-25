import { Component, inject, input, output } from "@angular/core";
import { EngineService } from "../service/engine.service";

@Component({
  selector: 'letter',
  styles: `
span {
  text-align: center;
  font-size: 16px;
}
:host {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
justify-content: center;
padding-block: 4px;
  user-select: none;
  color: #f1f1f1;
  padding: 0.0em;
  border-radius: 0.6em;
  background: black;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  transition: all 0.3s;
  font-weight: bolder;
  box-shadow: 6px 6px 12px #eaeaea, -6px -6px 12px #ffffff;
&.inactive{
  opacity: 0.1;
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
<span></span>
<span style="transform: rotate(180deg)">{{ item().label }}</span>
<span></span>
<span style="transform: rotate(90deg)">{{ item().label }}</span>
<span></span>
<span style="transform: rotate(270deg)">{{ item().label }}</span>
<span></span>
<span>{{ item().label }}</span>
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
