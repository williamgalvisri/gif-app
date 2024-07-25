import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: `./sidebar.component.html`,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(
        private gifsService: GifsService,
        private sidebarService: SidebarService
    ) {

    }

    get tags() {
        return this.gifsService.tagsHistory;
    }

    get getPosition() {
        return this.sidebarService.state ? '0px' : '-250px'
    }

    applySearch(tag: string) {
        this.gifsService.searchTag(tag);
    }

    closeSidebar() {
        this.sidebarService.showSidebar(false);
    }

}
