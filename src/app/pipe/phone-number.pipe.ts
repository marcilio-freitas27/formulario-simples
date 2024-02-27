import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): any {
    let regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    if (regex.test(value)) {
      let numeroFormatado = value.replace(regex, (match, ddd, espaco, primeirosNumeros,segundosNumeros ) => {
        return ddd ? `+${ddd} ${espaco} ${primeirosNumeros}-${segundosNumeros}` : `${espaco} ${primeirosNumeros}-${segundosNumeros}`;
      });
      return numeroFormatado;
    }
  }

}
