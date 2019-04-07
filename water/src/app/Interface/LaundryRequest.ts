export interface ILaundryRequest {
    RequestId:number,
    UserId:string,
    WashingTime :any,
    WhitesOnly :boolean,
    DenimsOrTrousersOnly :boolean,
    GarmentsOnly :boolean,
    UnderGarmentsOnly :boolean,
     Weight :number,
    WashingMachine:boolean,
     Status :string
}