import { Request,Response } from "express";
import { Rivalry } from "../models/rivalry.interface";

export class AppService {

  constructor() {
  }

  public rivalryLevel(req: Request, res: Response) {
    req;

    const result: Rivalry[]= [{
      rivalryLevel:120,
      team1: "Corinthians",
      team2: "Palmeiras",
      rivalryType: "Torcedores/Jogos"
    },
    {
      rivalryLevel:50,
      team1: "Corinthians",
      team2: "Santos",
      rivalryType: "Torcedores/Jogos"    
    },
    {
      rivalryLevel:70,
      team1: "Sao Paulo",
      team2: "Santos",
      rivalryType: "Torcedores/Jogos"    
    }
    ];
    let rivalryCorinthiansPalmeiras: any;
    let rivalryCorinthiansSantos: any;

    result.forEach(element => {
      if(element.team1 === 'Corinthians' || element.team2 === 'Corinthians'){
        if(element.team1== 'Palmeiras' || element.team2 === 'Palmeiras'){
          rivalryCorinthiansPalmeiras = element;
        }
      }

      if(element.team1 === 'Corinthians' || element.team2 === 'Corinthians'){
        if(element.team1== 'Santos' || element.team2 === 'Santos'){
          rivalryCorinthiansSantos = element;
        }
      }
    });

    if((rivalryCorinthiansPalmeiras && rivalryCorinthiansPalmeiras.rivalryLevel) 
      > (rivalryCorinthiansSantos && rivalryCorinthiansSantos.rivalryLevel)){
        console.log("passou na validação");
    }

    return res.status(200).send("checa grau de rivalidade");
  }

}