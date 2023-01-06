import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mostrarSi]'
})

//2. tomando en cuenta que esta directiva es un componente de angular 
//posee ciclos de vida asi que vamos a implementar el onInit 
export class ResaltarDirective implements OnInit{


  //4. Vamos a gregar un decorador input
  // todo componente tiene un input y un outpu
  // y bien sabemos que un compoente es una directiva pero con template y ts
  @Input('mostrarSi') show = true;

  //crearemos otro input, para el else, la variable se llama mi Otro template
  //pero dentro del html la variable se llamará else
  @Input('mostrarSiElse') otherTemplate:TemplateRef<any> | null = null;


  //1. toda directiva con * se renderiza dentro de un ng-template como un Wrapper
  //primero tenemos que hacer que el template que tenga nuestra directiva se pueda visualizar 
  //para empezar necesitamos inicializar dos variables en nuestro constructor
  constructor(private viewcontainerRef:ViewContainerRef, private template:TemplateRef<any>){

  }

  ngOnInit(): void {
    //3. lo que hacemos aqui es para que solo se haga el render es escribir lo siguiente
    if(this.show) this.viewcontainerRef.createEmbeddedView(this.template)
    else if (this.otherTemplate) this.viewcontainerRef.createEmbeddedView(this.otherTemplate)
    
  }
  

}

