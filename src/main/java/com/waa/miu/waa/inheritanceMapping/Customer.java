package com.waa.miu.waa.inheritanceMapping;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Customer {

    @Id
    private int id;

    private String firstName;

    private String lastName;


    @OneToMany(mappedBy = "customer")
    private List<Order> orders;

}
