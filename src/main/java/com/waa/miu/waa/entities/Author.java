package com.waa.miu.waa.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Author {

    @Id
    private int id;

    private String name;
}
