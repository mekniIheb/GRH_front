import { Pipe, PipeTransform } from '@angular/core';
import {PosteService} from "../service/poste.service";
import {TypeContratService} from "../service/type-contrat.service";

@Pipe({
  name: 'typeContrat'
})
export class TypeContratPipe implements PipeTransform {
  result :any=null;

  constructor(private service : TypeContratService) { }

  transform(idTypeContrat:number): Promise<string> {
    return this.service.getTypeContrat(idTypeContrat).then(response => {
console.log("aa",response)
        return (response.nomTypeContrat);
      }
    );
  }

}
