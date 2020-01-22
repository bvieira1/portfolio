import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

import { Effect } from './data/Effect';
import { LoginUi } from './data/LoginUi';
import { GoogleStadia } from './data/google-stadia';
import { AngularLTE } from './data/AngularLTE';
import { ApiLaravel } from './data/ApiLaravel';
import { portfoliloData } from './data/portfolio.data';
import { ApiMyFood } from './data/ApiMyFood';
import { MyFood } from './data/MyFood';
import { LojaVirtual } from './data/LojaVirtual';
import { TravelRS } from './data/TravelRS';
import { BurgeKing } from './data/BurgerKing';
import { FoodBy } from './data/FoodBy';
import { loginBloc } from './data/LoginBloc';
import { skateBoard } from './data/SkateBoard';
import { Crud } from './data/Crud';
import { RosaRestaurante } from './data/RosaRestaurante';
import { Nubank } from './data/Nubank';
import { BoxEffect } from './data/BoxEffect';
import { CloneNetflix } from './data/CloneNetflix';
import { CloneApple } from './data/CloneApple';

const getAllProject = () => {
  const projects = [
    Effect,
    LoginUi,
    portfoliloData,
    ApiMyFood,
    GoogleStadia,
    AngularLTE,
    skateBoard,
    TravelRS,
    FoodBy,
    MyFood,
    ApiLaravel,
    loginBloc,
    BurgeKing,
    RosaRestaurante,
    LojaVirtual,
    Crud,
    Nubank,
    BoxEffect,
    CloneNetflix,
    CloneApple
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
