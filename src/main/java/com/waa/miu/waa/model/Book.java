package com.waa.miu.waa.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class Book {
    private int id;
    private String title;
    private String isbn;
    private double price;
}
