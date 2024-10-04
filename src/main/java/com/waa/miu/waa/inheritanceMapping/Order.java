package com.waa.miu.waa.inheritanceMapping;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private int orderid;

    private LocalDate date;


    @ManyToOne
    private Customer customer;

    @OneToMany
    private List<OrderLine> orderLines;
}
