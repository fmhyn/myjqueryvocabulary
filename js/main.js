'use strict'

{
  const h1 = document.querySelector('h1');


  const Etexts = ['Hello!','Good morning!','Welcome!'];
  const Jtexts = ['こんにちは！','おはよう！','ようこそ！'];

  const section = document.querySelector('section');

  function creatWord(){
    for(let e=0; e < Etexts.length; e++){
      const div = document.createElement('div');
      const bi = document.getElementById('i');
      const i = bi.cloneNode(true);
      i.classList.remove('base');
      const bCheckedI = document.getElementById('checkedI');
      const checkedI = bCheckedI.cloneNode(true);
      checkedI.classList.remove('base');
      const Etext = document.createElement('p');
      const Jtext = document.createElement('p');
      const toJ = document.createElement('button');
      const toE = document.createElement('button');
      Etext.textContent = (Etexts[e]);
      Jtext.textContent = (Jtexts[e]);
      toJ.textContent = ('➡日本語');
      toE.textContent = ('➡英語');
      div.appendChild(i);
      div.appendChild(checkedI);
      div.appendChild(Etext);
      div.appendChild(Jtext);
      div.appendChild(toJ);
      div.appendChild(toE);
      section.appendChild(div);
    }
  }
  creatWord();
}


$(function(){

  $('div').addClass('word');
  $('p').attr('id','Etext');
  $('p + p').attr('id','Jtext');
  $('p + p').addClass('none');
  $('button').attr('id','toJ');
  $('button + button').attr('id','toE');
  $('button + button').addClass('none');


  $('[id=toJ]').click(function(){
    const $Jtext = $(this).siblings('#Jtext');
    const $Etext = $(this).siblings('#Etext');
    const $toJ = $(this);
    const $toE = $(this).siblings('#toE');

    $toE.removeClass('none');
    $toJ.addClass('none');
    $Jtext.removeClass('none');
    $Etext.addClass('none');

  });

  $('[id=toE]').click(function(){
    const $Jtext = $(this).siblings('#Jtext');
    const $Etext = $(this).siblings('#Etext');
    const $toJ = $(this).siblings('#toJ');
    const $toE = $(this);

    $toJ.removeClass('none');
    $toE.addClass('none');
    $Etext.removeClass('none');
    $Jtext.addClass('none');

  });


  
  $('[id=i]').click(function(){
    $(this).addClass('none');
    $(this).siblings('#checkedI').removeClass('none');
  });
  $('[id=checkedI]').click(function(){
    $(this).addClass('none');
    $(this).siblings('#i').removeClass('none');
  });

});



