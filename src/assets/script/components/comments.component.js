import { Component } from '../common/component';
import { DatabaseService } from '../services/database.service';

export class Comments extends Component {
    init() {
        this.onUpdate();
    }

    async onUpdate() {
        const textCardsHtml = await DatabaseService.getResource('./src/server/bin.php');
        const row = document.createElement('div');
        row.classList.add('row');
        row.innerHTML = textCardsHtml;
        this.element.innerHTML = '';
        
        this.element.append(row);
    }
} 