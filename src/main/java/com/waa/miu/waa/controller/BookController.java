package com.waa.miu.waa.controller;

import com.waa.miu.waa.model.Book;
import com.waa.miu.waa.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository){
        this.bookRepository=bookRepository;
    }

    @GetMapping(produces = "application/vnd.books.v1+json")
    public ResponseEntity<List<Book>> getBook() {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.bookRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestHeader("X-API-VERSION") String version, @RequestBody Book book) {
        System.out.println(version.equals("2"));
        if (version.equals("2")) {
            this.bookRepository.save(book);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(book);
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }

    @GetMapping("/v1/{id}")
    public ResponseEntity<Book> addBook(@PathVariable int id) {
        Book book = this.bookRepository.findById(id).get();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> putBook(@RequestParam("version") String version, @PathVariable int id, @RequestBody Book book) {
        if (version == "2") {
            Book currentBook = this.bookRepository.findById(id).get();
            currentBook.setTitle(book.getTitle());
            currentBook.setIsbn(book.getIsbn());
            currentBook.setPrice(book.getPrice());
            this.bookRepository.save(currentBook);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(currentBook);
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }

    @DeleteMapping
    public ResponseEntity<Book> deleteBook(@PathVariable int id) {
        this.bookRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }

}
