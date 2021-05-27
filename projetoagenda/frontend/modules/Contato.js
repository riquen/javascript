import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        if (!nomeInput.value) {
            this.createError(nomeInput, 'Campo "Nome" é obrigatório.')
            error = true;
        }

        if (!emailInput.value && !telefoneInput.value) {
            this.createError(emailInput, 'Informe pelo menos um contato: e-mail ou telefone.');
            this.createError(telefoneInput, 'Informe pelo menos um contato: e-mail ou telefone.');
            error = true;
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'E-mail inválido.');
            error = true;
        }

        if (!error) el.submit();
    }

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}