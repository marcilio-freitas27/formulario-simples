import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { CadastroService } from '../service/cadastro.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private cadastroService: CadastroService) {

   }

  ngOnInit(): void {
    let usuarios = this.cadastroService.listarUsuario();
    let usuarioNome: any[];
    usuarioNome = [];
    for (let index = 0; index < usuarios.length; index++) {
      usuarioNome.push(usuarios[index].nome)
    }
    const ctx: any = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: usuarioNome,
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 9,7,1,4],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
