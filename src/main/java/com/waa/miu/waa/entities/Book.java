package com.waa.miu.waa.entities;


import jakarta.persistence.*;

@Entity
public class Book {

    @Id
    private int id;

    private String name;

    private String isbn;

    @ManyToOne
    @JoinColumn(name = "publiser_id")
    private Publisher publisher;

    @OneToOne
    private Author author;
}
