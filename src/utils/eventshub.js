import { BehaviorSubject } from "rxjs";

class EventsHub {

    constructor() {
        this.currentSearch = new BehaviorSubject([]);
        this.currentArticleDescription = new BehaviorSubject({});
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
}

const eventsHub = new EventsHub();

export default eventsHub;
