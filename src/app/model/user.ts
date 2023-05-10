import {PieceJointe} from "./piece-jointe";

export class User {
  idCollaborateur ?: number;
  cin?: number;
  nomComplet?: string;
  numeroDuCompte?: number;
  numeroSecuriteSociale?: number;
  numeroTelephone?: number;
  dateDeNaissance?: Date;
  adresse?: string;
  email?: string;
  natureEtude?: string;
  certifications?: string;
  anneeExperience?: number;
  niveauEtude?: string;
  recomendation?: boolean;
  status?:boolean;
  collaborateur?: string;
  commentaire?: string;
  anciennete?: string;
  salaireDeBase?: number;
  dateDebutContrat?: Date;
  dateFinContrat?: Date;
  idTypeContrat?: number;
  idAvantageSalaire?: number;
  idNiveauEtude?: number;
  idPoste?: number;
  idResponsable?: number;
  idDepartement?: number;
  pieceJointes?: PieceJointe[];


}
