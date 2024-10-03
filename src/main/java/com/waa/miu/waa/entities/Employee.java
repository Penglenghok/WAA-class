package com.waa.miu.waa.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Employee {

    @Id
    private int id;

    private String name;

    @ManyToOne
    private Department department;
}
