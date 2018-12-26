import { BehaviorSubject } from "rxjs";

class EventsHub {

    constructor() {
        this.currentSearch = new BehaviorSubject([]);
        this.currentArticleDescription = new BehaviorSubject({});
        this.currentFilter = new BehaviorSubject({});
    }

    setCurrentSearch(searchArray) {
        this.currentSearch.next(searchArray);
    }

    onCurrentSearchChange = () => {
        return this.currentSearch.asObservable();
    }

    setCurrentProductDescription(product) {
        this.currentArticleDescription.next(product);
    }

    onCurrentArticleDescriptionChange = () => {
        return this.currentArticleDescription.asObservable();
    }

    //TODO: Resolve API search filters content
    // setCurrentFilters = (filter) => {
    //     this.currentFilter.next(filter);
    // }

    // onCurrentFilterChange = () => {
    //     return this.currentFilter.asObservable();
    // }
}

const eventshub = new EventsHub();

export default eventshub;
