
import {
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    getDoc,
    getDocs
} from 'firebase/firestore';
import {firestore} from '../firebase/firebase';
import { Library } from '../models/library';

class LibraryService {

    async createLibrary(book) {
        const collectionReference = collection(firestore, 'library');
        const docReference = await addDoc(collectionReference, {
            title: book.title,
            author: book.author,
            isbn: book.isbn,
        });
        book.id = docReference.id
        return book;
    }

    async readLibrary() {
        const collectionReference = collection(firestore, 'library');
        const q = query(collectionReference);

        const querySnapshot = await getDocs(q);

        const books = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const book = new Library(
                doc.id,
                data.title,
                data.author,
                data.isbn
            );

            books.push(book);
        });

        return books;

    }

    async updateLibrary(book) {

    }

    async deleteLibrary(bookId) {
        const docReference = doc(firestore, 'library', bookId);
        await deleteDoc(docReference);
    }
}

const service = new LibraryService;
export default service;