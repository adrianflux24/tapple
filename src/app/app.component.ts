import { Component, inject } from '@angular/core';
import { Letter } from './components/letter';
import { EngineService } from './service/engine.service';
import { Next } from './components/next';
import { Timer } from './components/timer';
import { Question } from './components/questions';
import { Restart } from './components/restart';

@Component({
  selector: 'app-root',
  imports: [Letter, Next, Timer, Question, Restart],
  styles: `
:host {
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
padding: 1rem;
}
.hud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 10px;
  width: 100%;
}
.alphabet {
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
}
`,
  template: `
<section class="hud">

  <div style="display: flex; gap: 10px;">
<restart />
<next />
  </div>

  <div style="display: flex; align-items: center; gap: 10px;">
<question />
<timer />
  </div>

</section>
<section class="alphabet">
@for(item of engine.alphabet(); track item.value) {
<letter [item]="item" (selected)="engine.turn($event)"/>
}
</section>
`
})
export class AppComponent {
  protected engine = inject(EngineService);
}
