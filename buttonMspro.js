const template = document.createElement('template');
template.innerHTML = `
<style>
    .button-mspro {
        position:relative;
        height:30px;
        width: 100px;
        text-align: center;
        line-height: 30px;
        color: #ffffff;
        border-radius: 50px;
        font-weight: bold;
        background: #32d2f3;
        cursor: pointer;
        transition-duration: 200ms;
    }
    
    .button-mspro:hover {
        background: #12a0bd;
        
        transition-duration: 200ms;
    }

    .button-mspro:active {
        background: #0a5c6d;
        box-shadow: inset 0px 0px 5px rgba(0,0,0,0.5);
    } 
</style>
<div class="button-mspro">

</div>
`;

class buttonMspro extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('div').innerText = this.getAttribute('name');

    }
}

window.customElements.define('button-mspro', buttonMspro);
module.exports.buttonMspro = buttonMspro;

