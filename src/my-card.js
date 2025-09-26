import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Penn State Card";
    this.imgSrc = "https://brand.psu.edu/images/backgrounds/veritcal-1-mark_registered.png";
    this.description = "The primary Penn State logo, known as the University mark, features a Nittany Lion shield combined with the custom-drawn 'PENNSTATE' logotype. The shield is a contemporary representation of the university's heritage, while the logotype is a strong, slab-serif-inspired font. In addition to this mark, there are specific logos for intercollegiate athletics, which often include a stylized Nittany Lion head in an oval, and distinct marks for specific campuses and administrative units, all adhering to the overall Penn State brand standards.";
    this.buttonURL = "https://hax.psu.edu/";
    this.buttonLabel = "Details";
    this.fancy = false;
  }
  


  static get styles() {
    return css`
      :host {
        display: block;
      }
      .Cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
      }
      .Main.color-change {
        background-color: grey;
      }
      .Main {
        background-color: lightblue;
        padding: 10px;
        margin: 64px auto;
        max-width: 400px;
        border-radius: 16px;
        box-shadow: 5px 5px 5px darkblue; 
        border: 1.5px solid darkblue;
        transition: background-color 0.5s ease;
      }
      .Main.fancy {
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      .Main > div {
        margin: 16px;
      }
      .Main h1 {
        text-align: center;
        color: darkblue;
      }
      .Body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 120px;
        background: transparent
      }
      .Body img {
        max-width: 100%;
        display: block;
        aspect-ratio: auto;
        margin: 0 auto;
        
      }
      p {
        color: darkblue;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }
      details[open] summary {
        font-weight: bold;
      }
      details div {
        border: 2px solid darkblue;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
      .Button {
        display: flex;
        justify-content: center;
      }
      button {
        border: 1px solid darkblue;
        background-color: white;
      }
      button:hover {
        background-color: lightblue;
      }
      @media (max-width: 500px) {
        .Main {
          width: 90%;
        }
      }

    `;
  }

   openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="Main${this.fancy ? ' fancy' : ''}">
      <div><h1>${this.title}</h1></div>
      <div class="Body">
        <img src="${this.imgSrc}" alt="Card image"/>
        </div>
        <details ?open="${this.fancy}"  @toggle="${this.openChanged}">
          <summary>Description</summary>
          <p><slot name="description">${this.description}</slot></p>
        </details>
        <div class="Button">
          <button @click="${() => window.open(this.buttonURL)}">${this.buttonLabel}</button>
        </div>
      </div>`;
  }

  openChanged(event) {
    console.log(event);
    this.fancy = event.target.open;
  }

  static get properties() {
    return {
      title: { type: String },
      imgSrc: { type: String },
      bgColor: { type: String },
      colorChange: { type: Boolean },
      cards: { type: Array },
      description: { type: String },
      buttonURL: { type: String },
      buttonLabel: { type: String },
      fancy: {type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
