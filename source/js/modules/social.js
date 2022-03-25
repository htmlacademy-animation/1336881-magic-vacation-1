export default () => {

  let socialBlock = document.querySelector(`.js-social-block`);
  let socialBlockList = document.querySelector('.social-block__list');

  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
    socialBlock.classList.add(`social-block--init`);
    socialBlockList.classList.add(`social-block__list--active`);
    socialBlockList.classList.add(`social-block__list--active`);
    this.querySelector('button').classList.remove('leave');
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
    socialBlockList.classList.remove(`social-block__list--active`);
  });


  socialBlockList.addEventListener(`mouseover`, function (e) {
    e.stopPropagation();
    this.closest('.js-social-block').querySelector('button').classList.add('leave');
  });
  socialBlockList.addEventListener(`mouseleave`, function (e) {
    e.stopPropagation();
    this.closest('.js-social-block').querySelector('button').classList.remove('leave');
  });
};
