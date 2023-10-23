import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Model/Project';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allProjects?: Project[];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private viewportScroller: ViewportScroller
  ) {
    this.form = fb.group({
      name: ['', Validators.required, Validators.minLength(5)],
      email: ['', Validators.required, Validators.email],
      subject: ['', Validators.required, Validators.minLength(5)],
      message: ['', Validators.required, Validators.minLength(10)],
    });
  }

  ngOnInit(): void {
    this.allProjects = [
      {
        image: '/assets/img/boi-no-bolso.jpg',
        title: 'Boi no Bolso',
        description:
          'Projeto android java de um aplicativo de anúncio e venda de animais.',
        repositoryLink: 'https://github.com/angelolorensi/Boi-no-Bolso',
        deployLink: ''
      },
      {
        image: '/assets/img/food-app.png',
        title: 'Food App',
        description:
          'Food App é um projeto de site de comidas criado com Angular e uma API REST em Spring Boot',
        repositoryLink: 'https://github.com/angelolorensi/Food-App',
        deployLink: ''
      },
      {
        image: 'https://raw.githubusercontent.com/angelolorensi/twitter-clone/main/screenshots/screenshot2.png',
        title: 'Twitter Clone',
        description:
          'Este é um projeto de clone do frontend da rede social Twitter desenvolvido em Angular. O objetivo deste projeto é demonstrar as habilidades de desenvolvimento frontend e a familiaridade com o framework Angular, recriando a interface de usuário do Twitter.',
        repositoryLink: 'https://github.com/angelolorensi/twitter-clone',
        deployLink: ''
      },
      {
        image: '/assets/img/biblioteca-pessoal.png',
        title: 'Biblioteca Pessoal',
        description:
          'Este projeto foi desenvolvido como parte da seleção para participar do programa Code Stack 2.0 da empresa Jetimob.',
        repositoryLink: 'https://github.com/angelolorensi/biblioteca-pessoal-angular',
        deployLink: 'https://angelolorensi.github.io/deploy-biblioteca-pessoal-angular/'
      },
    ];
  }

  async sendEmail() {
    if (this.form.valid) {
      emailjs.init('gKNEACLDNVf9ydo70');
      let response = await emailjs.send('service_nas055k', 'template_yn5zfym', {
        from_name: this.form.value.name,
        to_name: 'angelo lorensi',
        message: this.form.value.message,
        subject: this.form.value.subject,
        from_email: this.form.value.email,
      });

      alert('Email de contato enviado com sucesso!');
      this.form.reset();
    }
  }

  public scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
       setTimeout(() => {
         element.scrollIntoView({ behavior: 'smooth'});
       }, 100);
    }
  }


}
