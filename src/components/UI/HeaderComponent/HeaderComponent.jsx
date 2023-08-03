import css from './HeaderComponent.module.css';
import { NavigationComponent } from './components/navigationComponent/NavigationComponent';
import { TopHeaderComponent } from './components/topHeaderComponent/TopHeaderComponent';

export const HeaderComponent = () => {
    return (
        <header className={css.headerComponent}>
            <TopHeaderComponent />
            <NavigationComponent />
        </header>
        
    );
}
