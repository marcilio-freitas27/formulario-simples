import { InMemoryDbService } from 'angular-in-memory-web-api'

export class FakeApiService implements InMemoryDbService {

  createDb() {
    let users = [
      { nome: "Sicrano", telefone:	"849999990" },
      { nome: "Beltrano", telefone:	"849999991" },
      { nome: "Fulano", telefone:	"849999992" },
      { nome: "Gilcano", telefone:	"849999993" },
      { nome: "Cesano", telefone:	"849999994" },
      { nome: "Alano", telefone:	"849999995" },
      { nome: "Joano", telefone:	"849999996" },
      { nome: "Siclano", telefone:	"849999997" },
      { nome: "Ermano", telefone:	"849999998" },
      { nome: "Marrano", telefone:	"849999999" }
    ]
    return { users: users };
  }

}
