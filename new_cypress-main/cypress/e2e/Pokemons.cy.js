describe('Тестирование смены аватара в покемонах', function () {
   it('Позитивный кейс авторизации', function () {
        cy.visit('https://pokemonbattle.me'); //зайти на сайт покемонов
        cy.get(':nth-child(1) > .auth__input').type('petrov.vladislav-ne@yandex.ru');  //найти окно почта и ввести верную почту
        cy.get('#password').type('W1station'); //найти окно пароль и ввести верный пароль
        cy.get('.auth__button').click(); //жмём кнопку авторизации
        cy.get('.header__btns > [href="/shop"]').click(); //кликаем магазин
        let rundomNumber = Math.floor(Math.random() * 11) + 1;
        cy.get(`:nth-child(${rundomNumber}) > .shop__button`).click();  // кликаем рандомный аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLNIKOV');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click();        
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();  
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        



              
    })
})