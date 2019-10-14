"use strict";

import Emp from './modules/emp';
import MakeBusiness from './modules/makeBusiness';

const emp = new Emp(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
const makeBusiness = new MakeBusiness({emp: emp.showEmp(),
                                      cash: [40000, 5000, 30400, 12000],
                                      eu: ['SRL', 'PLO', 'J&K'],
                                      rus: ['RusAuto', 'SBO']
                                    });
makeBusiness.viewMessage();

