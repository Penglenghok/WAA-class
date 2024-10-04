package com.waa.miu.waa.inheritanceMapping;


import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Product {

    @Id
    private int id;

    private String name;

    protected String description;


}
