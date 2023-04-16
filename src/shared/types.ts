export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
} 

export interface BenefitType{
    icon: JSX.Element;
    title: string;
    description: string;
}
/* Para realizar un atributo como opcional se agrega ? */
export interface ClassType{
    name: string;
    description?: string;
    image: string;
}