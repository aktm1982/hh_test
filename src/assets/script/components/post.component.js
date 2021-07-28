import { Component } from '../common/component';
import { DatabaseService } from '../services/database.service';
import { Form } from '../common/form'; 

export class Post extends Component {
    constructor(selector, comments) {
        super(selector);
        this.comments = comments;
    }
    init() {
        const inputs = {
            'user-name': ['isRequired'],
            'user-email': ['isRequired', 'isEmail'],
            'text': ['isRequired', 'isMinLength']
        };

        this.form = new Form(this.element, inputs);

        this.element.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.form.clearErrors();
            if(this.form.isValid()) {
                const formData = new FormData(this.element);
                const formDataConverted = Object.fromEntries(formData.entries());

                await DatabaseService.postResurce(
                    './src/server/bin.php', 
                    JSON.stringify(formDataConverted)
                )
                this.form.clearInputs();
                this.comments.onUpdate();
            }
        });
    }
}