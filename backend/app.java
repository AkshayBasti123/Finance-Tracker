// app.java
package com.financetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@SpringBootApplication
@RestController
public class app {

    public static void main(String[] args) {
        SpringApplication.run(app.class, args);
    }

    private List<Map<String, String>> transactions = new ArrayList<>();

    @GetMapping("/transactions")
    public List<Map<String, String>> getTransactions() {
        return transactions;
    }

    @PostMapping("/transactions")
    public Map<String, String> addTransaction(@RequestBody Map<String, String> transaction) {
        transactions.add(transaction);
        return transaction;
    }
}
