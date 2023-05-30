package pe.cibertec.cl2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(Model model){
        return "home";
    }

    @GetMapping("/userdetails")
    public String userdetails(Model model){
        return "usuario-detalle";
    }
}
