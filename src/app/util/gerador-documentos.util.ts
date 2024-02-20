import { Injectable } from "@angular/core";
import { mkConfig, generateCsv, download } from "export-to-csv";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})

export class GeradorDocumentosUtil {

  gerarCsv(lista: any[]){
    const csvConfig = mkConfig(
      {
        useKeysAsHeaders: true,
        filename: 'tabela-usuarios'
      }
    );
    let mockData: any[] = [];

    lista.forEach(value =>{
      mockData.push({
        Nome: value.nome,
        Telefone: value.telefone
      })
    })

    const csv = generateCsv(csvConfig)(mockData);

    download(csvConfig)(csv);
  }

  gerarPdf(lista: any[]) {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [['Nome', 'Telefone']],
      body: lista.map(value => [value.nome, value.telefone]),
      columnStyles: {
        0: {
          cellWidth: 'auto',
          halign: 'left',
        },
        1: {
          cellWidth: 'auto',
          halign: 'left',
        },
      },
    });

    doc.output('dataurlnewwindow', {
      "filename": "tabela-usuarios"
    });
  }

}
