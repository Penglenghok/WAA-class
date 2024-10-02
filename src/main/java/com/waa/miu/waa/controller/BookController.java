package com.waa.miu.waa.controller;

import com.waa.miu.waa.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    List<Book> books = new ArrayList<>();

    @GetMapping(produces = "application/vnd.books.v1+json")
    public ResponseEntity<List<Book>> getBook() {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(this.books);
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestHeader("X-API-VERSION") String version, @RequestBody Book book) {
        if (version == "2") {
            this.books.add(book);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(book);
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }

    @GetMapping("/v1/{id}")
    public ResponseEntity<Book> addBook(@PathVariable int id) {
        Book book = this.books.stream().filter(x -> x.getId() == id).findFirst().get();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> putBook(@RequestParam("version") String version, @PathVariable int id, @RequestBody Book book) {
        if (version == "2") {
            Book currentBook = this.books.stream().filter(x -> x.getId() == id).findFirst().get();
            currentBook.setTitle(book.getTitle());
            currentBook.setIsbn(book.getIsbn());
            currentBook.setPrice(book.getPrice());
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(currentBook);
        }
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
    }

    @DeleteMapping
    public ResponseEntity<Book> deleteBook(@PathVariable int id, @RequestBody Book book) {
        Book currentBook = this.books.stream().filter(x -> x.getId() == id).findFirst().get();
        this.books.remove(currentBook);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(currentBook);
    }

}
