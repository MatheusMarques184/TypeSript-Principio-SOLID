import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustumerOrder,
} from './interface/custumerProtocol';

export class IndividualCustumer
  implements IndividualCustomerProtocol, CustumerOrder
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return `cpf: ${this.cpf}`;
  }
}

export class EnterpriseCustumer
  implements EnterpriseCustomerProtocol, CustumerOrder
{
  constructor(public name: string, public cnpj: string) {}

  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return `cnpj: ${this.cnpj}`;
  }
}
