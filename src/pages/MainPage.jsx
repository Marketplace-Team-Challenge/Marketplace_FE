import { CardComponent } from "../components/UI/CardComponent/CardComponent";
import { SearchComponent } from "../components/UI/SearchComponent/Search";
import { SpecialOffers } from "../components/UI/SpecialOffers/SpecialOffers";

export const MainPage = () => {
    return (
        <>
        <SearchComponent />
        <CardComponent />
        <SpecialOffers />
        </>
    );
}