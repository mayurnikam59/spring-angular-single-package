package com.spot.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpotCoreApplication {

    public static void main(String[] args){

        SpringApplication.run(SpotCoreApplication.class,args);
        System.out.println("SPOT READY");
    }

}
