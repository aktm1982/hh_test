import { Post } from './components/post.component';
import { Comments } from './components/comments.component';
import '../scss/style.scss'

$(document).ready(() => {
    const comments = new Comments('comments');
    new Post('add-text-form', comments);
});