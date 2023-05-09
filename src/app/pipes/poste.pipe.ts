import { Pipe, PipeTransform } from '@angular/core';
import {PosteService} from "../service/poste.service";
import {Poste} from "../model/poste";

@Pipe({
  name: 'poste'
})
export class PostePipe implements PipeTransform {

  result :any=null;

  constructor(private posteservice : PosteService) { }

  transform(idPoste: number): Promise<any> {
    return this.posteservice.getPoste(idPoste).then(response => {
      console.log("---",response)
      return response.nomPoste;
    });
  }

}
