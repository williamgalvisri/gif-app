import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { SidebarService } from '../../../shared/service/sidebar.service';

@Component({
    selector: 'gifs-home-page',
    templateUrl: `home-page.component.html`,
    styleUrl: './home-page.component.css',
})
export class HomePageComponent {
    constructor(
        private gifsService: GifsService,
        private sidebarService: SidebarService
    ) {

    }

    get tags() {
        return this.gifsService.tagsHistory;
    }

    get gifs$() {
        return this.gifsService.gifList$;
    }

    showMenu() {
        this.sidebarService.showSidebar(!this.sidebarService.state)
    }
}
