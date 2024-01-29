import { InMemoryDbService } from 'angular-in-memory-web-api'

export class FakeApiService implements InMemoryDbService {

  createDb() {
    let users = [
      { id: 1, nome: "Sicrano", telefone:	"849999990" },
      { id: 2, nome: "Beltrano", telefone:	"849999991" },
      { id: 3, nome: "Fulano", telefone:	"849999992" },
      { id: 4, nome: "Gilcano", telefone:	"849999993" },
      { id: 5, nome: "Cesano", telefone:	"849999994" },
      { id: 6, nome: "Alano", telefone:	"849999995" },
      { id: 7, nome: "Joano", telefone:	"849999996" },
      { id: 8, nome: "Siclano", telefone:	"849999997" },
      { id: 9, nome: "Ermano", telefone:	"849999998" },
      { id: 10, nome: "Marrano", telefone:	"849999999" }
    ]
    return { users: users };
  }

}
