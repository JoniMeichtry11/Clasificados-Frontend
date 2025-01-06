import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mensaje: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMensaje().subscribe((data) => {
      this.mensaje = data.mensaje;
    });
  }
}
