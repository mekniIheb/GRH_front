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
  collaborateur?: string;
  commentaire?: string;
  anciennete?: string;
  idGrade?: number;
  idContrat?: number;
  pieceJointes?: PieceJointe[];
}
