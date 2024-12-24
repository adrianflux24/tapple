import { Injectable, signal } from "@angular/core";
import { alphabetData, questionsData } from './data'

@Injectable({ providedIn: 'root' })
export class EngineService {
  alphabet = signal([...alphabetData]);
  questions = signal([...questionsData])
  question = signal('');
  time = signal(8);
  timePassed = signal(0)
  intervalRef: any;


  start() {
    this._resetAlphabet()
    this._resetQuestions()
    this._reset();
    this.question.set('')
  }

  turn(letter: string) {
    this.alphabet.update(list => {
      const index = list.findIndex(x => x.value === letter);
      list[index].selected = true;
      return list;
    })
    this._restart()
  }

  next() {
    const questions = this.questions().filter(x => x.selected === false)
    if (questions.length === 0) {
      this._resetAlphabet();
      this._resetQuestions()
      this.next()
      return;
    }
    this._resetAlphabet();
    this._restart()

    const random = Math.floor(Math.random() * questions.length)
    const question = questions[random];
    this.question.set(question.label);
    this.read(question.label);
    this.questions.update(list => {
      const index = list.findIndex(x => x.id === question.id)
      list[index].selected = true;
      return list;
    })
  }

  private _resetAlphabet() {
    this.alphabet.update(list => {
      return list.map(x => ({ ...x, selected: false }));
    })
  }

  private _resetQuestions() {
    this.questions.update(list => {
      return list.map(x => ({ ...x, selected: false }));
    })
  }

  private _restart() {
    this._reset();
    this.intervalRef = setInterval(() => {
      if (this.timePassed() === this.time()) {
        this._resetAlphabet();
        this._reset();
        this.question.set('');
        this.read('Perdiste huevon!')
        return;
      }
      this.timePassed.update(t => t + 1);
    }, 1000)
  }

  private _reset() {
    this.timePassed.set(0);
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  read(text: string) {
    if ('speechSynthesis' in window) {
      const mensaje = new SpeechSynthesisUtterance(text);
      mensaje.lang = 'es-ES';
      mensaje.rate = 1;
      mensaje.pitch = 0;
      speechSynthesis.speak(mensaje);
    } else {
      console.log('Tu navegador no soporta SpeechSynthesis.');
    }
  }

}
