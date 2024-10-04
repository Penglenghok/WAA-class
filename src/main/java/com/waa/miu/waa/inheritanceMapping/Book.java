package com.waa.miu.waa.inheritanceMapping;


import jakarta.persistence.Entity;

@Entity
public class Book extends Product {
    private String title;
}
