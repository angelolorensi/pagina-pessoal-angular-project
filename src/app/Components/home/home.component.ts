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
        link: 'https://github.com/angelolorensi/Boi-no-Bolso',
      },
      {
        image: '/assets/img/food-app.png',
        title: 'Food App',
        description:
          'Food App é um projeto de site de comidas criado com Angular e uma API REST em Spring Boot',
        link: 'https://github.com/angelolorensi/Food-App',
      },
      {
        image: '/assets/img/boi-no-bolso.jpg',
        title: 'Boi no Bolso',
        description:
          'Projeto android java de um aplicativo de anúncio e venda de animais.',
        link: 'https://github.com/angelolorensi/Boi-no-Bolso',
      },
      {
        image: '/assets/img/boi-no-bolso.jpg',
        title: 'Boi no Bolso',
        description:
          'Projeto android java de um aplicativo de anúncio e venda de animais.',
        link: 'https://github.com/angelolorensi/Boi-no-Bolso',
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
